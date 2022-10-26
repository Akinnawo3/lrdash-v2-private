import classNames from "classnames";
import { useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { FilterSvg } from "../../../../../components/tablesComponents/tableSvgs";

const PerformanceTableFilters = ({
  toggled,
  handleToggle,
  currentFilterTab,
  setCurrentFilterTab,
  grade,
  setGrade,
}) => {
  const filterTabs = ["Overall", "Service", "Compliance"];
  const grades = ["All", "Best", "Above Av.", "Below Av", "Poor"];

  return (
    <Dropdown
      direction="top"
      className="d-inline"
      isOpen={toggled}
      toggle={handleToggle}
    >
      <DropdownToggle
        caret
        className="btn-sm p-0 text-muted px-1 border-white "
        style={{ backgroundColor: "white", width: 100 }}
      >
        <div>
          <FilterSvg />
        </div>
      </DropdownToggle>
      <DropdownMenu className="px-3" style={{ width: 320 }}>
        <div className="mb-3 mt-2">
          <small className="fw-bold ms-2  ">Show for</small>
        </div>
        <div className="my-3 d-flex justify-content-between">
          {filterTabs.map((item) => (
            <small
              key={item}
              className={classNames("gradient-btn px-3 text-white py-1")} 
              onClick={() => setCurrentFilterTab(item)}
              style={{borderRadius:16}}
            >
              {item}
            </small>
          ))}
        </div>

        {grades.map((item) => (
          <FormGroup check className="mb-3" key={item}>
            <Input
              id={grade}
              name={item}
              type="radio"
              value={item}
              onChange={(e) => setGrade(e.target.value)}
              defaultChecked={item === grade}
            />
            <Label
              check
              className={classNames({ "gradient-text": item === grade })}
              for={item}
            >
              {item}
            </Label>
          </FormGroup>
        ))}

        <div className="d-flex justify-0content-between my-4 ">
          <Button className="btn-sm gradient-btn ms-3 mt-2 px-3">Apply</Button>
          <Button className="btn-sm ms-3 mt-2 px-3 ">Clear</Button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};
export default PerformanceTableFilters;
