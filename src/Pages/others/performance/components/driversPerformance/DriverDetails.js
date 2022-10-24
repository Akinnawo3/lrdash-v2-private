import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import "../../../../../assets/scss/driver-details.scss"
import { BsFillStarFill } from "react-icons/bs"
import { FaChevronDown } from "react-icons/fa"
import DriverTripsChart from './DriverTripsChart'

const DriverDetails = () => {

    return (
        <div body className="h-100">
            <div className='driver-avt px-5 mt-3 d-flex align-items-center  justify-content-center' style={{ height: 120 }} >
                <img alt="avatar" className='mt-5' src='/images/driver-avt.png'
                    height={140} width={140} />
            </div>
            <div className='text-center mt-2'>
                <div className='fw-bold d-flex justify-content-center '><h5 className='me-2 fw-bold'>Jonna Lane</h5>
                    <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.42843 0.771885C2.75966 1.6596 0.264363 5.47258 0.894165 9.2294C1.89536 15.2022 9.09126 17.6205 13.4398 13.4455C18.9998 8.10756 13.9366 -1.04448 6.42843 0.771885ZM10.5962 2.99674C15.9752 5.47274 14.2148 13.5272 8.29459 13.5272C1.90519 13.5272 0.63969 4.71486 6.73891 2.69499C7.73586 2.36476 9.52799 2.50491 10.5962 2.99674ZM6.39012 6.00812C5.77145 6.33001 4.85982 6.72082 4.36446 6.87652C3.37849 7.18629 3.21818 7.52798 3.45857 8.80912L3.56059 9.3522H4.62565C6.46364 9.3522 6.98455 9.87399 6.98455 11.7147C6.98455 12.8643 7.07527 12.9497 8.29459 12.9497C9.53389 12.9497 9.60463 12.8772 9.60463 11.6088C9.60463 9.93587 10.1914 9.3522 11.8735 9.3522H13.0286L13.1306 8.80912C13.3517 7.6308 13.1879 7.1727 12.4703 6.96182C12.1101 6.85589 11.1929 6.46639 10.4321 6.09604C8.62717 5.21766 7.93842 5.2026 6.39012 6.00812ZM9.20261 7.13455C9.4561 7.38783 9.60463 7.72347 9.60463 8.0424C9.60463 8.36134 9.4561 8.69697 9.20261 8.95025C8.94928 9.2037 8.61358 9.3522 8.29459 9.3522C7.97559 9.3522 7.63989 9.2037 7.38657 8.95025C7.13307 8.69697 6.98455 8.36134 6.98455 8.0424C6.98455 7.72347 7.13307 7.38783 7.38657 7.13455C7.63989 6.8811 7.97559 6.7326 8.29459 6.7326C8.61358 6.7326 8.94928 6.8811 9.20261 7.13455Z" fill="url(#paint0_linear_785_29612)" />
                        <defs>
                            <linearGradient id="paint0_linear_785_29612" x1="1.04687" y1="0.537109" x2="15.6191" y2="15.3547" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00D2A8" />
                                <stop offset="0.970378" stop-color="#0693B8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <BsFillStarFill color="yellow" size={25} />
                    <span className='ms-2 fw-bold'>4.5 <span className='fw-normal'>(323 reviews) </span></span>
                </div>
                <h6 className='gradient-text mt-2 text-underline cursor-pointer'>
                    See About
                </h6>
            </div>
            <Card>
                <CardBody>
                    <div className='mt-3'>
                        <div className='fw-bold'>Vehicle</div>
                        <div className='my-3'>
                            <small className='text-muted'>
                                Plate No.
                            </small>
                            <div>
                                ZEN-000TS
                            </div>
                        </div>
                        <div className='my-3'>
                            <small className='text-muted'>
                                Vehicle ID
                            </small>
                            <div>
                                630349dadf94ac93d69f20bb
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />
                    <div className='mt-3'>
                        <div className='fw-bold'>Service performace</div>
                        <div className='my-3'>
                            <small className='text-muted'>
                                Gross earnings divided/28,000 X 100
                            </small>
                            <div className='gradient-text fw-bold'>
                                80%
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />
                    <div className='mt-3'>
                        <div className='fw-bold d-flex justify-content-between'>
                            <span>  Compliance Performance</span>
                            <span className=''><FaChevronDown color="#00D2A8" /></span>
                        </div>

                    </div>
                    <hr className='my-4' />
                    <div className='mt-3'>
                        <div className='fw-bold d-flex justify-content-between'>
                            <span> Trips</span>
                            <span className='gradient-text fw-normal cursor-pointer'>See Trips</span>
                        </div>
                        <div className='my-3'>
                            <div className='d-flex mt-2'>
                                <div>
                                    <DriverTripsChart />
                                </div>
                                <div>

                                </div>

                            </div>
                            <div>

                            </div>
                        </div>

                    </div>

                </CardBody>
            </Card>


        </div>
    )

}

export default DriverDetails