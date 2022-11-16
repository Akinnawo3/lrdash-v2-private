import { Input } from "reactstrap";

export const CustomDateComponent = ({ isCustom, startDate, setStartDate, endDate, setEndDate }) =>
  isCustom ? (
    <div className="d-flex align-items-center mx-2">
      <div>
        <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="mx-1">to</div>
      <div>
        <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
    </div>
  ) : null;
