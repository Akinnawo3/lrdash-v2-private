import { NairaFailed, NairaSuccess, NairaUndecided } from "../../../../assets/svgs/financeSvgs";

export const statusesOptions = [
  { value: "all", label: "All Statuses" },
  { value: "success", label: "Successful" },
  { value: "undecided", label: "Undecided" },
  { value: "failed", label: "Failed" },
];
export const dateTypeOption = [
  { value: "last_7_days", label: "Last 7 days" },
  { value: "this_month", label: "This month" },
  { value: "last_3_months", label: "Last 3 months" },
  { value: "all_time", label: "All time" },
];

export const dateTypeOptions = [
  { label: "All time", value: "all_time" },
  { label: "Today only", value: "today" },
  { label: "Last 7 days", value: "last 7 days" },
  { label: "This month", value: "this month" },
  { label: "Last 3 months", value: "last 3 months" },
  { label: "Custom date range", value: "custom" },
];
export const timeOptions = [
  { label: "Morning (12am - 12pm)", value: "morning" },
  { label: "Afternoon (12pm - 5pm)", value: "afternoon" },
  { label: "Evening (5pm - 12am)", value: "evening" },
  { label: "Custom time range", value: "custom" },
];

export const tripsTypes = ["Online trips", "Offline trips"];

export const tripsTypesOptions = [
  { label: "All trips", value: "all" },
  { label: "Online trips", value: "online" },
  { label: "Drops", value: "drops" },
];

export const tripsItems = [
  {
    title: "Total",
    figure: "3,123,456,789",
    icon: NairaSuccess,
  },
  {
    title: "Successful",
    figure: "3,123,456,789",
    icon: NairaSuccess,
  },
  {
    title: "Undecided",
    figure: "3,123,456,789",
    icon: NairaUndecided,
  },
  {
    title: "Failed",
    figure: "3,123,456,789",
    icon: NairaFailed,
  },
];
