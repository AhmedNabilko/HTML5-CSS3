let table = document.getElementById("users");
let user = {
    "Username": "",
    "Age": 0,
    "Email": "",

    "password": "",

}
function deleteUser(user) {
    let users = JSON.parse(localStorage.getItem("Users"));
    users = users.filter(item => item.Username !== user.Username);
    localStorage.setItem("Users", JSON.stringify(users));
}

function createRow(user) {
    let tr = document.createElement("tr");

    let username = document.createElement("td");
    let Age = document.createElement("td");
    let Email = document.createElement("td");
    let td = document.createElement("td");
    let btn = document.createElement("button");

    username.innerText = user.Username;
    Age.innerText = user.Age;
    Email.innerText = user.Email;
    btn.innerText = "Delete";
    btn.onclick = () => {
        deleteUser(user);
        tr.remove();
    }

    td.append(btn);


    tr.append(username);
    tr.append(Age);
    tr.append(Email);
    tr.append(td);
    table.append(tr);
}
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("Users"));
    for (let i = 0; i < users.length; i++) {
        createRow(users[i]);
    }
}

displayUsers();