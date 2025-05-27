export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6 text-center">About</h1>

      <p className="text-lg mb-6">
        <strong>Brushstrokes Through Time</strong> is a curated digital gallery exploring the evolution of Western art.
        From the harmonious ideals of the Renaissance to the bold experimentation of Contemporary movements, this
        project invites you to experience the artistic spirit of each era through iconic works and immersive visuals.
      </p>

      <p className="text-lg mb-6">
        Each section of the gallery highlights a different period in art history, featuring:
      </p>

      <ul className="list-disc list-inside mb-6 text-lg space-y-2">
        <li>A brief introduction to the era's cultural and aesthetic themes</li>
        <li>A handpicked gallery of representative artworks</li>
        <li>Insights into a featured artist who helped define the movement</li>
      </ul>

      <p className="text-lg mb-6">
        This site is powered by modern web tools including <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,{' '}
        <strong>Keen-Slider</strong>, and
        <strong> Photoswipe</strong> to provide a responsive and engaging experience. It was built with care to be both
        educational and visually immersive.
      </p>

      <p className="text-lg">
        Whether you're a student, a casual art lover, or simply curious, you're invited to explore and reflect on the
        enduring legacy of human creativity—one era at a time.
      </p>
    </main>
  )
}
