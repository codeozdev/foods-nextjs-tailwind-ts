import React, { ReactNode } from 'react'

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto flex max-w-[1640px] items-center justify-between p-4'>
      {children}
    </div>
  )
}
export default PaddingContainer
