import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { WatchListSVG1 } from '../../../assets/svgs/svgs'
import BlankCard from '../../../components/BlankCard'
import DriverDetails from './components/driversPerformance/DriverDetails'
import PerformanceTable from './components/driversPerformance/performanceTable'

function WatchList() {
    return (
        <div className="table-wrapper mb-3">
            <Row>
                <Col md={7} lg={9}>
                    <Row>


                        <Col className="mt-3" md={4}>
                            <Card>
                                <CardBody>
                                    <div className='d-flex justify-content-between'>
                                        <WatchListSVG1/>
                                        <small className='gradient-text fw-bold'>+34%</small>
                                    </div>
                                    <div>
                                        <div className='fs-4'>4,963</div>
                                        <small className='text-muted lh-small'>Total Driver</small>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="mt-3" xs={12}>
                            <PerformanceTable />
                        </Col>
                    </Row>
                </Col>
                <Col md={5} lg={3} className="mt-3">
                    <BlankCard/>
                    {/* <TopFive /> */}
                    {/* <DriverDetails /> */}
                </Col>
            </Row>
        </div>
    )
}

export default WatchList