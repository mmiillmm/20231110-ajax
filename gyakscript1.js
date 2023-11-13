let btn = document.getElementById("fetch-posts");
btn.onclick = () => {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            let posts = JSON.parse(xhr.responseText);
            console.log(posts);
            let postList = "";
            for (const post of posts) {
                /*postList += "<h1>" + post.title + "</h1><p>" + post.body + "</p>"*/
                postList += `<h1>${post.title}</h1> <p>${post.body}</p>
                `;

            }
            document.getElementById("post-list-container").innerHTML = postList;

        }
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
}
