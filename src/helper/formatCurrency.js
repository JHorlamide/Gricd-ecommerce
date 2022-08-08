import numeral from "numeral";

export const formatCurrency = (currency) => {
  return numeral(Number(currency)).format("0,0.00");
};
