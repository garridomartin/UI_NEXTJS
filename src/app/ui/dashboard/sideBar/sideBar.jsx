import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },

  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

export default function SideBar() {
  return (
    <div className='sticky top-10'>
      <div className='flex items-center gap-5 mb-5'>
        <Image
          className='rounded-full'
          src='/noavatar.png'
          alt='user picture'
          width='50'
          height='50'
        />
        <div className='flex flex-col '>
          <span className=' font-medium'>Jon Doe</span>
          <span className=' text-xs text-gray'>Administrator</span>
        </div>
      </div>
      <ul className=' list-none'>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className=' font-bold text-xs mt-2.5  text-gray'>
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className='flex items-center p-5 mb-1 gap-2.5 w-full hover:bg-grayHover rounded-lg'>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}
