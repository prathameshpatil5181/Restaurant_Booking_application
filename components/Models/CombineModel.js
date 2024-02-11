import React from 'react'
import BillingModel from './BillingModel'
import FormModel from './FormModel'
const CombineModel = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-2 p-5' >
      <BillingModel/>
      <FormModel/>
    </div>
  )
}

export default CombineModel
