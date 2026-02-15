import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matt G. Wagner",
    template: "%s | Matt G. Wagner",
  },
  description:
    "A Tampa, FL-based Software Engineer and Leadership Coach working with teams across the country",
  authors: [{ name: "Matt G. Wagner" }],
  openGraph: {
    title: "Matt G. Wagner",
    description:
      "A Tampa, FL-based Software Engineer and Leadership Coach working with teams across the country",
    url: "https://mattgwagner.com",
    siteName: "Matt G. Wagner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>
              <Link href="/">Matt G. Wagner</Link>
            </h1>

            <p className="view">
              <Link href="/">Home</Link>
            </p>
            <p className="view">
              <Link href="/cv">My Resume</Link>
            </p>
            <p className="view">
              <a
                href="https://drive.google.com/file/d/1gEw8LA6LDKd1cu_o3LFoFxZB5fXI_E4L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Military Biography
              </a>
            </p>
            <p className="view">
              <a
                href="https://www.redleg.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me!
              </a>
            </p>
            <p className="view">
              <a
                href="https://leadership.mattgwagner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leadership Notebook
              </a>
            </p>
            <p className="view">
              <a
                href="https://github.com/mattgwagner"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My GitHub Profile
              </a>
            </p>
            <p className="view">
              <a
                href="https://github.com/mattgwagner/New-Machine"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Machine
              </a>
            </p>
            <p className="view">
              <Link href="/contactme">Contact Me</Link>
            </p>
          </header>

          <section>{children}</section>

          <footer>
            <p>
              <small>Matt G. Wagner - Personal Website</small>
            </p>
          </footer>
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Script id="calendly-init" strategy="lazyOnload">
          {`Calendly.initBadgeWidget({url: 'https://calendly.com/mattgwagner', text: 'Schedule a Call', color: '#4d5055', branding: true});`}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-12660514-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-12660514-1');
          `}
        </Script>
      </body>
    </html>
  );
}
