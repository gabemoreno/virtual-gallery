'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon, PaintBrushIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
  { title: 'Home', href: '/' },
  {
    title: 'Gallery',
    dropdown: [
      { title: 'Renaissance', href: '/renaissance' },
      { title: 'Baroque', href: '/baroque' },
      { title: 'Rococo', href: '/rococo' },
      { title: 'Neoclassicism', href: '/neoclassicism' },
      { title: 'Romanticism', href: '/romanticism' },
      { title: 'Realism', href: '/realism' },
      { title: 'Modernism', href: '/modernism' },
      { title: 'Postmodernism', href: '/postmodernism' },
      { title: 'Contemporary', href: '/contemporary' },
    ],
  },
  { title: 'About', href: '/about' },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <nav className="text-gray-800 flex justify-between bg-gradient-to-t from-slate-700 to-slate-800 p-6 items-center sticky top-0 shadow-lg z-50">
      <Link href="/" className="bg-slate-50 p-4 rounded-full hover:bg-indigo-100">
        <PaintBrushIcon className="w-6 h-6 text-slate-800 hover:scale-105 transition-all cursor-pointer" />
      </Link>

      <div className="flex gap-x-4 items-center relative">
        {navigationButtons.map((button) => {
          if (button.dropdown) {
            return (
              <div key={button.title} className="relative">
                <button
                  onClick={() => toggleDropdown(button.title)}
                  className="flex items-center text-xl bg-slate-50 px-4 py-2 rounded hover:bg-indigo-100 transition"
                >
                  {button.title}
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>

                {openDropdown === button.title && (
                  <div className="absolute right-0 mt-2 bg-slate-50 border border-gray-200 shadow-lg rounded z-50">
                    {button.dropdown.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          if (button.href) {
            return (
              <div key={button.title}>
                <Link
                  href={button.href}
                  className="text-xl bg-slate-50 px-4 py-2 rounded hover:bg-indigo-100 transition"
                >
                  {button.title}
                </Link>
              </div>
            )
          }

          return null
        })}
      </div>
    </nav>
  )
}
