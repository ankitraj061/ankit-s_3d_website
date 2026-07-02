import "./globals.css";
import { Navbar } from "@/components";

export const metadata = {
  title: "Ankit Raj | Portfolio",
  description:
    "Portfolio of Ankit Raj — Software Engineer and Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-300/20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
