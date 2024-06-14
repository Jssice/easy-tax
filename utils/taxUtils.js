import { getTaxRates } from "./getTaxRates";
import { getMedicareLevySurchargeRate } from "./getMedicareLevySurchargeRate";

export const calculateTax = (year, category, income) => {
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

export const computeTaxValues = (
  selectedYear,
  selectedCategory,
  annualIncome,
  hasPrivateHospitalCover,
  hasMedicareLevyExemption,
  medicareLevyExemptionType
) => {
  const incomeTax = calculateTax(selectedYear, selectedCategory, annualIncome);

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

  return {
    incomeTax,
    medicare,
    totalTax,
    netPay,
    medicareLevySurcharge,
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
