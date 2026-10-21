import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Peterson Amblessed — Full-Stack Developer", template: "%s — Peterson Amblessed" },
  description: "Portfolio of Peterson Amblessed, a developer in Nigeria building web, mobile, fintech, SaaS, and Web3 products.",
  openGraph: { title: "Peterson Amblessed — Full-Stack Developer", description: "Web, mobile, fintech, SaaS, and Web3 products." }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
