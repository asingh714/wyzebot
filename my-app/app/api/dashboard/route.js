import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = async (request) => {
  try {
    const requestBody = await request.json();
    const userQuery = requestBody.userQuery;

    console.log("query", userQuery);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: process.env.PROMPT,
        },
        {
          role: "user",
          content: userQuery,
        },
      ],
      temperature: 0.9,
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
    });

    console.log("completion", completion);

    return new Response(completion.choices[0].message.content, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return Response("Something went wrong.", { status: 500 });
  }
};
