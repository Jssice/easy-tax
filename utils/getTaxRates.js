import taxRatesData from "../data/taxRates.json";

const getTaxRates = (year, category) => {
  const rates = taxRatesData?.[year]?.[category];

  if (rates !== undefined) {
    return rates;
  } else {
    throw new Error(`Invalid year (${year}) or tax category (${category})`);
  }
};

export { getTaxRates };
