import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miikka Savolainen | Junior Full-Stack Developer",
  description:
    "Portfolio of Miikka Savolainen – Junior Full-Stack Developer (React, TypeScript, GraphQL, PostgreSQL, PHP).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
