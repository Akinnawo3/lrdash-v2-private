import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";
// import {TableCell, TableRow,TableBody,TableHead} from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import { Card, CardTitle, Table } from "reactstrap";
import { ExportSvg, FilterSvg } from "../../../../../components/tablesComponents/tableSvgs";
import { performancePercentageColor } from "../../../../../helpers/colorsHelper";

const PerformanceTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Showing 24 riders</span>




          <div className="cursor-pointer">
            <FilterSvg />
            <ExportSvg />
          </div>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      <div>
        <Table striped responsive>
          <thead className="fw-normal">
            <tr>
              <th> Name</th>
              <th>Phone No</th>
              <th>Service</th>
              <th>Compliance</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12}).map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="">
                    <img alt="thumbnail" src="/images/avatar.png" height={25} width={22} className="rounded-circle me-1" />
                  </span>
                  Joanna Lane
                </td>
                <td>070 3397 6621 </td>
                <td>80%</td>
                <td>80%</td>
                <td className={`text-${performancePercentageColor(Math.floor(Math.random() * 10)*10)}`}>{Math.floor(Math.random() * 10)*10}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default PerformanceTable;
