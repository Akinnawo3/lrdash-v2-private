import { Input } from "reactstrap";

export const CustomDateComponent = ({ isCustom, startDate, changeStartDate, endDate, changeEndDate }) =>
  isCustom ? (
    <div className="d-flex align-items-center mx-2">
      <div>
        <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} />
      </div>
      <div className="mx-1">to</div>
      <div>
        <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} />
      </div>
    </div>
  ) : null;
