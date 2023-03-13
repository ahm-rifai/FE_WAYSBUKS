import React from 'react'
import { Stack } from 'react-bootstrap'
 
function ShopCarts() {
  return (
    <>
        <Stack direction="horizontal" gap={3} className="">
            <img src="/Assets/palmsugar.png" width="80" alt="products" className="rounded"/>
            <Stack direction="vertical" className="mt-4 " gap={2}>
                <div className="fw-bold fs-5" style={{color: '#BD0707'}}>Ice Coffe Palm Sugar</div>
                <div className="" style={{color: '#BD0707', fontSize: "15px"}}><span className='fw-bold' style={{color: '#974A4A'}}>Toping</span> : Bill Berry Boba, Bubble Tea Gelatin</div>
            </Stack>
            <Stack direction="vertical" className="mt-4 " gap={2}>
                <div className="ms-auto" style={{color: '#BD0707'}}>Rp. 33.000</div>
                <div className="ms-auto"><img src="/Assets/delete.png" width="20" alt="delete" /></div>
            </Stack>
        </Stack>
    </>
  )
}
 
export default ShopCarts