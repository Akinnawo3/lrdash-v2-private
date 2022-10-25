import React from 'react'

function RatingsWidget() {

    const ratingsStat = [
        { label: "5 stars", progress: "80%", figure: 318 },
        { label: "4 stars", progress: "15%", figure: 12 },
        { label: "3 stars", progress: "0%", figure: 0 },
        { label: "2 stars", progress: "0%", figure: 0 },
        { label: "1 stars", progress: "0%", figure: 0 },
    ]

    return (
        <>
            <div className='fw-bold d-flex justify-content-between'>
                <span> Driver Ratings</span>
                <span className='gradient-text fw-normal cursor-pointer'>See Ratings</span>
            </div>
            <div className='my-3'>
                <div className="mt-2">
                    {/* <div className="d-flex align-items-center">
                        <progress id="male-progress" value="62" max="100" className="w-100">
                            62%
                        </progress>

                        <small className="ms-2 fw-bold" style={{ color: "#0065E1" }}>
                            62%
                        </small>
                    </div> */}
                    <div>
                        {
                            ratingsStat.map(
                                item =>
                                    <div key={item.label} className="d-flex align-items-center me-1 my-2">
                                        <small className='text-nowrap'>{item.label}</small>
                                        <div className="progress w-75 mx-2" style={{ height: "10px", backgroundColor: "#D5F0F7" }}>
                                            <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: item.progress, backgroundColor: "#59C4E1" }} aria-valuenow={parseInt(item.progress, 10)} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <small className=''>{item.figure}</small>
                                    </div>
                            )
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default RatingsWidget