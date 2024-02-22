import React from 'react'

const Paragraph = ({children}:{children:string}) => {
  return (
    <p className=' text-3xl  my-8'>{children}</p>
  )
}

export default Paragraph