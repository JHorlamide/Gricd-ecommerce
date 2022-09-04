import products from "./data.json";

const API_URL = process.env.VUE_APP_API_URL;

export const getProducts = async (cb) => {
  const productsWithConvertedPrice = products.map((product) => {
    const product_price = product.price.split("$")[1];

    return {
      ...product,
      price: product_price,
    };
  });

  return cb(productsWithConvertedPrice);
};

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const uploadProduct = async (data) => {
  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: data,
    header: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status === 201) {
    return response.json();
  }

  return response;
};

export const downloadProductSheet = async() => {
  const response = await fetch(`${API_URL}/download`);
  return response;
}
