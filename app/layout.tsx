import "./globals.css";
import { Montserrat } from "next/font/google";
import GlobalStyles from "./components/GlobalStyles";
// import TryNowButton from "./components/TryNowButton";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BudgetBuddy",
  description: "Your personal finance companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body
        className={`${montserrat.className} scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100`}
      >
        <GlobalStyles />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js');
                });
              }
            `,
          }}
        />
        {/* <TryNowButton /> */}
      </body>
    </html>
  );
}
