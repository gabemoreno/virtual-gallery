'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'
import { rococoPieces } from '@/data/rococoPieces'

export default function RococoPage() {
  // Gallery image data

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />
      {/* Era overview card */}
      <EraCard
        title="Rococo"
        dateRange="1700s"
        description="Delicate, ornamental, and lighthearted — a celebration of luxury, romance, and playfulness in art."
        image="https://smarthistory.org/wp-content/uploads/2021/02/Fragonard-Swing-Whole.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="The art of pleasing consists in being pleased." author="William Hazlitt" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={rococoPieces} galleryID="rococo-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Jean-Honoré Fragonard"
        bio="Fragonard was a master of the Rococo style, known for his exuberant brushwork, romantic themes, and playful depictions of love and leisure."
        image="https://uploads6.wikiart.org/images/jean-honore-fragonard/self-portrait.jpg!Large.jpg"
      />
      <div className="text-center mt-16">
        <Link href="/neoclassicism">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Neoclassicism →
          </button>
        </Link>
      </div>
    </main>
  )
}
