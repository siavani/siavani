import Link from 'next/link'


// ============================================================
// SIAVANI — Homepage
// WA: 083178890909 → format internasional: 6283178890909
// ============================================================

const WA_NUMBER = '6283178890909'

// ============================================================
// HERO IMAGE
// Upload foto_hero_siavani.jpg ke Cloudinary, lalu
// ganti URL di bawah ini dengan URL dari Cloudinary kamu.
// ============================================================

const HERO_IMAGE = '/foto_hero_siavani.jpg'

// ============================================================
// DATA PRODUK
// ============================================================

const PRODUCTS = [
  {
    id: 1, brand: 'Scarlett', name: 'Whitening Body Lotion Romansa',
    badge: 'Paling Sering Repeat', featured: true, subtext: 'Stok selalu ada · Fast moving',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Scarlett Whitening Body Lotion Romansa. Apakah masih tersedia?',
  },
  {
    id: 2, brand: 'Wardah', name: 'Hydro Gel Moisturizer SPF 30',
    badge: 'Best Seller', featured: false, subtext: '',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Wardah Hydro Gel Moisturizer SPF 30. Apakah masih tersedia?',
  },
  {
    id: 3, brand: 'Implora', name: 'Lip Cream Matte 24 Warna',
    badge: 'Viral TikTok', featured: false, subtext: '',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&q=80',
    waText: 'Halo Siavani 🌸 Saya tertarik dengan Implora Lip Cream Matte. Apakah masih tersedia?',
  },
]

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

const S: Record<string, React.CSSProperties> = {
  body: { fontFamily: 'var(--font-body)', maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#F7F4EF' },
  nav: { position: 'sticky', top: 0, zIndex: 50, background: '#F7F4EF', borderBottom: '0.5px solid #DDD6CA', padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logoText: { fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase', color: '#1A1714', display: 'block' },
  logoLine: { height: '0.5px', background: '#8A6A4E', marginTop: '3px' },
  navLink: { fontSize: '11px', color: '#8A8078', cursor: 'pointer' },
  navWA: { fontSize: '11px', fontWeight: 600, color: '#FFF', background: '#1A1714', padding: '7px 13px', borderRadius: '5px', textDecoration: 'none' },
  notice: { background: '#FFF', padding: '9px 20px', display: 'flex', alignItems: 'center', gap: '8px' },
  noticeDot: { width: '5px', height: '5px', borderRadius: '50%', background: '#25D366', flexShrink: 0 },
  noticeText: { fontSize: '11px', color: '#8A8078', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
  hero: { padding: '36px 22px 0', background: '#F7F4EF' },
  heroTag: { fontSize: '9px', fontWeight: 600, color: '#8A6A4E', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' },
  heroTagLine: { width: '14px', height: '0.5px', background: '#8A6A4E', display: 'inline-block' },
  heroH: { fontFamily: 'var(--font-heading)', fontSize: '27px', fontWeight: 400, lineHeight: 1.22, color: '#1A1714', marginBottom: '13px' },
  heroEm: { fontStyle: 'italic', color: '#8A6A4E' },
  heroSub: { fontSize: '13px', color: '#5A5248', lineHeight: 1.72, marginBottom: '22px' },
  btnDark: { width: '100%', background: '#1A1714', color: '#F7F4EF', padding: '15px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textAlign: 'center' as const, textDecoration: 'none', display: 'block' },
  btnWA: { width: '100%', background: '#25D366', color: '#FFF', padding: '15px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, textAlign: 'center' as const, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  proof: { display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '24px', paddingTop: '16px', borderTop: '0.5px solid #EBE3DA' },
  heroImg: { width: 'calc(100% + 44px)', margin: '0 -22px', height: '250px', overflow: 'hidden', background: '#D5CFC6' },
}

export default function Home() {
  return (
    <main style={S.body}>

      {/* NAVBAR */}
      <nav style={S.nav}>
        <div>
          <span style={S.logoText}>Siavani</span>
          <div style={S.logoLine} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/katalog" style={S.navLink}>Katalog</Link>
          <a href="#cara-order" style={S.navLink}>Cara Order</a>
          <a href={waLink('Halo Siavani')} target="_blank" rel="noopener noreferrer" style={S.navWA}>WA</a>
        </div>
      </nav>

      {/* ACTIVITY NOTICE */}
      <div style={S.notice}>
        <div style={S.noticeDot} />
        <div style={S.noticeText}>
          <strong style={{ color: '#5A5248', fontWeight: 600 }}>Hari ini:</strong> 32 paket diproses · Restock Azarine &amp; BLP masuk pagi ini
        </div>
      </div>

      {/* HERO */}
      <section style={S.hero}>
        <div style={S.heroTag}>
          <span style={S.heroTagLine} />
          Distributor Kosmetik Terpercaya
        </div>
        <h1 style={S.heroH}>
          Mulai bisnis kosmetik dari rumah,{' '}
          <em style={S.heroEm}>bersama Siavani.</em>
        </h1>
        <p style={S.heroSub}>
          Kamu ga harus punya toko atau modal besar dulu. Ratusan produk siap,
          harga reseller terbuka, admin siap bantu dari awal.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
          <Link href="/katalog" style={S.btnDark}>Lihat Produk</Link>
          <a
            href={waLink('Halo Siavani 🌸 Saya mau mulai tapi masih bingung. Boleh minta info reseller?')}
            target="_blank" rel="noopener noreferrer" style={S.btnWA}
          >
            💬 Mau mulai tapi masih bingung?
          </a>
        </div>
        <div style={S.proof}>
          <div style={{ display: 'flex' }}>
            {[['S','#B89080'],['R','#9090B4'],['N','#708888'],['A','#8A9070']].map(([l,bg],i) => (
              <div key={i} style={{ width:'24px',height:'24px',borderRadius:'50%',border:'1.5px solid #F7F4EF',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'8px',fontWeight:700,color:'#FFF',background:bg,marginLeft:i>0?'-7px':'0' }}>{l}</div>
            ))}
          </div>
          <div style={{ fontSize:'11px',color:'#8A8078',lineHeight:1.5 }}>
            <strong style={{ color:'#1A1714',fontWeight:600,fontSize:'12px' }}>200+ reseller aktif</strong><br/>
            dari Medan, Jakarta, Makassar &amp; kota lainnya
          </div>
        </div>
        <div style={S.heroImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMAGE} alt="Suasana packing order kosmetik Siavani" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%',display:'block' }} />
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:'#FFF',padding:'32px 20px',display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'24px 16px' }}>
        {[['500+','Produk tersedia, stok update rutin'],['50+','Brand populer pilihan reseller'],['200+','Reseller aktif bergabung'],['98%','Pelanggan yang repeat order']].map(([n,l],i) => (
          <div key={i}>
            <div style={{ fontFamily:'var(--font-heading)',fontSize:'30px',fontWeight:400,color:'#1A1714',lineHeight:1,marginBottom:'4px' }}>{n}</div>
            <div style={{ fontSize:'11px',color:'#8A8078',lineHeight:1.45 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* MISSION */}
      <div style={{ padding:'36px 22px',background:'#F7F4EF' }}>
        <div style={{ fontSize:'9px',fontWeight:600,color:'#A8A09A',letterSpacing:'2.5px',textTransform:'uppercase',marginBottom:'12px' }}>Tentang Siavani</div>
        <p style={{ fontFamily:'var(--font-heading)',fontSize:'18px',fontWeight:400,color:'#1A1714',lineHeight:1.62 }}>
          Siavani bukan sekadar toko kosmetik. Kami ada karena percaya{' '}
          <em style={{ fontStyle:'italic',color:'#8A6A4E' }}>perempuan Indonesia bisa membangun bisnis sendiri</em>{' '}
          — mulai dari langkah kecil di rumah, dengan produk yang tepat dan dukungan yang nyata.
        </p>
      </div>

      {/* WHY SIAVANI */}
      <section style={{ padding:'36px 20px',background:'#FFF' }}>
        <div style={{ fontSize:'9px',fontWeight:600,color:'#A8A09A',letterSpacing:'2.5px',textTransform:'uppercase',marginBottom:'6px' }}>Kenapa Pilih Kami</div>
        <div style={{ fontFamily:'var(--font-heading)',fontSize:'20px',fontWeight:400,color:'#1A1714',lineHeight:1.28,marginBottom:'22px' }}>Yang bikin reseller balik lagi</div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px',marginBottom:'12px' }}>
          {[
            { h:'Produk asli, langsung sumber', d:'No KW, no resiko. Semua dari jalur resmi. Terjamin keasliannya.' },
            { h:'Mulai dari yang kecil dulu', d:'Ga ada target. Ga ada minimum besar. Mulai sesuai budget kamu.' },
          ].map((f,i) => (
            <div key={i} style={{ background:'#F7F4EF',borderRadius:'10px',padding:'18px 16px' }}>
              <div style={{ fontFamily:'var(--font-heading)',fontSize:'16px',fontWeight:400,color:'#1A1714',lineHeight:1.3,marginBottom:'6px' }}>{f.h}</div>
              <div style={{ fontSize:'12px',color:'#8A8078',lineHeight:1.55 }}>{f.d}</div>
            </div>
          ))}
        </div>
        <div style={{ background:'#F7F4EF',borderRadius:'10px',padding:'18px 16px',display:'flex',gap:'14px',alignItems:'flex-start' }}>
          <div style={{ fontFamily:'var(--font-heading)',fontSize:'30px',color:'#DDD6CA',lineHeight:1,flexShrink:0,marginTop:'2px' }}>03</div>
          <div>
            <div style={{ fontFamily:'var(--font-heading)',fontSize:'16px',fontWeight:400,color:'#1A1714',lineHeight:1.3,marginBottom:'6px' }}>Admin yang beneran bantu — bukan cuma jual</div>
            <div style={{ fontSize:'12px',color:'#8A8078',lineHeight:1.55 }}>Dari pilih produk yang lagi laris, sampai closing pertama kamu. Admin Siavani ada buat kamu.</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="katalog" style={{ padding:'36px 20px',background:'#FFF' }}>
        <div style={{ fontSize:'9px',fontWeight:600,color:'#A8A09A',letterSpacing:'2.5px',textTransform:'uppercase',marginBottom:'6px' }}>Produk Populer</div>
        <div style={{ fontFamily:'var(--font-heading)',fontSize:'20px',fontWeight:400,color:'#1A1714',lineHeight:1.28,marginBottom:'18px' }}>Yang paling sering dipesan</div>
        {/* Featured */}
        <a href={waLink(PRODUCTS[0].waText)} target="_blank" rel="noopener noreferrer" style={{ display:'flex',borderRadius:'12px',overflow:'hidden',border:'0.5px solid #DDD6CA',marginBottom:'10px',height:'128px',textDecoration:'none',background:'#FFF' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PRODUCTS[0].image} alt={PRODUCTS[0].name} style={{ width:'40%',objectFit:'cover',display:'block',flexShrink:0,background:'#EDE6DC' }} />
          <div style={{ padding:'14px',display:'flex',flexDirection:'column',justifyContent:'space-between',flex:1 }}>
            <div>
              <div style={{ fontSize:'9px',fontWeight:600,color:'#8A6A4E',letterSpacing:'0.5px',textTransform:'uppercase',marginBottom:'2px' }}>{PRODUCTS[0].badge}</div>
              <div style={{ fontSize:'9px',color:'#A8A09A',fontWeight:600,letterSpacing:'0.8px',textTransform:'uppercase' }}>{PRODUCTS[0].brand}</div>
              <div style={{ fontSize:'12px',fontWeight:600,color:'#1A1714',lineHeight:1.35,margin:'3px 0' }}>{PRODUCTS[0].name}</div>
              <div style={{ fontSize:'10px',color:'#A8A09A' }}>{PRODUCTS[0].subtext}</div>
            </div>
            <span style={{ fontSize:'11px',fontWeight:600,color:'#8A6A4E' }}>Tanya harga →</span>
          </div>
        </a>
        {/* Grid */}
        <div style={{ display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:'10px' }}>
          {PRODUCTS.slice(1).map(p => (
            <div key={p.id} style={{ background:'#F7F4EF',borderRadius:'12px',overflow:'hidden',border:'0.5px solid #DDD6CA' }}>
              <div style={{ width:'100%',aspectRatio:'1',overflow:'hidden',background:'#EDE6DC' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} style={{ width:'100%',height:'100%',objectFit:'cover',display:'block' }} />
              </div>
              <div style={{ padding:'10px 12px 13px' }}>
                <div style={{ fontSize:'9px',color:'#A8A09A',fontWeight:600,letterSpacing:'0.8px',textTransform:'uppercase',marginBottom:'2px' }}>{p.brand}</div>
                <div style={{ fontSize:'12px',fontWeight:500,color:'#1A1714',lineHeight:1.4,marginBottom:'8px',overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical' as const }}>{p.name}</div>
                <a href={waLink(p.waText)} target="_blank" rel="noopener noreferrer" style={{ fontSize:'11px',fontWeight:600,color:'#8A6A4E',textDecoration:'none',display:'block' }}>Tanya harga →</a>
              </div>
            </div>
          ))}
        </div>
        <Link href="/katalog" style={{ display:'block',width:'100%',marginTop:'14px',padding:'12px',background:'transparent',border:'0.5px solid #DDD6CA',borderRadius:'8px',fontFamily:'var(--font-body)',fontSize:'12px',color:'#8A8078',cursor:'pointer',textAlign:'center' }}>
          Lihat semua produk →
        </Link>
      </section>

      {/* HOW TO ORDER */}
      <section id="cara-order" style={{ padding:'36px 20px',background:'#F7F4EF' }}>
        <div style={{ fontSize:'9px',fontWeight:600,color:'#A8A09A',letterSpacing:'2.5px',textTransform:'uppercase',marginBottom:'6px' }}>Cara Order</div>
        <div style={{ fontFamily:'var(--font-heading)',fontSize:'20px',fontWeight:400,color:'#1A1714',lineHeight:1.28,marginBottom:'20px' }}>Mudah, cukup 3 langkah</div>
        {[
          { n:'01',t:'Pilih Produk dari Katalog',d:'Lihat katalog, pilih yang mau dijual. Bingung? Admin bantu rekomendasikan yang lagi laris.' },
          { n:'02',t:'Chat Admin via WhatsApp',d:'Konfirmasi stok, tanya harga reseller, lakukan pembayaran dengan mudah.' },
          { n:'03',t:'Paket Sampai ke Rumah',d:'Pesanan langsung diproses dan dikirim ke alamatmu. Aman, rapi, terpercaya.' },
        ].map((s,i) => (
          <div key={i} style={{ display:'flex',gap:'16px',padding:'20px 0',alignItems:'flex-start',borderTop:i>0?'0.5px solid #EBE3DA':'none' }}>
            <div style={{ fontFamily:'var(--font-heading)',fontSize:'36px',fontWeight:400,color:'#DDD6CA',lineHeight:1,flexShrink:0,width:'44px' }}>{s.n}</div>
            <div>
              <div style={{ fontSize:'14px',fontWeight:600,color:'#1A1714',marginBottom:'4px' }}>{s.t}</div>
              <div style={{ fontSize:'12px',color:'#8A8078',lineHeight:1.6 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background:'#1A1714',padding:'44px 22px',textAlign:'center' }}>
        <span style={{ display:'inline-block',border:'0.5px solid rgba(138,106,78,0.3)',color:'#C4A07A',fontSize:'9px',fontWeight:600,padding:'4px 12px',borderRadius:'3px',marginBottom:'18px',letterSpacing:'2px',textTransform:'uppercase' }}>Mulai Sekarang</span>
        <h2 style={{ fontFamily:'var(--font-heading)',fontSize:'22px',fontWeight:400,color:'#F5F0E8',lineHeight:1.38,marginBottom:'11px' }}>
          Siavani ada untuk membantu kamu mulai —{' '}
          <em style={{ fontStyle:'italic',color:'#C4A07A' }}>bukan menunggu kamu siap dulu.</em>
        </h2>
        <p style={{ fontSize:'13px',color:'#6A6058',lineHeight:1.72,marginBottom:'28px' }}>
          Ratusan perempuan sudah membuktikannya. Mulai kecil dari rumah, pelan-pelan tumbuh jadi bisnis yang nyata.
        </p>
        <a href={waLink('Halo Siavani 🌸 Saya mau mulai tapi masih bingung. Boleh minta info reseller?')} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex',alignItems:'center',gap:'9px',background:'#25D366',color:'#FFF',padding:'15px 28px',borderRadius:'10px',fontSize:'13px',fontWeight:600,textDecoration:'none' }}>
          💬 Mau mulai tapi masih bingung?
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#ECE7DE',padding:'26px 20px' }}>
        <div>
          <span style={{ fontFamily:'var(--font-heading)',fontSize:'13px',letterSpacing:'7px',textTransform:'uppercase',color:'#1A1714',display:'block' }}>Siavani</span>
          <div style={{ height:'0.5px',background:'#8A6A4E',marginTop:'3px',width:'48px',marginBottom:'12px' }} />
        </div>
        <div style={{ fontSize:'11px',color:'#A8A09A',marginBottom:'15px',lineHeight:1.6 }}>Distributor kosmetik · Reseller welcome · 500+ produk pilihan</div>
        <div style={{ display:'flex',gap:'18px',flexWrap:'wrap',marginBottom:'14px' }}>
          <Link href="/katalog" style={{ fontSize:'11px',color:'#5A5248',textDecoration:'none' }}>Katalog</Link><a href="#cara-order" style={{ fontSize:'11px',color:'#5A5248',textDecoration:'none' }}>Cara Order</a><a href={waLink('Halo Siavani, saya ingin bertanya')} target="_blank" rel="noopener noreferrer" style={{ fontSize:'11px',color:'#5A5248',textDecoration:'none' }}>WhatsApp</a>
        </div>
        <div style={{ fontSize:'10px',color:'#C0B8B0',paddingTop:'12px',borderTop:'0.5px solid #DDD6CA' }}>© 2025 Siavani. Distributor Kosmetik Indonesia.</div>
      </footer>

    </main>
  )
}
