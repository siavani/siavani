import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Katalog Produk',
  description:
    'Lihat semua produk kosmetik Siavani — skincare, makeup, body care, hair care, beauty tools, dan lainnya. Harga reseller via WhatsApp.',
}

export default function KatalogLayout({ children }: { children: React.ReactNode }) {
  return children
}
