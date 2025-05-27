import EraCard from '../components/era/EraCard'
import Link from 'next/link'
import EraCarousel from '../components/era/EraCarousel'
import { eras } from '../components/era/Eras'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract painted background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
            Brushstrokes Through Time
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
            Journey through art history — from the visions of the Renaissance to the bold innovations of Contemporary
            art. Step into each era and experience its most iconic masterpieces.
          </p>
        </section>

        <EraCarousel eras={eras} />
      </div>
    </main>
  )
}
