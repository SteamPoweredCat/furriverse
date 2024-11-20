
export async function GET(req: Request ) {
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
      })
    });

    const data = await response.json();

    return Response.json(data, {status: 200})
  } catch (error: any) {
    console.log(error);
    return Response.json({error: error?.message}, {status: 500})
  }
}