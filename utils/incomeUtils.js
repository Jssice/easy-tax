// utils/incomeUtils.js

export const frequencyOptions = {
  year: { label: "Annually", title: "Annually salary" },
  month: { label: "Monthly", title: "Monthly salary" },
  fortnight: { label: "Fortnightly", title: "Fortnightly salary" },
  week: { label: "Weekly", title: "Weekly salary" },
  day: { label: "Daily", title: "Daily rate" },
  hour: { label: "Hourly", title: "Hourly rate" },
};

export const getTitle = (frequency) => {
  return frequencyOptions[frequency]?.title || "";
};
export function formatNumberToTwoDecimalPlaces(number) {
  if (typeof number !== "number") {
    return number;
  }
  return parseFloat(number.toFixed(2));
}

export const calculateAnnualIncome = (
  income,
  frequency,
  workDays = 0,
  workHours = 0
) => {
  const numericIncome = parseFloat(income);
  const numericWorkDays = parseFloat(workDays);
  const numericWorkHours = parseFloat(workHours);

  switch (frequency) {
    case "year":
      return numericIncome;
    case "month":
      return numericIncome * 12;
    case "fortnight":
      return numericIncome * 26;
    case "week":
      return numericIncome * 52;
    case "day":
      return numericIncome * numericWorkDays;
    case "hour":
      return numericIncome * numericWorkHours;
    default:
      return numericIncome;
  }
};
