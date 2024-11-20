import MobileHeader from "@/components/MobileHeader";
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-900 h-screen ">
      <MobileHeader />
      <Sidebar />
      {children}
      <MobileNavbar />
    </div>
  );
}