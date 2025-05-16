import React from 'react'

const Wrapper = (props) => {
    console.log(props.children);
    
  return (
    <div className='p-10'>{props.children}

      
    </div>
  )
}

export default Wrapper
