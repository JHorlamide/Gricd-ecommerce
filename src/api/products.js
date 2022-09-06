import products from "./data.json";

// const API_URL = process.env.VUE_APP_API_URL;
const API_URL_DEV = process.env.VUE_APP_API_URL_DEV;

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
  const response = await fetch(API_URL_DEV);
  return response.json();
};

export const uploadProduct = async (data) => {
  const response = await fetch(`${API_URL_DEV}/upload`, {
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

export const downloadProductSheet = () => {
  fetch(`${API_URL_DEV}/download`)
    .then((res) => {
      return res.blob();
    })
    .then((data) => {
      let docUrl = document.createElement("a");
      docUrl.href = window.URL.createObjectURL(data);
      docUrl.download = "filename.xlsx";
      document.body.appendChild(docUrl);
      docUrl.click();
    });
};
