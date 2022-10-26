import classNames from "classnames";
import { useState } from "react";
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap";
import { FilterSvg } from "../../../../../components/tablesComponents/tableSvgs";

const PerformanceTableFilters = ({ filterTabs, currentFilterTab, setCurrentFilterTab }) => {


    return <Dropdown direction="top" className="d-inline" isOpen={toggled} toggle={handleToggle}>
        <DropdownToggle caret className="btn-sm p-0 text-muted px-1 border-white " style={{ backgroundColor: "white", width: 100 }}>
            <div>
                <FilterSvg />
            </div>
        </DropdownToggle>
        <DropdownMenu className="px-2" style={{ width: 250 }}>
            <div className="mb-3"> <small className="fw-bold ms-4 ">Show for</small></div>
            <div className="mt-3 d-flex justify-content-between">
                {
                    filterTabs.map(
                        item => <div key={item} className={classNames("gradient-btn px-2")}>
                            {item}
                        </div>
                    )
                }
            </div>
            <>
                <FormGroup check className="mb-3">
                    <Input
                        id={idPrefix + "Overall Perf"}
                        name="perfType"
                        type="radio"
                        value="Overall Perf."
                        onChange={handlePerfTypeChange}
                        defaultChecked={perfType === ""}
                    />
                    <Label check className={`${perfType === "This week" && "gradient-text"}`} for={idPrefix + "Overall Perf"}>
                        Overall Perf.
                    </Label>
                </FormGroup>
                <FormGroup check className="mb-3">
                    <Input
                        id={idPrefix + "Service Perf"}
                        name="perfType"
                        type="radio"
                        value="Service Perf."
                        onChange={handlePerfTypeChange}
                        defaultChecked={perfType === "This month"}
                    />
                    <Label check className={`${perfType === "This month" && "gradient-text"}`} for={idPrefix + "Service Perf"}>
                        Service Perf.
                    </Label>
                </FormGroup>
                <FormGroup check className="mb-3">
                    <Input
                        id={idPrefix + "Compliance Perf"}
                        name="perfType"
                        type="radio"
                        value="Compliance Perf."
                        onChange={handlePerfTypeChange}
                        defaultChecked={perfType === "Last 6 months"}
                    />
                    <Label check className={`${perfType === "Last 6 months" && "gradient-text"}`} for={idPrefix + "Compliance Perf"}>
                        Compliance Perf.
                    </Label>
                </FormGroup>
            </>

            <div className="d-flex justify-0content-between my-4 px-1 ">
                <Button className="btn-sm gradient-btn ms-3 mt-2 px-3">Apply</Button>
                <Button className="btn-sm ms-3 mt-2 px-3" >Clear</Button>
            </div>
        </DropdownMenu>
    </Dropdown>
}
export default PerformanceTableFilters