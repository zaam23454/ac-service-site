import "./globals.css";

export const metadata = {
  title: "AC Repair & Installation | Karachi",
  description: "AC repair, installation, service, gas refill, and shifting in Karachi. Same-day visits available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
