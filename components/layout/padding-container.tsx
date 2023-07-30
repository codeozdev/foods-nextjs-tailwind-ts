import React, { ReactNode } from 'react'

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto p-4 max-w-[1640px]'>
      {children}
    </div>
  )
}
export default PaddingContainer
