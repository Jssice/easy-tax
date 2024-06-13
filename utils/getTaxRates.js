import taxRatesData from "../data/taxRates.json";

const getTaxRates = (year, category) => {
  if (taxRatesData[year] && taxRatesData[year][category]) {
    return taxRatesData[year][category];
  } else {
    throw new Error("Invalid year or tax category");
  }
};

export { getTaxRates };
