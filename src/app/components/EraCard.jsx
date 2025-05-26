import Image from 'next/image'
import Link from 'next/link'

export default function EraCard({ title, dateRange, description, image, slug }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-slate-50/80 mb-6 flex flex-col h-full hover:scale-102 transition">
      {/* Image container with relative layout */}
      <div className="relative w-full aspect-[4/3] overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 "
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 italic">{dateRange}</p>
        <p className="mt-2 text-gray-700 ">{description}</p>

        {slug && (
          <div className="mt-auto pt-4">
            <Link href={`/${slug}`}>
              <button className="w-full animate-pulse px-4 py-2 bg-slate-200 text-black rounded-full hover:bg-indigo-200 transition cursor-pointer">
                View Gallery
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
