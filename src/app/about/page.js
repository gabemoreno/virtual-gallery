import Link from 'next/link'

export default function About() {
  return (
    <div className="text-center mt-20 max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Time Travel Gallery</h1>
      <p className="text-xl text-gray-600 mb-8">
        Journey through history and explore iconic works of art from the past, present, and future.
      </p>
      <Link href="/renaissance">
        <button className="px-6 py-3 text-xl bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Enter the Gallery
        </button>
      </Link>
    </div>
  )
}
