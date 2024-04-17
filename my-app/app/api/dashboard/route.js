import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = async (request) => {
  try {
    const requestBody = await request.json();
    const userQuery = requestBody.userQuery;

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
      model: "gpt-4-turbo",
      response_format: { type: "json_object" },
    });

    console.log("Response", completion.choices[0].message.content);

    return new Response(completion.choices[0].message.content, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return Response("Something went wrong.", { status: 500 });
  }
};
