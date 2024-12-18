import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "ElderlyEase | Home Care Services",
  description: "Manage and simplify elder care solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
