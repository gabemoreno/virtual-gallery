import Card from './Card'

const defaultCards = [
  {
    title: 'The Coldest Sunset',
    image:
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'The Coldest Sunset',
  },
  {
    title: 'The Warmest Sunset',
    image:
      'https://images.unsplash.com/photo-1466618572466-002f11d518db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'The Warmest Sunset',
  },
  {
    title: 'The Coolest Ocean',
    image:
      'https://images.unsplash.com/photo-1468861389126-e0ca735dba0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'The Coolest Ocean',
  },
]

export default function CardContainer({ cards = defaultCards }) {
  return (
    <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}
