import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Teacher Ada | English Tutor for Kids, Adults & IELTS Prep",
  description: "Personalized online English lessons for all levels. Specialized tutoring for kids and adults, professional business English, and expert IELTS exam preparation for students in Chinese, Japanese, and Korean-speaking countries.",
  keywords: [
    'online English tutor', 'English teacher for kids', 'English lessons for adults', 'IELTS tutor',
    'IELTS preparation', 'ESL for kids', 'business English', 'professional English lessons',
    'English teacher for Chinese students', 'English tutor Japan', 'learn English Korea'
  ],
  authors: [{ name: 'Teacher Ada' }],
  openGraph: {
    title: "Teacher Ada | English Tutor for Kids, Adults & IELTS Prep",
    description: "Personalized online English lessons for all levels. Specialized tutoring for kids and adults, professional business English, and expert IELTS exam preparation for students in Chinese, Japanese, and Korean-speaking countries.",
    url: "https://www.teacherada.com",
    siteName: 'Teacher Ada',
    images: [
      {
        // Note: I've updated the file name here to "Ada.jpg" for consistency,
        // but you will need to rename your image file as well.
        url: 'https://www.teacherada.com/images/Ada.jpg',
        width: 800,
        height: 600,
        alt: 'Teacher Ada',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}