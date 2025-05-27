'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { baroquePieces } from '@/data/baroquePieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function RenaissancePage() {
  // Gallery image data

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />
      {/* Era overview card */}
      <EraCard
        title="Baroque"
        dateRange="1600s-1700s"
        description="Art of grand drama and deep emotion, where light and shadow magnify spiritual and political power."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox
        quote="Painting is a strange business — you begin with an idea, and it becomes something else."
        author="Rembrandt"
      />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={baroquePieces} galleryID="baroque-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Rembrandt van Rijn"
        bio="Rembrandt was a Dutch Baroque painter known for his deeply human portraits and masterful use of light and shadow. His work captured emotion, narrative, and psychology with unmatched intensity."
        image="https://cdn.britannica.com/82/190482-050-33D2C4C5/Self-Portrait-canvas-Rembrandt-van-Rijn-Washington-DC.jpg"
      />
      <div className="text-center mt-16">
        <Link href="/rococo">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Rococo →
          </button>
        </Link>
      </div>
    </main>
  )
}
