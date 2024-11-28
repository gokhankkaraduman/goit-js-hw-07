// Fotoğraf verilerini tutacağımız boş bir dizi
const images = [];

// Rastgele bir fotoğraf URL'si oluşturuyor ve 'alt' bilgisi ile birlikte images dizisine ekliyoruz
function getRandomImages(count) {
  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const imageUrl = `https://picsum.photos/id/${randomId}/600/400`; // 600x400 boyutlarında
    const altText = `Random image ${randomId}`; // Alt metni oluştur
    images.push({ imageUrl, alt: altText });
  }
}

// Sayfa yüklendiğinde 6 fotoğrafı yükle
window.onload = function () {
  getRandomImages(6); // 6 fotoğraf ekle
  displayGallery(); // Galeriyi görüntüle
};

// ul.gallery öğesini seç
const gallery = document.querySelector(".gallery");

// images dizisinden gelen her resim için <li> ve <img> oluştur
function displayGallery() {
  const galleryItems = images
    .map(({ imageUrl, alt }) => {
      return `
                <li class="gallery-item">
                    <img src="${imageUrl}" alt="${alt}" class="gallery-image">
                </li>`;
    })
    .join(""); // Dizi elemanlarını birleştir

  // Galeriyi document'e ekle
  gallery.insertAdjacentHTML("beforeend", galleryItems);

  // Fotoğraflara tıklama dinleyicisi ekle
  const galleryImages = document.querySelectorAll(".gallery-image");
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      // Eğer başka bir fotoğraf büyütülmüşse, önce onu küçült
      galleryImages.forEach((img) => {
        if (img !== image) {
          img.classList.remove("zoomed");
        }
      });

      // Tıklanan fotoğrafı büyüt
      image.classList.toggle("zoomed");
    });
  });
}
