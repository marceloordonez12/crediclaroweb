import type { Metadata } from 'next';
import { Inter, Poppins, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CrediClaro – Encuentra el crédito que buscas aquí',
  description:
    'Comparamos entre múltiples financieras y te asesoramos gratis para encontrar la mejor opción según tu perfil.',
  keywords: 'crédito, préstamo personal, financiera, México, préstamo sin buró',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}
    >
      <body className="font-inter bg-bg-page text-navy">{children}</body>
    </html>
  );
}
