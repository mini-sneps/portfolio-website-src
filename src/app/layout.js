import "./globals.css";

export const metadata = {
  title: "My Portfolio Website",
  description: "This is my portfolio website to showcase my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
