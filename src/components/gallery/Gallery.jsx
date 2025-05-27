'use client'

import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import GalleryCard from './GalleryCard.jsx'
import 'photoswipe/style.css'

export default function Gallery({ images, galleryID }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
    return () => lightbox.destroy()
  }, [galleryID])

  return (
    <div className="pswp-gallery grid grid-cols-1 sm:grid-cols-2 gap-6" id={galleryID}>
      {images.map((image, index) => (
        <GalleryCard key={`${galleryID}-${index}`} image={image} />
      ))}
    </div>
  )
}
