'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLink({ item }) {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`flex p-5 items-center mb-1 gap-2.5 hover:bg-grayHover rounded-lg ${
        pathname === item.path ? 'bg-grayHover' : ''
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}
