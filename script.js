var authForm = document.forms.auth;
var signup = document.getElementById("signup");
var tg = window.Telegram.WebApp;
function sendDataToBot(event) {
    var formData =  new FormData(authForm);
    let name = formData.get("name");
    let phone = formData.get("phone");
    let error = document.getElementById("error");
    if (name.length < 5)
    {
        error.innerHTML = "В імені має бути як мінімум 5 символів!"
        return ;
    }
    if (phone.length != 9) {
        error.innerHTML = "Номер телефону має складатися з 9 цифр!"
        return ;
    }
    let data = {
        name: name,
        phone: "+380" + phone,
    }
    console.log(data);
    tg.sendData(JSON.stringify(data));
    tg.close();
    event.preventDefault();
}
signup.addEventListener("click", sendDataToBot);
