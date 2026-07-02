import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
