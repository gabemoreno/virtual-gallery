// I belong inside src/app/about/page.js
import SimpleGallery from '../components/SimpleGallery'

const images = [
  {
    largeURL:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 3840,
    height: 5760,
    alt: 'Flower Image 1',
  },
  {
    largeURL:
      'https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:
      'https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 3840,
    height: 5760,
    alt: 'Flower Image 2',
  },
  {
    largeURL:
      'https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnailURL:
      'https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 3840,
    height: 5760,
    alt: 'Flower Image 3',
  },
]

export default function About() {
  return (
    <div className="p-12">
      <h1 className="text-2xl">About Page</h1>
      <div className="mt-12">
        <SimpleGallery galleryID="image-gallery" images={images} />
      </div>
    </div>
  )
}
