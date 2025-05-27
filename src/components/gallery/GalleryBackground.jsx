export default function GalleryBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Abstract painted background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
    </div>
  )
}
