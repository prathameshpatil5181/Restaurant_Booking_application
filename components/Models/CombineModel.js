import React from 'react'
import BillingModel from './BillingModel'
import FormModel from './FormModel'
const CombineModel = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:max-lg:flex-row-reverse' style={{padding: "150px 150px 0 150px",}}>
      <BillingModel/>
      <FormModel/>
    </div>
  )
}

export default CombineModel
