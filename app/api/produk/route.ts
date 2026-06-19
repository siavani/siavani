// ============================================================
// app/api/produk/route.ts
// API endpoint yang ambil produk dari Google Sheets
// API key tetap aman di server, tidak terlihat oleh browser
// ============================================================

import { NextResponse } from 'next/server'
import { getProducts } from '@/lib/sheets'

export const revalidate = 3600 // cache 1 jam

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json([], { status: 500 })
  }
}
