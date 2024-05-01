import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "WyzeBot",
  description:
    "An innovative web app that transforms chat-based instructions into real-time coded web components using AI.",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" className="dark">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
