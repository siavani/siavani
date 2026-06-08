'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// ============================================================
// SIAVANI — Halaman Katalog
// Nanti data produk ini akan diambil dari Google Sheets
// Untuk sekarang, tambah/edit produk di PRODUCTS array ini
// ============================================================

const WA_NUMBER = '6283178890909'

const CATEGORIES = ['Semua', 'Skincare', 'Makeup', 'Body Care', 'Hair Care', 'Tools']

interface Product {
  id: number
  brand: string
  nama: string
  kategori: string
  badge?: string
  foto: string
  waText: string
}

// ============================================================
// DATA PRODUK — Edit di sini untuk tambah/ubah produk
// Nanti akan otomatis dari Google Sheets
// ============================================================

const PRODUCTS: Product[] = [
  // SKINCARE
  {
    id: 1,
    brand: 'Wardah',
    nama: 'Hydro Gel Moisturizer SPF 30',
    kategori: 'Skincare',
    badge: 'Best Seller',
    foto: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Wardah Hydro Gel Moisturizer SPF 30. Apakah masih tersedia?',
  },
  {
    id: 2,
    brand: 'Azarine',
    nama: 'Hydrasoothe Sunscreen Gel SPF 45',
    kategori: 'Skincare',
    badge: 'Viral TikTok',
    foto: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Azarine Hydrasoothe Sunscreen SPF 45. Apakah masih tersedia?',
  },
  {
    id: 3,
    brand: 'Somethinc',
    nama: 'Level 1% B-Tox Serum 30ml',
    kategori: 'Skincare',
    badge: 'Repeat Order',
    foto: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Somethinc Level 1% B-Tox Serum. Apakah masih tersedia?',
  },
  {
    id: 4,
    brand: 'Emina',
    nama: 'Bright Stuff Moisturizing Cream',
    kategori: 'Skincare',
    foto: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Emina Bright Stuff Moisturizing Cream. Apakah masih tersedia?',
  },
  {
    id: 5,
    brand: 'Hanasui',
    nama: 'Toneup Sunscreen SPF 50 PA+++',
    kategori: 'Skincare',
    badge: 'Baru Datang',
    foto: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&q=81',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Hanasui Toneup Sunscreen SPF 50. Apakah masih tersedia?',
  },

  // MAKEUP
  {
    id: 6,
    brand: 'Implora',
    nama: 'Lip Cream Matte 24 Warna',
    kategori: 'Makeup',
    badge: 'Best Seller',
    foto: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Implora Lip Cream Matte. Apakah masih tersedia?',
  },
  {
    id: 7,
    brand: 'BLP Beauty',
    nama: 'Lip Coat Shade Series',
    kategori: 'Makeup',
    badge: 'Viral TikTok',
    foto: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan BLP Beauty Lip Coat. Apakah masih tersedia?',
  },
  {
    id: 8,
    brand: 'Emina',
    nama: 'Sun Protection BB Cushion SPF 30',
    kategori: 'Makeup',
    foto: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Emina Sun Protection BB Cushion. Apakah masih tersedia?',
  },
  {
    id: 9,
    brand: 'Wardah',
    nama: 'Colorfit Velvet Matte Lip Mousse',
    kategori: 'Makeup',
    foto: 'https://images.unsplash.com/photo-1583241802793-c5f66de9e01f?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Wardah Colorfit Lip Mousse. Apakah masih tersedia?',
  },

  // BODY CARE
  {
    id: 10,
    brand: 'Scarlett',
    nama: 'Whitening Body Lotion Romansa',
    kategori: 'Body Care',
    badge: 'Repeat Order',
    foto: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Scarlett Whitening Body Lotion Romansa. Apakah masih tersedia?',
  },
  {
    id: 11,
    brand: 'Scarlett',
    nama: 'Whitening Shower Scrub Romansa',
    kategori: 'Body Care',
    badge: 'Best Seller',
    foto: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&q=82',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Scarlett Whitening Shower Scrub. Apakah masih tersedia?',
  },
  {
    id: 12,
    brand: 'Vaseline',
    nama: 'Healthy Bright SPF 10 Body Lotion',
    kategori: 'Body Care',
    foto: 'https://images.unsplash.com/photo-1619451683898-f4ac41f3a8f2?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Vaseline Healthy Bright Body Lotion. Apakah masih tersedia?',
  },

  // HAIR CARE
  {
    id: 13,
    brand: 'Ellips',
    nama: 'Hair Vitamin Smooth & Shiny',
    kategori: 'Hair Care',
    badge: 'Best Seller',
    foto: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Ellips Hair Vitamin Smooth & Shiny. Apakah masih tersedia?',
  },
  {
    id: 14,
    brand: 'Makarizo',
    nama: 'Hair Energy Fibertherapy Creambath',
    kategori: 'Hair Care',
    foto: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop&q=81',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Makarizo Hair Energy Creambath. Apakah masih tersedia?',
  },

  // TOOLS
  {
    id: 15,
    brand: 'Sephora Collection',
    nama: 'Mini Brush Set 5 pcs',
    kategori: 'Tools',
    foto: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Sephora Mini Brush Set. Apakah masih tersedia?',
  },
  {
    id: 16,
    brand: 'Silisponge',
    nama: 'Silicone Sponge Applicator',
    kategori: 'Tools',
    foto: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&q=81',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Silisponge Silicone Sponge. Apakah masih tersedia?',
  },
]

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

const BADGE_STYLE: Record<string, { bg: string; color: string }> = {
  'Best Seller': { bg: '#F2EBE4', color: '#8A5A3A' },
  'Viral TikTok': { bg: '#EEEAF4', color: '#5E5090' },
  'Repeat Order': { bg: '#F5F0E6', color: '#7A6838' },
  'Baru Datang': { bg: '#EBF2EA', color: '#447040' },
}

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'Semua' || p.kategori === activeCategory
      const matchSearch =
        !search ||
        p.nama.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  return (
    <main style={{ fontFamily: 'var(--font-body)', maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#F7F4EF' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA', padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase', color: '#1A1714', display: 'block' }}>
              Siavani
            </span>
            <div style={{ height: '0.5px', background: '#8A6A4E', marginTop: '3px' }} />
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/" style={{ fontSize: '11px', color: '#8A8078', textDecoration: 'none' }}>← Beranda</Link>
          <a
            href={waLink('Halo Siavani, saya ingin bertanya tentang produk')}
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '11px', fontWeight: 600, color: '#FFF', background: '#1A1714', padding: '7px 13px', borderRadius: '5px', textDecoration: 'none' }}
          >
            WA
          </a>
        </div>
      </nav>

      {/* ── PAGE HEADER ── */}
      <div style={{ padding: '28px 20px 0', background: '#F7F4EF' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
          Semua Produk
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '4px' }}>
          Katalog Siavani
        </h1>
        <p style={{ fontSize: '12px', color: '#8A8078', marginBottom: '20px' }}>
          {filtered.length} produk tersedia · Harga via WhatsApp
        </p>

        {/* Search Bar */}
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
            <button
              onClick={() => setSearch('')}
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#A8A09A', fontSize: '16px', lineHeight: 1, padding: 0 }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* ── FILTER PILLS ── */}
      <div style={{ display: 'flex', gap: '7px', padding: '0 20px 16px', overflowX: 'auto', scrollbarWidth: 'none', background: '#F7F4EF' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              padding: '7px 14px',
              borderRadius: '20px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              border: activeCategory === cat ? 'none' : '0.5px solid #DDD6CA',
              color: activeCategory === cat ? '#F7F4EF' : '#8A8078',
              background: activeCategory === cat ? '#1A1714' : '#FFF',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.15s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── PRODUCT GRID ── */}
      <div style={{ padding: '0 20px 40px', background: '#F7F4EF' }}>
        {filtered.length === 0 ? (
          // Empty state
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#1A1714', marginBottom: '8px' }}>
              Produk tidak ditemukan
            </div>
            <div style={{ fontSize: '13px', color: '#8A8078', marginBottom: '20px' }}>
              Coba kata kunci lain atau hapus filter
            </div>
            <button
              onClick={() => { setSearch(''); setActiveCategory('Semua') }}
              style={{ background: '#1A1714', color: '#F7F4EF', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}
            >
              Lihat semua produk
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
            {filtered.map(p => {
              const badgeStyle = p.badge ? BADGE_STYLE[p.badge] : null
              return (
                <div
                  key={p.id}
                  style={{ background: '#FFF', borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #DDD6CA', cursor: 'pointer' }}
                >
                  {/* Product Photo */}
                  <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', background: '#EDE6DC', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.foto}
                      alt={p.nama}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {/* Badge overlay */}
                    {p.badge && badgeStyle && (
                      <div style={{
                        position: 'absolute', top: '8px', left: '8px',
                        background: badgeStyle.bg, color: badgeStyle.color,
                        fontSize: '9px', fontWeight: 600,
                        padding: '2px 8px', borderRadius: '4px',
                        letterSpacing: '0.2px',
                      }}>
                        {p.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '10px 12px 13px' }}>
                    <div style={{ fontSize: '9px', color: '#A8A09A', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {p.brand}
                    </div>
                    <div style={{
                      fontSize: '12px', fontWeight: 500, color: '#1A1714', lineHeight: 1.4, marginBottom: '10px',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden',
                    }}>
                      {p.nama}
                    </div>
                    <a
                      href={waLink(p.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block', width: '100%', textAlign: 'center',
                        background: '#1A1714', color: '#F7F4EF',
                        padding: '9px 0', borderRadius: '8px',
                        fontSize: '11px', fontWeight: 600, textDecoration: 'none',
                      }}
                    >
                      Tanya harga
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ── CTA BOTTOM ── */}
      <div style={{ background: '#1A1714', padding: '32px 22px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 400, color: '#F5F0E8', lineHeight: 1.38, marginBottom: '8px' }}>
          Tidak nemu yang dicari?
        </div>
        <p style={{ fontSize: '12px', color: '#6A6058', lineHeight: 1.65, marginBottom: '18px' }}>
          Chat admin — kami bantu carikan produk yang kamu butuhkan.
        </p>
        <a
          href={waLink('Halo Siavani 🌸 Saya ingin bertanya tentang produk yang tidak ada di katalog.')}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#FFF', padding: '13px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
        >
          💬 Tanya Admin
        </a>
      </div>

      {/* ── FLOATING WA ── */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
        <a
          href={waLink('Halo Siavani 🌸 Saya ingin bertanya tentang produk')}
          target="_blank" rel="noopener noreferrer"
          style={{ width: '52px', height: '52px', background: '#25D366', borderRadius: '50%', border: '3px solid #FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', textDecoration: 'none', fontSize: '24px' }}
          aria-label="Chat WhatsApp"
        >
          💬
        </a>
      </div>

    </main>
  )
}
