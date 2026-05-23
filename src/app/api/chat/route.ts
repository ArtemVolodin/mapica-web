import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  SYSTEM_PROMPT,
  getFallbackResponse,
  type ChatMessage,
} from "@/lib/assistant-knowledge";

export const runtime = "nodejs";

type RequestBody = {
  messages: ChatMessage[];
};

export async function POST(request: Request) {
  let messages: ChatMessage[] = [];

  try {
    const body = (await request.json()) as RequestBody;
    messages = body.messages ?? [];

    if (!messages.length) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        message: getFallbackResponse(lastUser.content),
        source: "fallback",
      });
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
    });

    const reply =
      completion.choices[0]?.message?.content?.trim() ||
      getFallbackResponse(lastUser.content);

    return NextResponse.json({ message: reply, source: "openai" });
  } catch (error) {
    console.error("[chat]", error);

    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (lastUser) {
      return NextResponse.json({
        message: getFallbackResponse(lastUser.content),
        source: "fallback",
      });
    }

    return NextResponse.json(
      {
        message:
          "I'm having trouble connecting right now. Please try again in a moment, or book an intro call using the form on this page.",
        source: "error",
      },
      { status: 200 }
    );
  }
}
