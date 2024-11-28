// 1. ul#categories içindeki kategorilerin sayısını hesapla ve konsola yazdır
const categoriesList = document.querySelectorAll("#categories .item");
console.log(categoriesList);
console.log(`Toplam kategori sayısı: ${categoriesList.length}`);

// 2. Her kategori için başlık metnini ve öğe sayısını bul ve konsola yazdır
categoriesList.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryItems = item.querySelectorAll("ul li").length;
    console.log(`Kategori: ${categoryTitle}, Öğe sayısı: ${categoryItems}`);
});
