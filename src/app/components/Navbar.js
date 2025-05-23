import Link from 'next/link'
import Button from './Button'
import Tag from './Tag'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
  {
    title: 'Blog',
    href: '/blog',
    isNew: true,
  },
  {
    title: 'About',
    href: '/about',
    isNew: true,
  },
  {
    title: 'Home',
    href: '/',
    isNew: false,
  },
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      <Link href="/" className="bg-stone-50 p-4 rounded-full hover:bg-green-100">
        <GlobeAltIcon className="w-6 h-6 text-green-500 hover:scale-105  transition-all cursor-pointer" />
      </Link>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ href, title, isNew }) => (
          <>
            <Button href={href} classNameProp="flex text-xl">
              {isNew && <Tag classNames="mr-2 animate-bounce" />}
              {title}
            </Button>
          </>
        ))}
      </div>
    </nav>
  )
}
