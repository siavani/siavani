// ============================================================
// lib/sheets.ts
// Fungsi untuk ambil data produk dari Google Sheets
// ============================================================

const SHEETS_ID = process.env.SHEETS_ID!
const API_KEY = process.env.SHEETS_API_KEY!
const SHEET_NAME = 'Produk'

export interface Product {
  id: string
  nama: string
  brand: string
  kategori: string
  badge: string
  foto_url: string
  wa_teks: string
  aktif: string
}

export async function getProducts(): Promise<Product[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}/values/${SHEET_NAME}!A:H?key=${API_KEY}`

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // update otomatis tiap 1 jam
    })

    if (!res.ok) {
      console.error('Gagal ambil data dari Sheets:', res.status)
      return []
    }

    const data = await res.json()

    if (!data.values || data.values.length < 2) {
      return []
    }

    const [headers, ...rows] = data.values

    return rows
      .map((row: string[]) => {
        const product: Record<string, string> = {}
        headers.forEach((header: string, i: number) => {
          product[header.trim().toLowerCase()] = row[i] || ''
        })
        return product as unknown as Product
      })
      .filter((p: Product) => p.aktif?.toLowerCase() === 'ya')

  } catch (err) {
    console.error('Error koneksi Google Sheets:', err)
    return []
  }
}
