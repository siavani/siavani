'use client'

// ============================================================
// app/katalog/page.tsx
// Halaman katalog — ambil produk dari Google Sheets via API
// ============================================================

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

const WA_NUMBER = '6283178890909'
const CATEGORIES = [
  'Semua',
  'Beauty Tools',
  'Body Care',
  'Hair Care',
  'Makeup',
  'Medical Beauty',
  'Nail Care',
  'Personal Care',
  'Skincare',
]

interface Product {
  id: string
  nama: string
  brand: string
  kategori: string
  badge: string
  foto_url: string
  wa_teks: string
  aktif: string
}

const BADGE_STYLE: Record<string, { bg: string; color: string }> = {
  'Best Seller':           { bg: '#F2EBE4', color: '#8A5A3A' },
  'Viral TikTok':          { bg: '#EEEAF4', color: '#5E5090' },
  'Repeat Order':          { bg: '#F5F0E6', color: '#7A6838' },
  'Baru Datang':           { bg: '#EBF2EA', color: '#447040' },
  'Paling Sering Repeat':  { bg: '#F2EBE4', color: '#8A5A3A' },
}

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export default function KatalogPage() {
  const [products, setProducts]         = useState<Product[]>([])
  const [loading, setLoading]           = useState(true)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch]             = useState('')

  // Ambil produk dari API (Google Sheets)
  useEffect(() => {
    fetch('/api/produk')
      .then(r => r.json())
      .then((data: Product[]) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat    = activeCategory === 'Semua' || p.kategori === activeCategory
      const matchSearch = !search ||
        p.nama.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [products, activeCategory, search])

  return (
    <main style={{ fontFamily: 'var(--font-body)', maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#F7F4EF' }}>

      {/* NAVBAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA', padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase', color: '#1A1714', display: 'block' }}>Siavani</span>
            <div style={{ height: '0.5px', background: '#8A6A4E', marginTop: '3px' }} />
          </div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/" style={{ fontSize: '11px', color: '#8A8078', textDecoration: 'none' }}>← Beranda</Link>
          <a href={waLink('Halo Siavani, saya ingin bertanya tentang produk')} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '11px', fontWeight: 600, color: '#FFF', background: '#1A1714', padding: '7px 13px', borderRadius: '5px', textDecoration: 'none' }}>
            WA
          </a>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <div style={{ padding: '28px 20px 0', background: '#F7F4EF' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Semua Produk</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '4px' }}>Katalog Siavani</h1>
        <p style={{ fontSize: '12px', color: '#8A8078', marginBottom: '20px' }}>
          {loading ? 'Memuat produk...' : `${filtered.length} produk tersedia · Harga via WhatsApp`}
        </p>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FFF', border: '0.5px solid #DDD6CA', borderRadius: '10px', padding: '11px 16px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8A09A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Cari produk atau brand..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13px', color: '#1A1714', background: 'transparent', fontFamily: 'var(--font-body)' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#A8A09A', fontSize: '18px', lineHeight: 1, padding: 0 }}>×</button>
          )}
        </div>
      </div>

      {/* FILTER PILLS */}
      <div style={{ display: 'flex', gap: '7px', padding: '0 20px 16px', overflowX: 'auto', scrollbarWidth: 'none', background: '#F7F4EF' }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{
            fontSize: '11px', fontWeight: 500, padding: '7px 14px', borderRadius: '20px',
            whiteSpace: 'nowrap', cursor: 'pointer',
            border: activeCategory === cat ? 'none' : '0.5px solid #DDD6CA',
            color: activeCategory === cat ? '#F7F4EF' : '#8A8078',
            background: activeCategory === cat ? '#1A1714' : '#FFF',
            fontFamily: 'var(--font-body)',
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div style={{ padding: '0 20px 40px', background: '#F7F4EF' }}>

        {/* Loading state */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8A8078', fontSize: '13px' }}>
            Memuat produk dari katalog...
          </div>
        )}

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#1A1714', marginBottom: '8px' }}>Produk tidak ditemukan</div>
            <div style={{ fontSize: '13px', color: '#8A8078', marginBottom: '20px' }}>Coba kata kunci lain atau hapus filter</div>
            <button onClick={() => { setSearch(''); setActiveCategory('Semua') }}
              style={{ background: '#1A1714', color: '#F7F4EF', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Lihat semua produk
            </button>
          </div>
        )}

        {/* Products */}
        {!loading && filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
            {filtered.map((p, i) => {
              const badgeStyle = p.badge ? BADGE_STYLE[p.badge] : null
              const waText = p.wa_teks || `Halo Siavani 🌸 Saya tertarik dengan ${p.nama}. Apakah masih tersedia?`
              return (
                <div key={p.id || i} style={{ background: '#FFF', borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #DDD6CA', cursor: 'pointer' }}>

                  {/* Foto produk */}
                  <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', background: '#EDE6DC', position: 'relative' }}>
                    {p.foto_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.foto_url} alt={p.nama} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#EDE6DC' }}>
                        <span style={{ fontSize: '11px', color: '#A8A09A' }}>No photo</span>
                      </div>
                    )}
                    {p.badge && badgeStyle && (
                      <div style={{ position: 'absolute', top: '8px', left: '8px', background: badgeStyle.bg, color: badgeStyle.color, fontSize: '9px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>
                        {p.badge}
                      </div>
                    )}
                  </div>

                  {/* Info produk */}
                  <div style={{ padding: '10px 12px 13px' }}>
                    <div style={{ fontSize: '9px', color: '#A8A09A', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '2px' }}>{p.brand}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#1A1714', lineHeight: 1.4, marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{p.nama}</div>
                    <a href={waLink(waText)} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', textAlign: 'center', background: '#1A1714', color: '#F7F4EF', padding: '9px 0', borderRadius: '8px', fontSize: '11px', fontWeight: 600, textDecoration: 'none' }}>
                      Tanya harga
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* CTA BOTTOM */}
      <div style={{ background: '#1A1714', padding: '32px 22px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 400, color: '#F5F0E8', lineHeight: 1.38, marginBottom: '8px' }}>Tidak nemu yang dicari?</div>
        <p style={{ fontSize: '12px', color: '#6A6058', lineHeight: 1.65, marginBottom: '18px' }}>Chat admin — kami bantu carikan produk yang kamu butuhkan.</p>
        <a href={waLink('Halo Siavani 🌸 Saya ingin bertanya tentang produk yang tidak ada di katalog.')} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#FFF', padding: '13px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          💬 Tanya Admin
        </a>
      </div>

    </main>
  )
}
