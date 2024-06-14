import medicareLevySurchargeRates from "../data/medicareLevySurchargeRates.json";

const getMedicareLevySurchargeRate = (year, income) => {
  const rates = medicareLevySurchargeRates[year];
  if (!rates) {
    throw new Error(
      `No Medicare levy surcharge rates found for the year ${year}`
    );
  }
  // Sort rates in descending order by threshold
  const sortedRates = rates.sort((a, b) => b.threshold - a.threshold);

  // Find the first rate where the income is greater than the threshold
  const applicableRate = sortedRates.find((rate) => income > rate.threshold);

  // If no applicable rate is found, return the lowest rate
  return applicableRate ? applicableRate.rate : rates[rates.length - 1].rate;
};

export { getMedicareLevySurchargeRate };
