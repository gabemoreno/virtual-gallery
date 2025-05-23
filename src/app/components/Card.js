import Pill from './Pill'

export default function Card({
  image,
  title,
  alt,
  href = '#',
  subtitle = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maxime quod a eius veniam sequi atque quaerat omnis sed ea sint. Eaque consequatur delectus tenetur, culpa possimus debitis autem voluptatum?',
  tags = ['#photography', '#travel', '#winter'],
}) {
  return (
    <div className="flex-grow w-96 bg-stone-50 flex flex-col rounded-lg hover:scale-105 transition-all shadow-lg">
      <a href={href}>
        <img className="rounded-t-lg" src={image} alt={alt} />
        <div className="flex flex-col gap-y-4 px-8 py-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{subtitle}</p>
          <div className="flex gap-x-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}
