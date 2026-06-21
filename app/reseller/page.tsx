// ============================================================
// app/reseller/page.tsx
// Halaman Reseller — Siavani
// ============================================================

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jadi Reseller',
  description: 'Gabung jadi reseller kosmetik Siavani. Tanpa stok dulu, harga reseller terbuka, cocok untuk pemula yang mau mulai bisnis dari rumah.',
}

const WA_NUMBER = '6283105537799'

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

const PERKS = [
  { h: 'Tanpa stok barang dulu', d: 'Mulai jualan dulu, baru stok kalau sudah ada yang order. Ga ada barang nganggur di rumah.' },
  { h: 'Harga reseller terbuka', d: 'Tinggal chat WA, admin langsung kasih harga khusus reseller. Ga perlu nego ribet.' },
  { h: 'Bisa campur brand', d: 'Mau jual Wardah, Azarine, sama BLP sekaligus? Bisa. Ga harus fokus satu brand.' },
  { h: 'Materi promosi siap pakai', d: 'Foto produk, caption, sampai tips closing — semua admin bantu siapkan.' },
]

const STEPS = [
  { n: '01', t: 'Chat Admin via WhatsApp', d: 'Kabarin kalau kamu mau jadi reseller. Ga perlu form panjang, cukup chat biasa.' },
  { n: '02', t: 'Dapat Harga & Katalog Reseller', d: 'Admin kirim daftar harga reseller dan katalog produk yang lagi laris dijual.' },
  { n: '03', t: 'Mulai Share & Tunggu Order', d: 'Share katalog ke WA, TikTok, atau Instagram kamu. Ada yang order, tinggal chat admin.' },
]

const FAQ = [
  { q: 'Harus beli stok dulu sebelum jualan?', a: 'Ga harus. Kamu bisa share katalog dulu, baru order ke kami setelah ada pembeli. Tapi kalau mau stok sendiri di rumah juga boleh — biar pengiriman ke customer lebih cepat.' },
  { q: 'Modal awal harus berapa?', a: 'Ga ada minimum order yang besar. Mulai dari beberapa pcs dulu juga bisa, sesuai budget kamu.' },
  { q: 'Berapa keuntungan jadi reseller?', a: 'Kamu dapat harga reseller yang lebih murah dari harga normal. Selisihnya jadi keuntungan kamu — besarannya tergantung produk, admin akan jelasin pas chat.' },
  { q: 'Pengiriman barang gimana?', a: 'Kalau kamu order untuk stok sendiri, barang dikirim langsung ke alamat kamu. Kalau dropship, kami bisa kirim langsung ke alamat customer kamu.' },
  { q: 'Saya belum pernah jualan sama sekali, boleh?', a: 'Justru banyak reseller kami yang mulai dari nol. Admin bantu dari pilih produk yang gampang dijual sampai kasih tips promosi.' },
]

export default function ResellerPage() {
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
          <Link href="/katalog" style={{ fontSize: '11px', color: '#8A8078', textDecoration: 'none' }}>Katalog</Link>
          <a href={waLink('Halo Siavani, saya ingin bertanya tentang reseller')} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '11px', fontWeight: 600, color: '#FFF', background: '#1A1714', padding: '7px 13px', borderRadius: '5px', textDecoration: 'none' }}>
            WA
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '36px 22px', background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#8A6A4E', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '14px', height: '0.5px', background: '#8A6A4E', display: 'inline-block' }} />
          Program Reseller Siavani
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '27px', fontWeight: 400, lineHeight: 1.24, color: '#1A1714', marginBottom: '13px' }}>
          Banyak yang mulai dari{' '}
          <em style={{ fontStyle: 'italic', color: '#8A6A4E' }}>iseng upload story.</em>
        </h1>
        <p style={{ fontSize: '13px', color: '#5A5248', lineHeight: 1.72, marginBottom: '24px' }}>
          Ga harus punya toko. Ga harus stok barang. Admin kami bantu dari pilih produk
          sampai closing pertama kamu — pelan-pelan juga gapapa.
        </p>
        <a href={waLink('Halo Siavani 🌸 Saya mau mulai tapi masih bingung. Boleh minta info reseller?')}
          target="_blank" rel="noopener noreferrer"
          style={{ width: '100%', background: '#25D366', color: '#FFF', padding: '15px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          💬 Mau mulai tapi masih bingung?
        </a>
      </section>

      {/* STATS */}
      <div style={{ background: '#FFF', padding: '32px 20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 16px', borderBottom: '0.5px solid #DDD6CA' }}>
        {[
          ['200+', 'Reseller aktif di seluruh Indonesia'],
          ['500+', 'Produk siap dijual, stok update rutin'],
          ['0', 'Minimum order besar yang dipaksakan'],
          ['98%', 'Reseller yang repeat order'],
        ].map(([n, l], i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 400, color: '#1A1714', lineHeight: 1, marginBottom: '4px' }}>{n}</div>
            <div style={{ fontSize: '11px', color: '#8A8078', lineHeight: 1.45 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* PERKS */}
      <section style={{ padding: '36px 20px', background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Kenapa Gabung Siavani</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '22px' }}>
          Dibuat supaya pemula bisa mulai
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {PERKS.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', padding: '16px 0', borderTop: i > 0 ? '0.5px solid #EBE3DA' : 'none', alignItems: 'flex-start' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C4A07A', marginTop: '7px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1714', marginBottom: '3px' }}>{p.h}</div>
                <div style={{ fontSize: '12px', color: '#8A8078', lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section style={{ padding: '36px 20px', background: '#FFF', borderBottom: '0.5px solid #DDD6CA' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Cara Bergabung</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '20px' }}>
          Mudah, cukup 3 langkah
        </div>
        {STEPS.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px 0', alignItems: 'flex-start', borderTop: i > 0 ? '0.5px solid #EBE3DA' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 400, color: '#DDD6CA', lineHeight: 1, flexShrink: 0, width: '44px' }}>{s.n}</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1714', marginBottom: '4px' }}>{s.t}</div>
              <div style={{ fontSize: '12px', color: '#8A8078', lineHeight: 1.6 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </section>

      {/* MID CTA */}
      <section style={{ background: '#1A1714', padding: '40px 22px', textAlign: 'center', borderBottom: '0.5px solid #2A2420' }}>
        <span style={{ display: 'inline-block', border: '0.5px solid rgba(138,106,78,0.3)', color: '#C4A07A', fontSize: '9px', fontWeight: 600, padding: '4px 12px', borderRadius: '3px', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Siap Mulai?
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: '#F5F0E8', lineHeight: 1.4, marginBottom: '20px' }}>
          Chat admin sekarang,{' '}
          <em style={{ fontStyle: 'italic', color: '#C4A07A' }}>langkah pertama ga perlu ribet.</em>
        </h2>
        <a href={waLink('Halo Siavani 🌸 Saya mau daftar jadi reseller. Boleh minta info lengkapnya?')}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#25D366', color: '#FFF', padding: '14px 26px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          💬 Daftar Jadi Reseller
        </a>
      </section>

      {/* FAQ */}
      <section style={{ padding: '36px 20px', background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Yang Sering Ditanya</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '22px' }}>
          Pertanyaan Umum
        </div>
        {FAQ.map((f, i) => (
          <details key={i} style={{ borderTop: i > 0 ? '0.5px solid #EBE3DA' : 'none', padding: '16px 0' }}>
            <summary style={{ fontSize: '13px', fontWeight: 600, color: '#1A1714', cursor: 'pointer', lineHeight: 1.5, listStyle: 'none' }}>
              {f.q}
            </summary>
            <p style={{ fontSize: '12px', color: '#8A8078', lineHeight: 1.65, marginTop: '10px' }}>{f.a}</p>
          </details>
        ))}
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '36px 22px', background: '#FFF', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 400, color: '#1A1714', lineHeight: 1.4, marginBottom: '8px' }}>
          Masih ada yang mau ditanyain?
        </div>
        <p style={{ fontSize: '12px', color: '#8A8078', lineHeight: 1.65, marginBottom: '20px' }}>
          Admin kami fast response. Tanya apa aja, ga akan dipaksa daftar.
        </p>
        <a href={waLink('Halo Siavani 🌸 Saya ada pertanyaan soal program reseller.')}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A1714', color: '#F7F4EF', padding: '13px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          Chat Admin
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#ECE7DE', padding: '26px 20px' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', letterSpacing: '7px', textTransform: 'uppercase', color: '#1A1714', display: 'block' }}>Siavani</span>
          <div style={{ height: '0.5px', background: '#8A6A4E', marginTop: '3px', width: '48px', marginBottom: '12px' }} />
        </div>
        <div style={{ fontSize: '11px', color: '#A8A09A', marginBottom: '15px', lineHeight: 1.6 }}>
          Distributor kosmetik · Reseller welcome · 500+ produk pilihan
        </div>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {[['Katalog', '/katalog'], ['Beranda', '/'], ['WhatsApp', null]].map(([l, href]) => (
            href ? (
              <Link key={l} href={href} style={{ fontSize: '11px', color: '#5A5248', textDecoration: 'none' }}>{l}</Link>
            ) : (
              <span key={l} style={{ fontSize: '11px', color: '#5A5248' }}>{l}</span>
            )
          ))}
        </div>
        <div style={{ fontSize: '10px', color: '#C0B8B0', paddingTop: '12px', borderTop: '0.5px solid #DDD6CA' }}>
          © 2025 Siavani. Distributor Kosmetik Indonesia.
        </div>
      </footer>

      {/* FLOATING WA */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
        <a href={waLink('Halo Siavani 🌸 Saya ingin bertanya tentang reseller')} target="_blank" rel="noopener noreferrer"
          style={{ width: '52px', height: '52px', background: '#25D366', borderRadius: '50%', border: '3px solid #FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', textDecoration: 'none', fontSize: '24px' }}
          aria-label="Chat WhatsApp">
          💬
        </a>
      </div>

    </main>
  )
}
