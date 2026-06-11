import type { Metadata } from 'next';
import { domine, sourceSans3, jetbrainsMono } from '@/lib/fonts';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ResumeProvider } from '@/context/ResumeContext';
import { ResumeModal } from '@/components/ui/ResumeModal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anuj Patil — Backend Engineer',
  description:
    'Backend engineer specialising in Java/Python microservices and AI-integrated systems. Three live public APIs. Shipping since 2024. Graduating 2026.',
  keywords: [
    'Anuj Patil',
    'backend engineer',
    'Java',
    'Python',
    'Spring Boot',
    'FastAPI',
    'RAG',
    'software engineer',
    'Navi Mumbai',
  ],
  authors: [{ name: 'Anuj Patil', url: 'https://anuj05portfolio.vercel.app' }],
  openGraph: {
    title: 'Anuj Patil — Backend Engineer',
    description: 'Backend engineer who ships real systems — not demos.',
    url: 'https://anuj05portfolio.vercel.app',
    siteName: 'Anuj Patil',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Patil — Backend Engineer',
    description: 'Backend engineer who ships real systems — not demos.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${domine.variable} ${sourceSans3.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ResumeProvider>
          <Nav />
          <ResumeModal />
          <main className="pt-16">{children}</main>
          <Footer />
        </ResumeProvider>
      </body>
    </html>
  );
}
