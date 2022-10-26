
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap";
const PerformanceTypeFilter = ({
    toggled, handleToggle, dateType, handleDateTypeChange, idPrefix
}) => {
    return <Dropdown direction="top" className="d-inline" isOpen={toggled} toggle={handleToggle}>
        <DropdownToggle caret className="btn-sm p-0 text-muted px-1 border-white bg-danger" style={{ backgroundColor: "white", width: 100 }}>
            {dateType}
        </DropdownToggle>
        <DropdownMenu className="px-2" style={{ width: 230 }}>
            <div className="mb-3"> <small className="fw-bold ms-4 ">Show for</small></div>
            <FormGroup check className="mb-3">
                <Input
                    id={idPrefix + "Overall Perf"}
                    name="perfType"
                    type="radio"
                    value="Overall Perf."
                    onChange={handleDateTypeChange}
                    defaultChecked={dateType === ""}
                />
                <Label check className={`${dateType === "This week" && "gradient-text"}`} for={idPrefix + "Overall Perf"}>
                    Overall Perf.
                </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
                <Input
                    id={idPrefix + "Service Perf"}
                    name="perfType"
                    type="radio"
                    value="This month"
                    onChange={handleDateTypeChange}
                    defaultChecked={dateType === "This month"}
                />
                <Label check className={`${dateType === "This month" && "gradient-text"}`} for={idPrefix + "Service Perf"}>
                    Service Perf.
                </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
                <Input
                    id={idPrefix + "Compliance Perf"}
                    name="perfType"
                    type="radio"
                    value="Last 6 months"
                    onChange={handleDateTypeChange}
                    defaultChecked={dateType === "Last 6 months"}
                />
                <Label check className={`${dateType === "Last 6 months" && "gradient-text"}`} for={idPrefix + "Compliance Perf"}>
                    Compliance Perf.
                </Label>
            </FormGroup>

            <div className="d-flex justify-0content-between my-4 px-1 ">
                <Button className="btn-sm gradient-btn ms-3 mt-2 px-3">Apply</Button>
                <Button className="btn-sm ms-3 mt-2 px-3" >clear</Button>
            </div>
        </DropdownMenu>
    </Dropdown>

}

export default PerformanceTypeFilter




