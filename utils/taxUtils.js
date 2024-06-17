import { getTaxRates } from "./getTaxRates";
import { getMedicareLevySurchargeRate } from "./getMedicareLevySurchargeRate";

export const calculateTax = (year, category, income) => {
  const taxRates = getTaxRates(year, category);
  let tax = 0;
  let marginalTaxRate = 0;

  for (let i = 0; i < taxRates.length; i++) {
    const { threshold, rate, baseTax } = taxRates[i];

    if (income > threshold) {
      tax = baseTax + (income - threshold) * rate;
      marginalTaxRate = rate;
      break;
    }
  }

  return { tax, marginalTaxRate };
};

export const computeTaxValues = (
  selectedYear,
  selectedCategory,
  annualIncome,
  hasPrivateHospitalCover,
  hasMedicareLevyExemption,
  medicareLevyExemptionType
) => {
  const { tax: incomeTax, marginalTaxRate } = calculateTax(
    selectedYear,
    selectedCategory,
    annualIncome
  );

  const medicareLevySurchargeRate = getMedicareLevySurchargeRate(
    selectedYear,
    annualIncome
  );

  const medicareLevySurcharge = hasPrivateHospitalCover
    ? 0
    : annualIncome * medicareLevySurchargeRate;

  const medicareLevy =
    selectedCategory !== "resident" ? 0 : annualIncome * 0.02;
  const medicare = hasMedicareLevyExemption
    ? medicareLevyExemptionType * medicareLevy
    : medicareLevy;
  const totalTax = incomeTax + medicare + medicareLevySurcharge;
  const netPay = annualIncome - totalTax;
  const averageTaxRate = parseFloat(
    ((totalTax / annualIncome) * 100).toFixed(1)
  );

  return {
    incomeTax,
    medicare,
    totalTax,
    netPay,
    medicareLevySurcharge,
    marginalTaxRate,
    averageTaxRate,
  };
};

export const computeSuperValues = (
  annualIncome,
  superRate,
  superGuaranteeRate
) => {
  const superGuarantee = (annualIncome * superGuaranteeRate) / 100;
  const reportableContributions =
    (annualIncome * (superRate - superGuaranteeRate)) / 100;

  return {
    superGuarantee,
    reportableContributions,
  };
};
