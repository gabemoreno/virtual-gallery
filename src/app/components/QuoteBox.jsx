export default function QuoteBox({ quote, author }) {
  return (
    <div className="border-l-4 shadow-xl border-slate-700 pl-4 pb-2 pt-2 pr-4 my-8 text-gray-700 italic bg-slate-100">
      <p>“{quote}”</p>
      <p className="text-sm mt-1 text-right font-medium">— {author}</p>
    </div>
  )
}
