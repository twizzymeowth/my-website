import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import { getSiteSettings } from "@/sanity/lib/queries";

const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title:
        settings?.seoTitle ??
        "Christopher Kundrat -- Cybersecurity Portfolio",
    description:
        settings?.seoDescription ??
        "Cybersecurity student at Old Dominion University. Ethical hacking, cloud security, penetration testing, and security consulting.",
  };
}

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraft } = await draftMode();

  return (
      <html lang="en">
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
      {children}
      {isDraft && <VisualEditing />}
      </body>
      </html>
  );
}