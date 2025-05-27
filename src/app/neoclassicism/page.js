'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { neoclassicismPieces } from '@/data/neoclassicismPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function NeoclassicismPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Neoclassicism"
        dateRange="Late 1700s–1800s"
        description="A return to order and antiquity — inspired by Roman ideals, symmetry, and rational thought."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Le_Serment_des_Horaces_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3692_%3B_MR_1432.jpg/1200px-Le_Serment_des_Horaces_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3692_%3B_MR_1432.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox
        quote="The artist must be a philosopher. Socrates, not Apelles, must be his model."
        author="Jacques-Louis David"
      />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={neoclassicismPieces} galleryID="neoclassicism-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Jacques-Louis David"
        bio="Jacques-Louis David was a leading figure in Neoclassical painting, known for his stoic compositions and politically charged artworks during the French Revolution and Napoleonic era."
        image="https://upload.wikimedia.org/wikipedia/commons/c/c6/David_Self_Portrait.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/romanticism">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Romanticism →
          </button>
        </Link>
      </div>
    </main>
  )
}
