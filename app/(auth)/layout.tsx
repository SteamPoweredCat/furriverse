import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full h-full justify-between bg-gray-900">
      {children}
      <div className="flex w-[50%] h-screen sticky top-0 items-center justify-end max-xl:hidden">
        <div className=" w-full h-full">
          <Image src="/images/aika.jpg" alt="auth image" width={640} height={640} className="w-full h-full object-cover"/>
        </div>
      </div>
    </main>
  );
}