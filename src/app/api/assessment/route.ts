import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { UserRole } from "@prisma/client";

interface CustomError extends Error {
  response: { status: number; data: any };
}

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const assessments = await db.assessment.findMany();
  if (assessments) {
    return NextResponse.json(assessments);
  } else return NextResponse.json({ error: "No assessment found" });
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const requestBody = await req.json();
    const user = userId ? await clerkClient.users.getUser(userId) : null;
    const { title, description } = requestBody;
    if (user?.emailAddresses[0].emailAddress) {
      const email = user?.emailAddresses[0].emailAddress;
      const findEligibleUser = await db.user.findFirst({ where: { email } });
      if (findEligibleUser?.role === UserRole.TUTOR) {
        const assessment = await db.assessment.create({
          data: {
            title,
            description,
          },
        });
        if (assessment) {
          return NextResponse.json(
            { message: "Assessment created!", assessment },
            { status: 201 }
          );
        } else {
          return NextResponse.json(
            { error: true, message: "Creation failed!" },
            { status: 400 }
          );
        }
      }
    }
  } catch (error) {
    console.error("Error Encountered while doing registration", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || error.cause || error },
        { status: 500 }
      );
    }
  }
}
