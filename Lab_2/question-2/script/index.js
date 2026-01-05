let user = {
    "Username": "",
    "Age": 0,
    "Email": "",

    "password": "",

}

let form = document.getElementById("form");

let username = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let password = document.getElementById("password");


function store(user) {
    let users = JSON.parse(localStorage.getItem("Users"));
    if (users) {
        users.push(user);

    } else {
        users = [user];
    }

    localStorage.setItem("Users", JSON.stringify(users));
};
function addUser() {
    if (password.value !== "" && username.value !== "") {
        user.Username = username.value;
        user.Age = age.value;
        user.Email = email.value;
        user.password = password.value;
        store(user);
    }


}

form.onsubmit = (e) => {
    e.preventDefault();

    location.replace("./users.html");
    addUser();
    form.reset();
}