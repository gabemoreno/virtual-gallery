'use client'

import EraCard from '../../components/era/EraCard'
import ArtistInfo from '../../components/gallery/ArtistInfo'
import QuoteBox from '../../components/gallery/QuoteBox'
import Gallery from '../../components/gallery/Gallery'
import { renaissancePieces } from '@/data/renaissancePieces'
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
        title="Renaissance"
        dateRange="1300s–1600s"
        description="The Renaissance marked a cultural revival of classical art, literature, and humanism in Europe."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
        slug={undefined}
        hoverScale={false}
      />

      {/* Featured Quote */}
      <QuoteBox quote="Art is never finished, only abandoned." author="Leonardo da Vinci" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={renaissancePieces} galleryID="renaissance-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Leonardo da Vinci"
        bio="Leonardo was a polymath whose works combined science, art, and innovation. He's known for masterpieces like the Mona Lisa and The Last Supper."
        image="https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk.jpg"
      />
      <div className="text-center mt-16">
        <Link href="/baroque">
          <button className="px-6 py-3 bg-slate-700 text-white rounded shadow hover:bg-indigo-500 hover:scale-102 transition cursor-pointer">
            Explore Baroque →
          </button>
        </Link>
      </div>
    </main>
  )
}
