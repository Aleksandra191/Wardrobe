var objPeople = [
    {
        username: "Dominika",
        password: "abcd"
    },
    {
        username: "Aleksandra",
        password: "haslo"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username 
            && password == objPeople[i].password){
                alert(username + " jest zalogowany!");
                console.log(username + " jest zalogowany!");
                return;
        }
    }
    alert("Nieprawidłowa nazwa użytkownika lub hasło");
    console.log("Nieprawidłowa nazwa użytkownika lub hasło");
}