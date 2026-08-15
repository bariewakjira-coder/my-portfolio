import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Full-Stack Software Engineer | Enterprise & Cloud Systems",
    template: "%s | Full-Stack Software Engineer",
  },
  description:
    "Portfolio of a Full-Stack Software Engineer specializing in enterprise systems, automated workflows, security (RBAC), and cloud applications built with .NET, Angular, React, PostgreSQL, and MySQL.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "ASP.NET Core",
    "C#",
    "Angular",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "Enterprise Systems",
  ],
  authors: [{ name: "Software Engineer" }],
  creator: "Software Engineer",
  metadataBase: new URL("https://my-portfolio.vercel.app"),
  openGraph: {
    title: "Full-Stack Software Engineer | Enterprise & Cloud Systems",
    description:
      "Specializing in enterprise systems, security automation (RBAC), and high-performance databases using .NET, Angular, React, and PostgreSQL.",
    url: "https://my-portfolio.vercel.app",
    siteName: "Software Engineer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Software Engineer | Enterprise Systems",
    description:
      "Specializing in enterprise systems, security automation (RBAC), and high-performance databases.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}