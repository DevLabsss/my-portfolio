// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Anton } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "o7xabz — Web3 Ambassador & Moderator",
  description:
    "Connecting dots across Web3. Ambassador · Moderator · Content Creator.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "o7xabz — Web3 Ambassador & Moderator",
    description:
      "Connecting dots across Web3. Ambassador · Moderator · Content Creator.",
    url: "https://your-domain.com",
    siteName: "o7xabz",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${mono.variable} ${display.variable} bg-[#000] text-[#e9f2f4] antialiased`}
      >
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.06]" />
        {children}
      </body>
    </html>
  );
}
