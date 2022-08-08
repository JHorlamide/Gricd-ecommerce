import products from "./data.json";

const convertCurrency = async () => {
  const response = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=NGN&amount=1");
  return await response.json();
};

export default {
  async getProducts(cb) {
    const value = await convertCurrency();
    
    const productsWithConvertedPrice = products.map((product) => {
      const product_price = product.price.split("$")[1];
      return {
        ...product,
        price: product_price * value.rates.NGN,
      };
    });

    return cb(productsWithConvertedPrice);
  },
};
