'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { postmodernismPieces } from '@/data/postmodernismPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function PostmodernismPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Postmodernism"
        dateRange="1960s–1990s"
        description="Art that rejects the rules — ironic, layered, and unafraid to mix high and low culture."
        image="https://www.singulart.com/blog/wp-content/uploads/2024/02/Marilyn-Diptych.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="Pop art is for everyone." author="Andy Warhol" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={postmodernismPieces} galleryID="postmodernism-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Andy Warhol"
        bio="Warhol was a leading figure in the pop art movement, known for transforming mass-produced imagery into fine art. His work blurred the lines between commercial and artistic expression."
        image="https://redwoodartgroup.com/wp-content/uploads/2019/09/Andy-Warhol-An-Original-.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/contemporary">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Contemporary →
          </button>
        </Link>
      </div>
    </main>
  )
}
