import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap";
const FilterOptions = ({ toggled, handleToggle, selectedOption, optionChange, options, name, toggleComponent, topComponent,bottomComponent, width }) => {
  console.log(selectedOption)
  console.log(options)
  return (
    <Dropdown direction="top" className="d-inline" isOpen={toggled} toggle={handleToggle}>
      <DropdownToggle caret={!toggleComponent} className="btn-sm p-0 text-muted px-1 border-white " style={{ backgroundColor: "white", width: 100 }}>
        {/* {toggleComponent ? toggleComponent : selectedOption.slice(0, 13)} */}
        {toggleComponent ? toggleComponent : options.find((item) => item?.value === selectedOption)?.label}
      </DropdownToggle>
      <DropdownMenu className="px-3" style={{ width: width ? width : 250 }}>
        <div className="mb-3">
          {" "}
          <small className="fw-bold ms-4 ">Show for</small>
        </div>
        {topComponent && topComponent}
        {options.map((item) => (
          <FormGroup check className="mb-3" key={item.value}>
            <Input id={name + item.value} name={name} type="radio" value={item.value} onChange={optionChange} defaultChecked={selectedOption === item.value} />
            <Label check className={`${selectedOption === item.value && "gradient-text"}`} for={name + item.value}>
              {item.label}
            </Label>
          </FormGroup>
        ))}
        {bottomComponent && bottomComponent}

        <div className="d-flex justify-0content-between my-4 px-1 ">
          <Button className="btn-sm gradient-btn ms-3 mt-2 px-3">Apply</Button>
          <Button className="btn-sm ms-3 mt-2 px-3">Clear</Button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FilterOptions;
