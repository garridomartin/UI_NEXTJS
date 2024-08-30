import Card from '../ui/dashboard/card/card'
import RightBar from '../ui/dashboard/rightBar/rightBar'

export default function DashboarComponent() {
  return (
    <div className='flex p-5 '>
      <div className='flex flex-grow flex-col gap-5'>
        <div className='flex gap-5 space-x-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className='flex-1'>
        <RightBar />
      </div>
    </div>
  )
}
