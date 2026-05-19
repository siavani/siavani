// ============================================================
// SIAVANI — Homepage
// Ganti WA_NUMBER dengan nomor WhatsApp aktif kamu
// Format: 628xxxxxxxxxx (tanpa + dan tanpa 0 di depan)
// ============================================================

const WA_NUMBER = '6281297446326'

// ============================================================
// DATA PRODUK — Nanti akan terhubung ke Google Sheets
// Untuk sekarang, edit manual di sini dulu
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    brand: 'Wardah',
    name: 'Hydro Gel Moisturizer SPF 30',
    badge: 'Best Seller',
    badgeBg: '#F2EBE4',
    badgeColor: '#8A5A3A',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Wardah Hydro Gel Moisturizer SPF 30. Apakah masih tersedia?',
  },
  {
    id: 2,
    brand: 'Somethinc',
    name: 'Level 1% B-Tox Serum 30ml',
    badge: 'Viral TikTok',
    badgeBg: '#EEEAF4',
    badgeColor: '#5E5090',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Somethinc Level 1% B-Tox Serum. Apakah masih tersedia?',
  },
  {
    id: 3,
    brand: 'Scarlett',
    name: 'Whitening Shower Scrub Romansa',
    badge: 'Repeat Order',
    badgeBg: '#F5F0E6',
    badgeColor: '#7A6838',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Scarlett Whitening Shower Scrub Romansa. Apakah masih tersedia?',
  },
  {
    id: 4,
    brand: 'Emina',
    name: 'Sun Protection BB Cushion SPF 30',
    badge: 'Baru Datang',
    badgeBg: '#EBF2EA',
    badgeColor: '#447040',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Emina Sun Protection BB Cushion. Apakah masih tersedia?',
  },
]

const CATEGORIES = [
  { name: 'Skincare', count: '180+', dot: '#C4A090' },
  { name: 'Makeup', count: '150+', dot: '#A094B8' },
  { name: 'Body Care', count: '90+', dot: '#809098' },
  { name: 'Hair Care', count: '80+', dot: '#88A080' },
  { name: 'Beauty Tools', count: '60+', dot: '#A0988A' },
]

const FILTERS = ['Semua', 'Skincare', 'Makeup', 'Body Care', 'Hair Care', 'Tools']

const RESELLER_PERKS = [
  'Harga reseller langsung dari chat WA, tanpa daftar ribet',
  'Admin aktif bantu pilih produk yang lagi sering repeat order',
  'Materi promosi siap pakai — foto produk, caption, tips jualan',
  'Cocok buat tambahan uang dapur atau uang jajan sendiri',
]

const TESTIMONIALS = [
  {
    initial: 'S',
    name: 'Sari D.',
    role: 'Reseller · Surabaya',
    color: '#C4A090',
    text: '"Awalnya iseng aja, eh sekarang udah bisa beli HP baru dari hasil jualan. Adminnya beneran bantu, ga cuma jual doang."',
  },
  {
    initial: 'R',
    name: 'Ratna W.',
    role: 'Reseller · Jogja',
    color: '#9090B4',
    text: '"Ibu RT bisa jualan dari dapur. Tinggal share katalog ke grup WA, pelanggan DM sendiri. Lumayan banget buat uang jajan."',
  },
]

// ============================================================
// HELPER — Buat link WhatsApp otomatis
// ============================================================

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

// ============================================================
// HOMEPAGE COMPONENT
// ============================================================

export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-body)', maxWidth: '480px', margin: '0 auto', minHeight: '100vh' }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#F7F4EF',
        borderBottom: '0.5px solid #DDD8D0',
        padding: '13px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '13px', fontWeight: 400,
            letterSpacing: '8px', textTransform: 'uppercase',
            color: '#1A1714', display: 'block',
          }}>
            Siavani
          </span>
          <div style={{ height: '0.5px', background: '#B89070', marginTop: '3px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '12px', color: '#8A837A', cursor: 'pointer' }}>Katalog</span>
          <a
            href={waLink('Halo Siavani, saya ingin bertanya tentang produk')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px', fontWeight: 600, color: '#1A1714',
              border: '0.5px solid #DDD8D0', padding: '6px 13px',
              borderRadius: '5px', background: '#FFF',
            }}
          >
            Chat WA
          </a>
        </div>
      </nav>

      {/* ── HERO PHOTO ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=780&h=530&fit=crop&crop=top&q=82"
        alt="Perempuan merawat kulit — Siavani beauty distributor"
        style={{
          width: '100%', height: '265px',
          objectFit: 'cover', objectPosition: 'center 15%',
          display: 'block', background: '#D8D0C6',
        }}
      />

      {/* ── HERO TEXT ── */}
      <div style={{ padding: '22px 22px 24px', borderBottom: '0.5px solid #DDD8D0' }}>

        {/* Tag */}
        <div style={{
          fontSize: '9px', fontWeight: 600, color: '#A09080',
          letterSpacing: '2.5px', textTransform: 'uppercase',
          marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ width: '16px', height: '0.5px', background: '#B89070', display: 'inline-block' }} />
          Distributor Resmi · Reseller Welcome
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '27px', fontWeight: 400,
          lineHeight: 1.22, color: '#1A1714', marginBottom: '11px',
        }}>
          Produk yang sering dicari customer,{' '}
          <em style={{ fontStyle: 'italic', color: '#A08060' }}>ada semua di sini.</em>
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: '13px', color: '#6A6460', lineHeight: 1.68, marginBottom: '20px' }}>
          Ribuan pilihan beauty dari berbagai brand. Harga reseller langsung, support aktif.
          Mulai pelan-pelan dari WA juga bisa.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '9px', marginBottom: '22px' }}>
          <a href="#katalog" style={{
            flex: 1, background: '#1A1714', color: '#F7F4EF',
            padding: '13px', borderRadius: '6px',
            fontSize: '12px', fontWeight: 600, textAlign: 'center',
          }}>
            Lihat Katalog
          </a>
          <a href="/reseller" style={{
            flex: 1, background: 'transparent', color: '#1A1714',
            border: '0.5px solid #C8C0B4',
            padding: '13px', borderRadius: '6px',
            fontSize: '12px', fontWeight: 500, textAlign: 'center',
          }}>
            Info Reseller
          </a>
        </div>

        {/* Social Proof */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          paddingTop: '18px', borderTop: '0.5px solid #E8E2DC',
        }}>
          <div style={{ display: 'flex' }}>
            {[
              { l: 'S', bg: '#B89080' },
              { l: 'R', bg: '#908AB4' },
              { l: 'N', bg: '#708888' },
              { l: 'A', bg: '#8A9070' },
            ].map((av, i) => (
              <div key={i} style={{
                width: '24px', height: '24px', borderRadius: '50%',
                border: '1.5px solid #F7F4EF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '8px', fontWeight: 700, color: '#FFF',
                background: av.bg,
                marginLeft: i > 0 ? '-7px' : '0',
              }}>
                {av.l}
              </div>
            ))}
          </div>
          <div style={{ fontSize: '11px', color: '#6A6460', lineHeight: 1.5 }}>
            <strong style={{ color: '#1A1714', fontWeight: 600, fontSize: '12px' }}>
              200+ reseller aktif
            </strong>
            <br />
            dari Medan, Jakarta, Makassar, Jogja &amp; kota lainnya
          </div>
        </div>
      </div>

      {/* ── FILTER PILLS ── */}
      <div className="pills-scroll" style={{
        display: 'flex', gap: '7px',
        padding: '13px 20px',
        borderBottom: '0.5px solid #DDD8D0',
        overflowX: 'auto',
      }}>
        {FILTERS.map((f, i) => (
          <button key={f} style={{
            fontSize: '11px', fontWeight: 500,
            padding: '6px 14px', borderRadius: '20px',
            whiteSpace: 'nowrap', cursor: 'pointer',
            border: i === 0 ? 'none' : '0.5px solid #DDD8D0',
            color: i === 0 ? '#F7F4EF' : '#8A837A',
            background: i === 0 ? '#1A1714' : '#FFF',
            fontFamily: 'var(--font-body)',
          }}>
            {f}
          </button>
        ))}
      </div>

      {/* ── PRODUK SECTION ── */}
      <section id="katalog" style={{ padding: '26px 20px', borderBottom: '0.5px solid #DDD8D0' }}>

        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          Lagi Banyak Dicari
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '21px', fontWeight: 400, color: '#1A1714', lineHeight: 1.26, marginBottom: '5px' }}>
          Sering repeat order
        </div>
        <div style={{ fontSize: '12px', color: '#6A6460', lineHeight: 1.65, marginBottom: '18px' }}>
          Yang ini biasanya diminta customer lagi dan lagi. Stok update terus.
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '9px' }}>
          {PRODUCTS.map(p => (
            <div key={p.id} style={{
              background: '#FFF', borderRadius: '10px',
              overflow: 'hidden', border: '0.5px solid #DDD8D0', cursor: 'pointer',
            }}>
              {/* Foto produk */}
              <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', background: '#EDE8E1' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Info produk */}
              <div style={{ padding: '10px 11px 13px' }}>
                <div style={{ marginBottom: '5px' }}>
                  <span style={{
                    fontSize: '9px', fontWeight: 600,
                    padding: '2px 7px', borderRadius: '3px',
                    background: p.badgeBg, color: p.badgeColor,
                  }}>
                    {p.badge}
                  </span>
                </div>
                <div style={{ fontSize: '9px', color: '#A8A09A', fontWeight: 600, marginBottom: '2px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  {p.brand}
                </div>
                <div style={{
                  fontSize: '12px', fontWeight: 500, color: '#1A1714',
                  lineHeight: 1.4, marginBottom: '9px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical' as const,
                  overflow: 'hidden',
                }}>
                  {p.name}
                </div>
                <a
                  href={waLink(p.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '11px', fontWeight: 600, color: '#A88060', display: 'block' }}
                >
                  Tanya stok →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <a href="#" style={{
          display: 'block', width: '100%', marginTop: '12px',
          padding: '11px',
          border: '0.5px solid #DDD8D0', borderRadius: '6px',
          fontSize: '12px', color: '#8A837A', textAlign: 'center',
        }}>
          Lihat semua produk →
        </a>
      </section>

      {/* ── KATEGORI ── */}
      <div style={{ padding: '24px 20px', borderBottom: '0.5px solid #DDD8D0' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '4px' }}>
          Semua Kategori
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '16px' }}>
          Cari yang kamu butuhin
        </div>
        {CATEGORIES.map((cat, i) => (
          <div key={cat.name} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '13px 0',
            borderBottom: i < CATEGORIES.length - 1 ? '0.5px solid #EDEBE5' : 'none',
            cursor: 'pointer',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.dot }} />
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#1A1714' }}>{cat.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '11px', color: '#A8A09A' }}>{cat.count} produk</span>
              <span style={{ fontSize: '16px', color: '#C8C0B8' }}>›</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── RESELLER ── */}
      <section style={{ background: '#1B1714', padding: '36px 22px' }}>
        <span style={{
          display: 'inline-block',
          border: '0.5px solid rgba(184,144,112,0.25)',
          color: '#B09070', fontSize: '9px', fontWeight: 600,
          padding: '4px 11px', borderRadius: '3px',
          marginBottom: '18px', letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          Buat Kamu yang Mau Mulai
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '24px', fontWeight: 400,
          color: '#F2EDE6', lineHeight: 1.28, marginBottom: '11px',
        }}>
          Banyak yang mulai dari{' '}
          <em style={{ fontStyle: 'italic', color: '#C4A282' }}>iseng upload story.</em>
        </h2>
        <p style={{ fontSize: '13px', color: '#6A6460', lineHeight: 1.7, marginBottom: '22px' }}>
          Ga harus punya toko. Ga harus stok barang. Admin kami bantu dari pilih produk
          sampai tahu mana yang lagi dicari customer.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
          {RESELLER_PERKS.map((perk, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#8A8480', lineHeight: 1.55 }}>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#B09070', marginTop: '7px', flexShrink: 0 }} />
              <span>{perk}</span>
            </div>
          ))}
        </div>
        <a
          href={waLink('Halo Siavani 🌸 Saya ingin tahu lebih lanjut tentang program reseller. Boleh minta infonya?')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#F2EDE6', color: '#1A1714',
            padding: '13px 22px', borderRadius: '6px',
            fontSize: '13px', fontWeight: 600,
          }}
        >
          Daftar via WA →
        </a>
      </section>

      {/* ── TESTIMONI ── */}
      <section style={{ padding: '28px 20px', background: '#F1ECE7', borderBottom: '0.5px solid #DDD8D0' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          Yang Bilang Sendiri
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: 400, color: '#1A1714', lineHeight: 1.28, marginBottom: '4px' }}>
          Cerita dari reseller kami
        </div>
        <div style={{ fontSize: '12px', color: '#6A6460', lineHeight: 1.65, marginBottom: '17px' }}>
          Ini dari chat WA mereka sendiri. Ga ada yang diminta bikin review.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: '#FFF', borderRadius: '10px', padding: '15px', border: '0.5px solid #DDD8D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: t.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 700, color: '#FFF',
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A1714' }}>{t.name}</div>
                    <div style={{ fontSize: '10px', color: '#A8A09A', marginTop: '1px' }}>{t.role}</div>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#C49060', letterSpacing: '0.5px' }}>★★★★★</div>
              </div>
              <p style={{ fontSize: '13px', color: '#4A4640', lineHeight: 1.65 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WA CTA ── */}
      <section style={{ padding: '34px 22px', background: '#FFF', textAlign: 'center', borderTop: '0.5px solid #DDD8D0' }}>
        <div style={{ fontSize: '9px', fontWeight: 600, color: '#A8A09A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Mau Tanya Dulu?
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 400, color: '#1A1714', lineHeight: 1.3, marginBottom: '9px' }}>
          Chat dulu aja, admin kami fast response.
        </div>
        <p style={{ fontSize: '13px', color: '#6A6460', lineHeight: 1.65, marginBottom: '20px', maxWidth: '258px', margin: '0 auto 20px' }}>
          Mau cek stok, tanya produk, atau info harga reseller — langsung WA. Ga perlu basa-basi.
        </p>
        <div>
          <a
            href={waLink('Halo Siavani 🌸 Saya ingin bertanya tentang produk dan informasi lebih lanjut.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#25D366', color: '#FFF',
              padding: '13px 24px', borderRadius: '6px',
              fontSize: '13px', fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            💬 Chat WhatsApp
          </a>
        </div>
        <div style={{ fontSize: '11px', color: '#B0A8A0' }}>Biasanya dibalas dalam beberapa menit</div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#F1ECE7', borderTop: '0.5px solid #DDD8D0', padding: '22px 20px' }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '13px', letterSpacing: '7px',
            textTransform: 'uppercase', color: '#1A1714', display: 'block',
          }}>
            Siavani
          </span>
          <div style={{ height: '0.5px', background: '#B89070', marginTop: '3px', width: '50px', marginBottom: '11px' }} />
        </div>
        <div style={{ fontSize: '11px', color: '#A8A09A', marginBottom: '15px', lineHeight: 1.6 }}>
          Distributor kosmetik · Reseller welcome · 500+ produk pilihan
        </div>
        <div style={{ display: 'flex', gap: '18px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {['Katalog', 'Reseller', 'WhatsApp', 'Kategori'].map(link => (
            <span key={link} style={{ fontSize: '11px', color: '#6A6460', cursor: 'pointer' }}>{link}</span>
          ))}
        </div>
        <div style={{ fontSize: '10px', color: '#C0B8B0', paddingTop: '12px', borderTop: '0.5px solid #DDD8D0' }}>
          © 2025 Siavani. Distributor Kosmetik Indonesia.
        </div>
      </footer>

    </main>
  )
}
