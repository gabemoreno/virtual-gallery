'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { realismPieces } from '@/data/realismPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function RealismPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Realism"
        dateRange="1840s–1860s"
        description="An unfiltered look at real life — honest, grounded, and shaped by industrial and social change."
        image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox
        quote="The beautiful is in nature, and it is encountered under the most diverse forms of reality."
        author="Gustave Courbet"
      />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={realismPieces} galleryID="realism-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Gustave Courbet"
        bio="Courbet was a pioneering French Realist who rejected idealized subjects and instead painted the raw, often harsh, realities of everyday life."
        image="https://www.art-prints-on-demand.com/kunst/gustave_courbet/Selbstbildnis.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/modernism">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Modernism →
          </button>
        </Link>
      </div>
    </main>
  )
}
