import Image from 'next/image'

export default function ArtistInfo({ name, bio, image }) {
  return (
    <div className="flex items-center gap-6 mt-8 bg-slate-200/80 rounded-full shadow-xl pr-8">
      <Image src={image} alt={name} width={100} height={100} className="rounded-full object-cover" />
      <div>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-600 mt-2">{bio}</p>
      </div>
    </div>
  )
}
