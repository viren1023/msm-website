import { NextResponse } from "next/server"

export async function POST(req){
  const body = await req.json()
  console.log(body)
//   console.log(body.name);
//   console.log(body.email);
//   console.log(body.message);

  return new Response('Ok');
}