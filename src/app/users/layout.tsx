import Confirmation from "@/components/Confirmation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users - Redux Toolkit",
  description: "An easy example of Redux toolkit with Next.js 14",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Confirmation />
      <Modal />
      <main className="flex-grow h-full">{children}</main>
      <Footer />
    </div>
  );
}
