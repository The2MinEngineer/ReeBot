import SignupForm from '@/app/components/SignupForm';
import React from 'react'

const Page = () => {
  return (
      <div className='flex justify-between'>
          <div className='w-3/7'>
              <div>
                  <div>
                      {/* logo */}
                  </div>

                  <div>
                      {/* title && desc */}
                  </div>

                  <div>
                      {/* form */}
                      <SignupForm />
                  </div>
              </div>
          </div>
          <div className='w-4/7'></div>
          
    </div>
  )
}

export default Page