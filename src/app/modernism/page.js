'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { modernismPieces } from '@/data/modernismPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function ModernismPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Modernism"
        dateRange="Late 1800s–1900s"
        description="A bold break from tradition — new forms, ideas, and visions."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="What would life be if we had no courage to attempt anything?" author="Vincent van Gogh" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={modernismPieces} galleryID="modernism-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Vincent van Gogh"
        bio="Van Gogh was a Dutch post-impressionist painter whose emotionally expressive and visually bold works shaped the path of modern art."
        image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/postmodernism">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Postmodernism →
          </button>
        </Link>
      </div>
    </main>
  )
}
