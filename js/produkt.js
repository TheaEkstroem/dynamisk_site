const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showproduct(data));

function showproduct(product) {
  // indhold
  document.querySelector(".product_name").textContent =
    product.productdisplayname;
  document.querySelector(".price").textContent = `${product.price} DKK `;

  document.querySelector(".product_brand").textContent = product.brandname;
  document.querySelector(
    ".product_img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(".product_img").alt = product.productdisplayname;

  /*   document.querySelector(".description p").textContent = product.description;
  document.querySelector(".details p").textContent = product.materialcaredesc;
 */
}
