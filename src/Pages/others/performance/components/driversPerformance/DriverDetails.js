import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import "../../../../../assets/scss/driver-details.scss"
import { BsFillStarFill } from "react-icons/bs"
import { FaChevronDown } from "react-icons/fa"
import DriverTripsChart from './DriverTripsChart'

const DriverDetails = () => {

    const stat = [
        {
            icon: <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                < path d="M3.01065 1.23624C2.74626 0.971845 2.31197 0.969227 2.09589 1.27438C1.82203 1.66114 1.61802 2.09499 1.49512 2.55638C1.31388 3.23681 1.31547 3.95303 1.49973 4.63265C1.68399 5.31227 2.0444 5.9312 2.54452 6.4269C3.04463 6.9226 3.66675 7.27749 4.34798 7.4557C5.0292 7.63392 5.74541 7.62915 6.4242 7.44187C7.10299 7.25459 7.72032 6.89144 8.21379 6.38913C8.70726 5.88681 9.05939 5.26313 9.23458 4.58112C9.35337 4.11865 9.38796 3.64047 9.33858 3.16916C9.29962 2.79728 8.91969 2.58689 8.55969 2.68793C8.19969 2.78898 7.99924 3.16507 8.00588 3.53893C8.01009 3.77567 7.98252 4.01292 7.9231 4.24424C7.80722 4.69538 7.57429 5.10794 7.24787 5.44021C6.92144 5.77249 6.51309 6.01271 6.06407 6.13659C5.61506 6.26047 5.1413 6.26363 4.69068 6.14574C4.24005 6.02785 3.82853 5.79309 3.49771 5.4652C3.16689 5.1373 2.92849 4.72788 2.8066 4.27832C2.68471 3.82877 2.68366 3.355 2.80355 2.9049C2.86502 2.67412 2.95717 2.45376 3.07677 2.24941C3.26564 1.92671 3.27505 1.50063 3.01065 1.23624Z" fill="url(#paint0_linear_807_12049)" stroke="url(#paint1_linear_807_12049)" />
                <defs>
                    <linearGradient id="paint0_linear_807_12049" x1="1.49368" y1="-0.414062" x2="9.26555" y2="7.48864" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00D2A8" />
                        <stop offset="0.970378" stop-color="#0693B8" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_807_12049" x1="1.49368" y1="-0.414062" x2="9.26555" y2="7.48864" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00D2A8" />
                        <stop offset="0.970378" stop-color="#0693B8" />
                    </linearGradient>
                </defs>
            </svg >
            ,
            label: "Completed",
            figure: 321
        },
        {
            icon: <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.94063 6.67982C6.23097 6.91543 6.66322 6.87307 6.84655 6.54719C7.20495 5.9101 7.38412 5.18283 7.35782 4.4437C7.32344 3.47756 6.94033 2.55656 6.27934 1.85107C5.61836 1.14559 4.72424 0.703357 3.76238 0.606192C3.02653 0.531858 2.28914 0.663327 1.63008 0.97952C1.29296 1.14126 1.22257 1.56984 1.43879 1.87489C1.65501 2.17995 2.07662 2.24224 2.42647 2.11027C2.80612 1.96706 3.21657 1.912 3.62629 1.95339C4.26254 2.01766 4.85399 2.31019 5.29123 2.77686C5.72846 3.24353 5.98189 3.85276 6.00463 4.49185C6.01927 4.9034 5.93762 5.30939 5.77001 5.67892C5.61556 6.01944 5.65029 6.44421 5.94063 6.67982Z" fill="#FF0000" stroke="#FF0000" />
            </svg>
            ,
            label: "Cancelled",
            figure: 2
        },
        {
            icon: <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.67427 1.53376C6.82211 1.19032 6.6639 0.785859 6.30046 0.697981C5.77553 0.571055 5.22797 0.551188 4.69093 0.642351C3.93029 0.77147 3.22322 1.11781 2.65494 1.63963C2.08665 2.16145 1.6814 2.83649 1.48803 3.58338C1.29466 4.33027 1.32141 5.11716 1.56507 5.84919C1.80872 6.58123 2.25888 7.22718 2.8613 7.70919C3.46371 8.19121 4.19267 8.48873 4.96033 8.56588C5.72798 8.64304 6.50157 8.49655 7.18786 8.14406C7.6724 7.89519 8.09884 7.55113 8.44299 7.13493C8.68126 6.84677 8.56552 6.42817 8.24134 6.24185V6.24185C7.91717 6.05552 7.50828 6.17568 7.24597 6.44214C7.04931 6.64192 6.82114 6.8102 6.56922 6.93959C6.11525 7.17276 5.60353 7.26966 5.09574 7.21862C4.58795 7.16758 4.10575 6.97078 3.70726 6.65193C3.30877 6.33308 3.01099 5.9058 2.84982 5.42156C2.68864 4.93733 2.67095 4.41682 2.79886 3.92276C2.92677 3.4287 3.19484 2.98217 3.57075 2.63699C3.94667 2.29181 4.41438 2.06272 4.91754 1.9773C5.19674 1.92991 5.48025 1.92788 5.75741 1.96995C6.12709 2.02606 6.52642 1.8772 6.67427 1.53376V1.53376Z" fill="url(#paint0_linear_807_12059)" stroke="url(#paint1_linear_807_12059)" />
                <path d="M7.21347 7.34422C7.42199 7.65459 7.84765 7.74081 8.11846 7.48298C8.52352 7.09734 8.8451 6.62921 9.05973 6.10733C9.36063 5.37566 9.43781 4.5712 9.28151 3.79567C9.12521 3.02014 8.74245 2.30837 8.18162 1.75037C7.7816 1.35237 7.3038 1.04535 6.78098 0.846709C6.43145 0.71391 6.07241 0.958276 6.0004 1.32519V1.32519C5.92838 1.69209 6.1738 2.04052 6.51053 2.20305C6.77438 2.33041 7.01667 2.50139 7.22659 2.71025C7.59756 3.07935 7.85076 3.55018 7.95415 4.06318C8.05754 4.57619 8.00648 5.10833 7.80744 5.59232C7.69481 5.86618 7.53767 6.11766 7.34374 6.33728C7.09626 6.61756 7.00495 7.03385 7.21347 7.34422V7.34422Z" fill="#FF0000" stroke="#FF0000" />
                <defs>
                    <linearGradient id="paint0_linear_807_12059" x1="1.36035" y1="8.4526" x2="9.26305" y2="0.680741" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00D2A8" />
                        <stop offset="0.970378" stop-color="#0693B8" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_807_12059" x1="1.36035" y1="8.4526" x2="9.26305" y2="0.680741" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00D2A8" />
                        <stop offset="0.970378" stop-color="#0693B8" />
                    </linearGradient>
                </defs>
            </svg>
            ,
            label: "Total",
            figure: 323
        },
    ]

    return (
        <div body className="h-100">
            <div className='driver-avt px-5 mt-3 d-flex align-items-center  justify-content-center' style={{ height: 120 }} >
                <img alt="avatar" className='mt-5' src='/images/driver-avt.png'
                    height={140} width={140} />
            </div>
            <div className='text-center mt-2'>
                <div className='fw-bold d-flex justify-content-center '><h5 className='me-2 fw-bold'>Jonna Lane</h5>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
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
                            <div className='d-flex mt-2 align-items-center '>
                                <div>
                                    <DriverTripsChart />
                                </div>
                                <div className='ms-1 w-100'>
                                    {
                                        stat.map(
                                            item =>
                                                <div key={item.label} className="text-muted">
                                                    <div className='d-flex justify-content-between '>
                                                        <div>{item.icon}<small className='ms-2'>{item.label}</small></div>
                                                        <small>{item.figure}</small>
                                                    </div>
                                                </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />
                    <div className='mt-3'>
                        <div className='fw-bold d-flex justify-content-between'>
                            <span> Trips</span>
                            <span className='gradient-text fw-normal cursor-pointer'>See Trips</span>
                        </div>
                        <div className='my-3'>
                            <div className='d-flex mt-2 align-items-center '>
                                <div>
                                    <DriverTripsChart />
                                </div>
                                <div className='ms-1 w-100'>
                                    {
                                        stat.map(
                                            item =>
                                                <div key={item.label} className="text-muted">
                                                    <div className='d-flex justify-content-between '>
                                                        <div>{item.icon}<small className='ms-2'>{item.label}</small></div>
                                                        <small>{item.figure}</small>
                                                    </div>
                                                </div>
                                        )
                                    }
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