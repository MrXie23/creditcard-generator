import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credit Card Generator - Test Credit Card Numbers for Development",
  description: "Generate valid test credit card numbers for development and testing purposes. Support for Visa, Mastercard, American Express, and more card types.",
  keywords: ["credit card generator", "test credit card", "fake credit card", "development tool", "testing data", "valid card numbers"],
  authors: [{ name: "Credit Card Generator Tool" }],
  openGraph: {
    title: "Credit Card Generator - Test Credit Card Numbers",
    description: "Generate valid test credit card numbers for development and testing purposes.",
    url: "https://creditscardgenerator.com",
    siteName: "Credit Card Generator",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9VR4GTH04K"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VR4GTH04K');
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow py-8 bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
