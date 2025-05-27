'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { contemporaryPieces } from '@/data/contemporaryPieces'
import GalleryBackground from '@/components/gallery/GalleryBackground'
import Link from 'next/link'

export default function ContemporaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <GalleryBackground />

      {/* Era overview card */}
      <EraCard
        title="Contemporary"
        dateRange="1990s–Present"
        description="Bold, diverse, and global — contemporary art explores identity, media, and the boundaries of creativity."
        image="https://hirshhorn.si.edu/wp-content/uploads/2016/12/Eternity2.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="Art is not a mirror held up to reality, but a hammer with which to shape it." author="Banksy" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={contemporaryPieces} galleryID="contemporary-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Yayoi Kusama"
        bio="A Japanese artist known for her immersive installations, polka dot motifs, and pioneering influence on contemporary conceptual and installation art."
        image="https://images.masterworksfineart.com/person/yayoi-kusama/1200px-Yayoi_Kusama_cropped_1_Yayoi_Kusama_201611.jpg"
      />

      <div className="text-center mt-16">
        <Link href="/">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Return to Timeline →
          </button>
        </Link>
      </div>
    </main>
  )
}
