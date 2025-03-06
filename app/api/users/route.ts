import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      created_at: true,
    },
  });

  const formattedData = users.map((user) => ({
    ...user,
    createdAt: dayjs(user.created_at).format("DD-MM-YYYY"),
  }));

  return new Response(JSON.stringify({ data: formattedData }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  // Validate input fields
  if (!username || !password) {
    return NextResponse.json(
      {
        errors: [
          { field: "username", message: "Username is required" },
          { field: "password", message: "Password is required" },
        ],
      },
      { status: 400 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Check if the username already exists
  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    return NextResponse.json(
      { errors: [{ field: "username", message: "Username already exists" }] },
      { status: 400 }
    );
  }

  // Create the user
  await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
