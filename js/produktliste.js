fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showproducts(data));

function showproducts(products) {
  //looper og kalder showproduct
  products.forEach(showproduct);
}

function showproduct(product) {
  //fang template
  const template = document.querySelector("#product_template").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".product_name").textContent = product.productdisplayname;

  copy.querySelector(".price").textContent = `${product.price} DKK `;
  copy.querySelector(".product_brand").textContent = product.brandname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldout");
  }

  /*   if (product.sale) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sale");
  } */

  //produktet er til salg
  /* if (product.discount) {
    copy.querySelector("article").classlist.add("sale");
  } */

  //appende
  document.querySelector("main").appendChild(copy);
}
