import "./globals.css";

export const metadata = {
  title: "WyzeBot",
  description:
    "An innovative web app that transforms chat-based instructions into real-time coded web components using AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark" className="dark">
      <body>{children}</body>
    </html>
  );
}
