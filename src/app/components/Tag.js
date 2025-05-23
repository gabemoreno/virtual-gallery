export default function Tag({ content = 'New', classNames = '' }) {
  return (
    <div
      className={`px-2 text-white rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ${classNames}`}
    >
      {content}
    </div>
  )
}
