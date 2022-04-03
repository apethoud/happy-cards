import _ from "lodash";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthNumberByMonthName = (monthName) => {
  return _.findIndex(monthList, (month) => month === monthName) + 1;
};
