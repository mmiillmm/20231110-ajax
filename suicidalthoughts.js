let btn = document.getElementById("login");
btn.onclick = () => {
    let url = "https://reqres.in/api/login";
    let usersURL =  "https://reqres.in/api/users"
    let body = JSON.stringify(
        {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        });
    sendRequest(url, 'POST', body, function(token){
        sendRequest(usersURL, 'GET', null, function(users){
            console.log(users)
            let postList = document.getElementById("post-list-contanier");
            let list = ""
            if (Array.isArray(users.data)) {
                for (const user of users.data){
                    list += `
                    <p>${user.email}</p>`;
                }

                postList.innerHTML = list;
            }

            else{
                console.log("4")
            }
        })
    })
}

function sendRequest(){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){
                callback(JSON.parse(xhr.responseText))
            }
        };
        xhr.open(method, url);
        xhr.sendRequestHeader('content-type', 'application/json')
        xhr.send();
}