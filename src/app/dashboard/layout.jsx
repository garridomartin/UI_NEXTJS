import NavBar from '../ui/dashboard/navBar/navBar'
import SideBar from '../ui/dashboard/sideBar/sideBar'

export default function Layout({ children }) {
  return (
    <div className='flex'>
      <div className='flex-shrink bg-soft p-5 '>
        <SideBar />
      </div>
      <div className='flex-grow '>
        <NavBar />
        {children}
      </div>
    </div>
  )
}
