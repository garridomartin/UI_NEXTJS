'use client'
import { usePathname } from 'next/navigation'
import {
  MdSearch,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
} from 'react-icons/md'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <div className='flex place-content-between items-center p-5 m-5 rounded-lg bg-soft'>
      <div className='font-bold text-gray capitalize'>
        {pathname.split('/').pop()}
      </div>
      <div className='flex items-center font-bold'>
        <div className='flex items-center p-2.5 gap-2.5 mr-4 bg-slate-700 rounded-lg'>
          <MdSearch />
          <input
            className='flex items-center gap-2.5  text-gray bg-slate-700 rounded-lg'
            type='text'
            placeholder='Search...'
          />
        </div>
        <div className='flex gap-2.5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}
