'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { romanticismPieces } from '@/data/romanticismPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function RomanticismPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Romanticism"
        dateRange="1800–1850"
        description="Emotion over reason — a passionate response to nature, history, and the human soul."
        image="https://upload.wikimedia.org/wikipedia/commons/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="The artist’s feeling is his law." author="Caspar David Friedrich" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={romanticismPieces} galleryID="romanticism-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Caspar David Friedrich"
        bio="Caspar David Friedrich was a German Romantic painter known for his moody landscapes and spiritual portrayals of nature, often emphasizing solitude and introspection."
        image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/realism">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Realism →
          </button>
        </Link>
      </div>
    </main>
  )
}
