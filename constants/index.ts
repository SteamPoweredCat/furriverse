export const sidebarItems = [
  {
    name: "Home",
    icon: "/icons/home.svg",
    href: "/",
  },
  {
    name: "Art",
    icon: "/icons/image.svg",
    href: "/art",
  },
  {
    name: "Stories",
    icon: "/icons/post.svg",
    href: "/stories",
  },
];

export const mobileNavbarItems = [
  {
    name: "Home",
    icon: "/icons/home.svg",
    href: "/",
  },
  {
    name: "Art",
    icon: "/icons/image.svg",
    href: "/art",
  },
  {
    name: "Stories",
    icon: "/icons/post.svg",
    href: "/stories",
  },
  {
    name: "Profile",
    icon: "/icons/profile.svg",
    href: "/profile/1",
  },
  {
    name: "Create Post",
    icon: "/icons/submit.svg",
    href: "/submit",
    invert: true,
  }
]

// generate random 10 furry usernames with variety of species
export const furryUsernames: string[] = [
  "FoxyFur",
  "PurrfectPaws",
  "BarkBuddy",
  "HowlAtTheMoon",
  "MeowMix",
  "PawPrints",
  "Furball",
  "FuzzyWuzzy",
  "WhiskerWags",
  "TailSpin"
];

// Generate dummy data users for art
export const users: User[] = [
  {
    $id: "1",
    email: "john.doe@example.com",
    userId: "u12345",
    username: furryUsernames[0],
    name: "John Doe",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    dateOfBirth: "1985-06-15",
    bio: "Software developer with 10 years of experience."
  },
  {
    $id: "2",
    email: "jane.smith@example.com",
    userId: "u12346",
    username: furryUsernames[1],
    name: "Jane Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "TX",
    postalCode: "67890",
    dateOfBirth: "1990-04-22",
    bio: "Graphic designer and freelance artist."
  },
  {
    $id: "3",
    email: "michael.jones@example.com",
    userId: "u12347",
    username: furryUsernames[2],
    name: "Michael Jones",
    address: "789 Pine St",
    city: "Sometown",
    state: "FL",
    postalCode: "11223",
    dateOfBirth: "1978-11-03",
    bio: "Project manager with a background in marketing."
  },
  {
    $id: "4",
    email: "emily.davis@example.com",
    userId: "u12348",
    username: furryUsernames[3],
    name: "Emily Davis",
    address: "101 Maple St",
    city: "Yourtown",
    state: "NY",
    postalCode: "44556",
    dateOfBirth: "1995-02-14",
    bio: "Content writer and social media strategist."
  },
  {
    $id: "5",
    email: "william.brown@example.com",
    userId: "u12349",
    username: furryUsernames[4],
    name: "William Brown",
    address: "202 Birch St",
    city: "Mytown",
    state: "WA",
    postalCode: "78901",
    dateOfBirth: "1980-07-25"
  },
  {
    $id: "6",
    email: "olivia.wilson@example.com",
    userId: "u12350",
    username: furryUsernames[5],
    name: "Olivia Wilson",
    address: "505 Walnut St",
    dateOfBirth: "1988-12-10"
  },
  {
    $id: "7",
    email: "liam.martinez@example.com",
    userId: "u12351",
    username: furryUsernames[6],
    name: "Liam Martinez",
    address: "303 Elm St",
    city: "Hometown",
    state: "IL",
    postalCode: "22334",
    dateOfBirth: "1975-09-18"
  },
  {
    $id: "8",
    email: "sophia.lee@example.com",
    userId: "u12352",
    username: furryUsernames[7],
    name: "Sophia",
    dateOfBirth: "1993-03-05",
    bio: "Digital marketer with a passion for analytics."
  },
  {
    $id: "9",
    email: "james.moore@example.com",
    userId: "u12353",
    username: furryUsernames[8],
    name: "James Moore",
    address: "404 Cedar St",
    city: "TheirTown",
    state: "OH",
    postalCode: "55667",
    dateOfBirth: "1983-05-30"
  },
  {
    $id: "10",
    email: "ava.jackson@example.com",
    userId: "u12354",
    username: furryUsernames[9],
    name: "Ava Jackson",
    dateOfBirth: "1991-08-08",
    bio: "Entrepreneur and startup enthusiast."
  }
];

// generate dummy data from images in public/images as type art
export const arts: Art[] = [
  {
    $id: "a1",
    title: "Aiko",
    artist: users[1],
    description: "random description of aiko",
    image: "/images/aiko.jpg",
    comments: []
  },
  {
    $id: "a2",
    title: "Amber Gamble",
    artist: users[3],
    description: "random description of amber gamble",
    image: "/images/amber_gamble.png",
    comments: []
  },
  {
    $id: "a3",
    title: "Kayden",
    artist: users[8],
    description: "random description of kayden",
    image: "/images/kayden.jpg",
    comments: []
  },
  {
    $id: "a4",
    title: "Aleesha Sawyer",
    artist: users[0],
    description: "random description of aleesha sawyer",
    image: "/images/aleesha_sawyer.png",
    comments: []
  },
  {
    $id: "a5",
    title: "Faraine",
    artist: users[5],
    description: "random description of faraine",
    image: "/images/faraine_sfw.png",
    comments: []
  },
  {
    $id: "a5",
    title: "Gamija",
    artist: users[9],
    description: "random description of gamija",
    image: "/images/gamija_sfw.png",
    comments: []
  }
];



