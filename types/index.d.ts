/* eslint-disable no-unused-vars */
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type SignUpParams = {
  username: string;
  email: string;
  password: string;
};

declare type SignInParams = {
  email: string;
  password: string;
}

declare type Artwork = {
  $id: string;
  title: string;
  description: string;
  text: string | null;
  tags: string[];
  image: string | null;
  artist: User;
  comments: Comment[];
}

declare type Art = {
  $id: string;
  title: string;
  artist: User;
  description: string;
  image: string;
  comments: [];
};

declare type Story = {
  $id: string;
  title: string;
  text: string;
  artist: User;
  comments: [];
}

declare type Comment = {
  $id: string;
  text: string;
  author: User;
  artId: string | null;
  storyId: string | null;
}

declare type User = {
  $id: string;
  email: string;
  userId: string;
  username: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  dateOfBirth: string;
  bio?: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};

declare type ArtType = "art" | "story";

declare interface PageProps {
  params: { [key: string]: string }
}
