export async function POST(req: Request) {
  const { accessToken } = await req.json();

  console.log(accessToken);

  try {
    const response = await fetch("https://www.deviantart.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_SECRET!,
        access_token: accessToken,
      }),
    })

    const data = await response.json();
    console.log(data);
    return Response.json(data)
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500});
  }
}