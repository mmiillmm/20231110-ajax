let btn = document.getElementById("fetch-posts");
btn.onclick = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    sendRequest(url, "GET", null, function(posts){
        document.getElementById("post-list-container").innerHTML = postList;
    });
}

function sendRequest(url, method, body, callback){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){
                callback(JSON.parse(xhr.responseText))
            }
        };
        xhr.open(method, url);
        xhr.send();
}