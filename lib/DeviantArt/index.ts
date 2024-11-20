"use server";

export const fetchArt = async (accessToken: string) => {
  try {
    const response = await fetch("https://www.deviantart.com/api/v1/oauth2/browse/home?mature_content=true", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    })

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchToken = async () =>{
  try {
    const response = await fetch(`https://www.deviantart.com/oauth2/token?grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_SECRET}`, {
      cache: "no-cache",
    })

    const data = await response.json();

    if(response.ok) {
      return (data.access_token);
    }
  } catch (error: any) {
    console.log(error);
  } 
}

export const fetchStories = async (accessToken: string) => {
  try {
    const response = await fetch("https://www.deviantart.com/api/v1/oauth2/browse/home?q=literature&mature_content=true", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    })

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchArtById = async (accessToken: string, id: string) => {
  try {
    const response = await fetch(`https://www.deviantart.com/api/v1/oauth2/deviation/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    })

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchArtCommentsById = async (accessToken: string, id: string) => {
  try {
    const response = await fetch(`https://www.deviantart.com/api/v1/oauth2/comments/deviation/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    })

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const fetchCommentReplies = async (accessToken: string, commentId: string) => {
  try {
    const response = await fetch(
      `https://www.deviantart.com/api/v1/oauth2/comments/${commentId}?access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch comment replies:", error);
  }
}

async function fetchUserProfile(username: string, accessToken: string) {
  try {
    const response = await fetch(
      `https://www.deviantart.com/api/v1/oauth2/user/profile/${username}?access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
}