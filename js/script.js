let form = document.getElementById("userForm");
let usersArray = [];
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Останавливаем отправку формы на сервер

    // Получаем данные из элементов формы
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("fullName").value;
    let country = document.getElementById("country").value;
    let birthdate = document.getElementById("birthdate").value;

    // Создаем объект для хранения данных
    let userData = {
        email: email,
        password: password,
        fullName: fullName,
        country: country,
        birthdate: birthdate,
    };

    usersArray.push(userData);
    updateStorage();

    let queryParams = `?email=${encodeURIComponent(email)}`;

    window.location.href = "profile.html" + queryParams;
});

function updateStorage(){

    localStorage.users = JSON.stringify(usersArray);
}
