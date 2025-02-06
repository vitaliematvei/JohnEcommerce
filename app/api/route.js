import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
import User from "@/app/models/user";
import bcrypt from "bcrypt";

export async function GET(req) {
  return NextResponse.json({ time: new Date().toLocaleString() });
}

export async function Post(req) {
  await dbConnect();
  const body = await req.json();
  const { name, email, password } = body;

  try {
    const user = await new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    }).save();

    console.log("user created => ", user);

    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
