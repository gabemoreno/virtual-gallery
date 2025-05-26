'use client'

import EraCard from '../components/EraCard'
import ArtistInfo from '../components/ArtistInfo'
import QuoteBox from '../components/QuoteBox'
import Gallery from '../components/gallery/Gallery'

export default function RenaissancePage() {
  // Gallery image data
  const renaissanceImages = [
    {
      title: 'Vitruvian Man',
      artist: 'Leonardo da Vinci',
      year: 1490,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/1200px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/1200px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      width: 1200,
      height: 1632,
    },
    {
      title: 'The School of Athens',
      artist: 'Raphael',
      year: 1511,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
      width: 3820,
      height: 2964,
    },
    {
      title: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      year: 1503,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      width: 1200,
      height: 1788,
    },
    {
      title: 'Primavera',
      artist: 'Sandro Botticelli',
      year: 1482,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/960px-Botticelli-primavera.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/960px-Botticelli-primavera.jpg',
      width: 960,
      height: 631,
    },
    {
      title: 'The Birth of Venus',
      artist: 'Sandro Botticelli',
      year: 1486,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
      width: 960,
      height: 603,
    },
    {
      title: 'The Last Supper',
      artist: 'Leonardo da Vinci',
      year: 1498,
      thumbnailURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1200px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
      largeURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1200px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
      width: 1200,
      height: 600,
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Background image */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract painted background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>
      {/* Era overview card */}
      <EraCard
        title="Renaissance"
        dateRange="1300s–1600s"
        description="The Renaissance marked a cultural revival of classical art, literature, and humanism in Europe."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
        slug={undefined}
      />

      {/* Featured Quote */}
      <QuoteBox quote="Art is never finished, only abandoned." author="Leonardo da Vinci" />

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gallery</h2>
      <Gallery images={renaissanceImages} galleryID="renaissance-gallery" />

      {/* Featured Artist */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Artist</h2>
      <ArtistInfo
        name="Leonardo da Vinci"
        bio="Leonardo was a polymath whose works combined science, art, and innovation. He's known for masterpieces like the Mona Lisa and The Last Supper."
        image="https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk.jpg"
      />
    </main>
  )
}
