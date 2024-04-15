import "./globals.css";

export const metadata = {
  title: "WyzeBot",
  description:
    "An innovative web app that transforms chat-based instructions into real-time coded web components using AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}