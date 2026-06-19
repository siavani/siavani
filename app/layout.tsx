import type { Metadata } from 'next'
import './globals.css'

// ============================================================
// GANTI INI kalau sudah punya domain sendiri (misal siavani.id)
// ============================================================
const SITE_URL = 'https://siavani.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Siavani - Distributor Kosmetik | 500+ Produk Beauty Original',
    template: '%s | Siavani',
  },
  description:
    'Distributor kosmetik terpercaya dengan 500+ produk original dari berbagai brand. Harga reseller terbuka, cocok untuk pemula yang mau mulai bisnis kosmetik dari rumah. Order via WhatsApp.',
  keywords: [
    'distributor kosmetik',
    'reseller kosmetik',
    'grosir kosmetik',
    'jualan kosmetik dari rumah',
    'kosmetik original murah',
    'supplier kosmetik indonesia',
  ],
  openGraph: {
    title: 'Siavani - Distributor Kosmetik Terpercaya',
    description: 'Mulai bisnis kosmetik dari rumah bersama Siavani. 500+ produk original, harga reseller terbuka.',
    url: SITE_URL,
    siteName: 'Siavani',
    images: [{ url: '/foto_hero_siavani.jpg', width: 780, height: 520 }],
    locale: 'id_ID',
    type: 'website',
  },
  robots: { index: true, follow: true },
  verification: {
    // GANTI dengan kode dari Google Search Console (lihat instruksi di chat)
    google: 'niEy1HSyU3UGfZvXk_iTuL5xiIKLgwaIu6BIB0VcKsQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
