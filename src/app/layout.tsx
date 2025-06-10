// app/layout.tsx
import './globals.css';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: "Pichamon's Portfolio",
  description: "Frontend Developer Portfolio using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
