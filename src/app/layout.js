import "./globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "ElderlyEase | Home Care Services",
  description: "Manage and simplify elder care solutions.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
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
