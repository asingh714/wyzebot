import "./globals.css";

export const metadata = {
  title: "Wyzebot",
  description:
    "An innovative web app that transforms chat-based instructions into real-time coded web components using AI.",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
