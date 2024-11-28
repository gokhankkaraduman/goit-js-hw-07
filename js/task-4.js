const form = document.querySelector(".login-form");

function formHandler (event){
    //Formun default davranışını engelle
    event.preventDefault();

    // Formun elemanlarına eriş
    const email = form.elements.email.value; // Email alanının değerini al
    const password = form.elements.password.value; // Password alanının değerini al

    // Değerleri konsola yazdır
    console.log("Email:", email);
    console.log("Password:", password);
    console.dir(form);
    if(!email || !password ){
        // Test: Alerti çağır
        showAlert("All form fields must be filled in!");
    };
    // Alan değerlerini bir nesneye topla
    const formData = {
    email: email,
    password: password,
    };

  // Verileri konsola yazdır ve formu temizle
    console.log(formData);
    //formu sıfırla
    form.reset()
};

form.addEventListener("submit", formHandler);


// Alert kutusunu seç
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const closeAlertButton = document.getElementById('close-alert');

// Alert gösterme fonksiyonu
function showAlert(message) {
    alertMessage.textContent = message; // Mesajı ayarla
    customAlert.classList.remove('hidden'); // Alerti görünür yap
    customAlert.style.display = 'block';
}

// Alerti kapatma
closeAlertButton.addEventListener('click', () => {
    customAlert.classList.add('hidden'); // Alerti gizle
    customAlert.style.display = 'none';
});


