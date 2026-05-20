import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are Faraxis AI, a smart assistant that helps build apps and websites.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return Response.json({
    reply: res.choices[0].message.content,
  });
}
