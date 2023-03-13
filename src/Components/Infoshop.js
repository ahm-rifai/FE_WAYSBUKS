import React from 'react'

function Infoshops() {
  return (
    <>
        <div className="d-flex mb-3">
            <img src="/Assets/palmsugar.png" alt="product" width={80} height={90} className="me-3" />
            <div>
                <text className="d-block fw-bold" style={{fontSize: "14px"}}>Ice Coffee Green Tea</text>
                <text className="d-block mb-2" style={{fontSize: "10px"}}><b>Saturday, </b><span>5 March 2020</span></text>
                <text className="d-block" style={{fontSize: "9px"}}><b>Toping:</b> <span>Bill Berry Boba, Bubble Tea Gelatin</span></text>
                <text style={{fontSize: "9px"}}><b>Price: </b><span>Rp.33.000</span></text>
            </div>
        </div>
    </>
  )
}

export default Infoshops