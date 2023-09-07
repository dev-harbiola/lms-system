"use client";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tasks } from "@/data/taskDemo";
import { useRouter } from "next/navigation";

const TaskTable = () => {
  const { push } = useRouter();
  const handleTask = (task: (typeof tasks)[0]) => {
    push(`/student/task/${task.id}`);
  };
  return (
    <Card className="dark:bg-special-600">
      <Table className="">
        <TableCaption>React Tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="">Score</TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task, i) => (
            <TableRow
              key={task.id}
              className="capitalize"
              onClick={() => handleTask(task)}
            >
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell>{task.Deadline}</TableCell>
              <TableCell>{task.score}</TableCell>
              <TableCell className="text-emerald-500">{task.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TaskTable;
