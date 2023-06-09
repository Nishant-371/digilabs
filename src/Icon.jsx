import React from 'react'
import "./Icon2.css"
const icon1 =<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5711 0.0863955C13.7017 0.102476 13.767 0.110515 13.8462 0.127147C14.8033 0.327938 15.2842 0.871705 15.3665 1.84616C15.3733 1.92687 15.3733 2.23847 15.3733 2.86168C15.3733 6.0456 17.9544 8.62667 21.1383 8.62667C21.7615 8.62667 22.0731 8.62667 22.1538 8.63349C23.1283 8.71579 23.6721 9.19669 23.8729 10.1538C23.8895 10.233 23.8975 10.2983 23.9136 10.4289C24.7582 17.2868 19.3084 24 12.0104 24H0V11.9896C0 4.69155 6.71325 -0.758227 13.5711 0.0863955ZM12.0104 14.3917H9.60833V11.9896C9.60833 10.663 10.6838 9.58751 12.0104 9.58751C13.337 9.58751 14.4125 10.663 14.4125 11.9896C14.4125 13.3162 13.337 14.3917 12.0104 14.3917Z" fill="#0858F7"/>
</svg>
const icon2=<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="3" r="3" transform="rotate(-180 3 3)" fill="#4ACD7C"/>
</svg>



const icon = () => {
  return (
    <>
    <div className='big'>
      {icon1}
      
      </div>
      <div className='small'>{icon2}</div>
      </>
  )
}

export default icon