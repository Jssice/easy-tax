import { getTaxRates } from "./getTaxRates";

const calculateTax = (year, category, income) => {
  const taxRates = getTaxRates(year, category);
  let tax = 0;

  for (let i = 0; i < taxRates.length; i++) {
    const { threshold, rate, baseTax } = taxRates[i];

    if (income > threshold) {
      tax = baseTax + (income - threshold) * rate;

      break;
    }
  }

  return tax;
};

export default calculateTax;
