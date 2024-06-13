// Function to format currency
const formatCurrency = (amount, currencySymbol = "$") => {
  if (typeof amount !== "number") {
    throw new Error("Amount must be a number");
  }

  const formattedAmount = amount.toFixed(2).toString();
  const [wholeNumberPart, decimalPart] = formattedAmount.split(".");
  const wholeNumberWithCommas = wholeNumberPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const formattedCurrency = `${currencySymbol}${wholeNumberWithCommas}.${decimalPart}`;

  return formattedCurrency;
};

export { formatCurrency };
