import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@utility/Container';
import ProgressBar from '@utility/ProgressBar';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { assessment as questions } from 'data/assessment';
import { BsStopwatch } from 'react-icons/bs';

const index = () => {
  const [] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([
    { answerByUser: '' },
  ]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [timerInterval, setTimerInterval] = useState<any>();
  let interval: any;
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  function startTimer() {
    const countDownTimer = Date.now() + 30000;
    interval = setInterval(() => {
      const nowTime = new Date() as unknown;
      const duration = countDownTimer - (nowTime as number);
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);

      if (duration < 0) {
        clearInterval(interval);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setShowScore(true);
        return;
      } else {
        setTime({ hours: 0, minutes, seconds });
      }
    }, 1000);
  }
  function endTimer() {}

  const handle = useFullScreenHandle();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    startTimer();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handlePrevious = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const nextQues = currentQuestion + 1;
    console.log(questions.length);
    nextQues < questions?.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer: any) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handleSubmitButton = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        ({ answer, isCorrect }: any) =>
          isCorrect &&
          answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <FullScreen handle={handle}>
      <div className="flex">
        <aside className="w-[300px] fixed h-screen bg-gray-300">
          <div id="avatar-card" className="px-12 py-6">
            <Image src="/avatar.png" width={200} height={200} alt="avatar" />
          </div>
          <header className="font-semibold text-center">
            Examinee Details
          </header>
          <div className="p-5">
            <div>
              <h3 className=" text-lg font-semibold border-b-2 mb-2">
                FirstName
              </h3>
              <span>Abiola</span>
            </div>
            <div>
              <h3 className=" text-lg font-semibold border-b-2 mb-2">
                LastName
              </h3>
              <span>Fasanya</span>
            </div>
            <div>
              <h3 className=" text-lg font-semibold border-b-2 mb-2">Course</h3>
              <span>HTML5</span>
            </div>
            <div>
              <h3 className=" text-lg font-semibold border-b-2 mb-2">
                User ID
              </h3>
              <span>Ad1234afd0</span>
            </div>
          </div>
          <div className="form-group px-5">
            <Link
              href="/exam/login"
              className="btn bg-gray-500 hover:bg-gray-600 rounded-none"
              title="Logout"
            >
              Logout
            </Link>
          </div>
        </aside>
        <main className="ml-[300px] w-full h-screen bg-white">
          <div className="flex bg-gray-500 p-3 space-x-8 w-full">
            <div className="border rounded px-5 py-2 bg-gray-100 w-[30%]">
              <div className="flex">
                <h3 className="font-semibold">Current Paper:</h3>
                <span>FMATHS-2022</span>
              </div>
              <div className="flex">
                <h3 className="font-semibold">Current Question:</h3>
                <span>30 of 30</span>
              </div>
            </div>
            <div className="border rounded flex flex-col justify-center items-center py-2 bg-gray-100 w-[20%]">
              <BsStopwatch className="text-[48px] text-center" />
              <span className="font-bold text-xl text-center">
                {time.hours}:{time.minutes}:{time.seconds}
              </span>
            </div>
            <div className="border rounded px-5 py-2 bg-gray-100 w-[50%]">
              <div className="flex my-2 space-x-4 flex-row">
                <h3 className="font-semibold flex-shrink-0">Time Progress:</h3>
                <ProgressBar
                  align="left"
                  progress="70"
                  bgcolor="rgb(59 130 246)"
                  color="rgb(239 246 255)"
                  height="25px"
                  className="bg-gray-300"
                />
              </div>
              <div className="flex my-2 space-x-4 flex-row">
                <h3 className="font-semibold flex-shrink-0">Exam Progress:</h3>
                <ProgressBar
                  align="left"
                  progress="25"
                  bgcolor="rgb(59 130 246)"
                  color="rgb(239 246 255)"
                  height="25px"
                  className="bg-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="flex bg-gray-300 w-full p-2 space-x-3">
            <button
              className="ml-auto btn rounded-none bg-gray-500 hover:bg-gray-600"
              onClick={handle.enter}
            >
              FullScreen Mode
            </button>
            <button className="btn rounded-none bg-gray-500 hover:bg-gray-600">
              Finish Exam
            </button>
          </div>
          <Container className="bg-white w-full p-5">
            {showScore ? (
              <h1 className="text-3xl h-screen font-semibold text-center text-black">
                You scored {score} out of {questions.length}
              </h1>
            ) : (
              <>
                <h2 className="text-xl font-semibold">Instruction</h2>
                <p className="text-gray-700 text-sm">
                  Choose the correct option
                </p>

                <h2 className="text-lg font-semibold">Question</h2>
                <div className="flex flex-col items-start w-full">
                  <h4 className="mt-10 text-xl text-black/60">
                    Question {currentQuestion + 1} of {questions.length}
                  </h4>
                  <div className="mt-4 text-2xl text-black">
                    {questions[currentQuestion].question}
                  </div>
                </div>

                <form>
                  <div className="flex flex-col w-full">
                    {questions[currentQuestion].answerOptions.map(
                      (answer: any, index) => (
                        <div
                          key={index}
                          className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-black/5 border-black/10 rounded-xl"
                          onClick={(e: any) =>
                            handleAnswerOption(answer?.answer)
                          }
                        >
                          <input
                            type="radio"
                            className="w-6 h-6 bg-black"
                            name={answer.answer}
                            value={answer.answer}
                            checked={
                              answer.answer ===
                              selectedOptions[currentQuestion]?.answerByUser
                            }
                            onChange={(e) => handleAnswerOption(answer.answer)}
                          />
                          <p className="ml-6 text-gray-900">{answer.answer}</p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex justify-between w-full mt-4 text-white">
                    <button
                      className="w-[49%] py-3 bg-blue-600 rounded-lg"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button
                      className="w-[49%] py-3 bg-blue-600 rounded-lg"
                      onClick={
                        currentQuestion + 1 === questions.length
                          ? handleSubmitButton
                          : handleNext
                      }
                    >
                      {currentQuestion + 1 === questions.length
                        ? 'Submit'
                        : 'Next'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </Container>
        </main>
      </div>
    </FullScreen>
  );
};

export default index;
