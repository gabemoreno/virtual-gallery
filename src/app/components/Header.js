// inside Header.jsx
export default function Header({
  title = 'My First Next Page is LIVE!!!! 🎉🎉',
  subtitle = 'Here you find out information about my first Next Page',
}) {
  return (
    <header className="flex flex-col gap-y-6">
      <h1 className="text-2xl fold-bold">{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}
