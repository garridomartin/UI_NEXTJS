import Image from 'next/image'

export default function Transactions() {
  return (
    <div className='p-5 rounded-md bg-soft'>
      <h2 className='mb-5 font-extralight text-gray'>Latest Transactions</h2>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='flex gap-2.5 items-center mb-3'>
                <Image
                  className='rounded-full object-fill'
                  src='/noavatar.png'
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className='rounded-md p-1 text-xs bg-amber-700'>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className='flex gap-2.5 items-center  mb-3'>
                <Image
                  className='rounded-full object-fill'
                  src='/noavatar.png'
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className='rounded-md p-1 text-xs bg-red-700'>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className='flex gap-2.5 items-center  mb-3'>
                <Image
                  className='rounded-full object-fill'
                  src='/noavatar.png'
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className='rounded-md p-1 text-xs bg-red-700'>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className='flex gap-2.5 items-center  mb-3'>
                <Image
                  className='rounded-full object-fill'
                  src='/noavatar.png'
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className='rounded-md p-1 text-xs bg-green-700'>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
