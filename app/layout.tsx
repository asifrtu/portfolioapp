import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Asif Raza – Software Developer",
  description:
    "| ReactJS | NodeJS | Mern Stack | AWS | Lambda | S3 | Cloudflare | Learning AI/ML | MongoDB | Microservices | SQL | Docker",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/apple-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/apple-icon.png",
        media: "(prefers-color-schem*e: dark)",
      },
      {
  url:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="32 184 576 272">
        <rect width="640" height="640" fill="#FFFFFF"/>

        <!-- A -->
        <rect x="64" y="192" width="64" height="256" fill="#000"/>
        <rect x="128" y="192" width="128" height="64" fill="#000"/>
        <rect x="256" y="192" width="64" height="256" fill="#000"/>
        <rect x="128" y="320" width="128" height="64" fill="#000"/>

        <!-- R -->
        <rect x="352" y="192" width="64" height="256" fill="#000"/>
        <rect x="416" y="192" width="96" height="64" fill="#000"/>
        <rect x="512" y="256" width="64" height="64" fill="#000"/>
        <rect x="416" y="320" width="96" height="64" fill="#000"/>
        <rect x="512" y="384" width="64" height="64" fill="#000"/>
      </svg>
    `),
  type: "image",
}
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}