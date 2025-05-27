'use client'

export default function GalleryItem({ image }) {
  return (
    <div>
      <a
        href={image.largeURL}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
      >
        {/* Outer dark frame with scale hover */}
        <div className="group transition-transform duration-200 hover:scale-105 border-8 border-slate-700 shadow-xl rounded overflow-hidden">
          {/* Inner white frame */}
          <div className="relative aspect-[4/5] border-10 border-white">
            <img src={image.thumbnailURL} alt={image.title} className="w-full h-full object-cover" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="text-white text-center px-3">
                <p className="font-semibold italic">{image.title}</p>
                <p>
                  {image.artist}, {image.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
