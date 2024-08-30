'use client'
import { usePathname } from 'next/navigation'
import { MdSupervisedUserCircle } from 'react-icons/md'
import {
  MdSearch,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
} from 'react-icons/md'

export default function Card() {
  const pathname = usePathname()

  return (
    <div className='flex bg-soft p-2.5 rounded-lg gap-5 cursor-pointer w-full hover:bg-slate-700'>
      <MdSupervisedUserCircle size={24} />
      <div className='flex flex-col gap-5'>
        <span>Total Users</span>
        <span className='text-2xl font-medium'>10.273 </span>
        <span className='text-sm font-light'>
          <span className='text-lime-500'>12%</span> more than previous week
        </span>
      </div>
    </div>
  )
}
