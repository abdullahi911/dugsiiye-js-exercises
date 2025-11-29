const titleInput = document.querySelector(".post-title");
const imageInput = document.querySelector(".image-url");
const postInput = document.querySelector(".write-post");
const addBtn = document.querySelector("button");
const postPlace = document.querySelector(".post-place");

document.addEventListener("DOMContentLoaded", loadPosts);

addBtn.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const image = imageInput.value.trim();
    const content = postInput.value.trim();

    if (title === "" || content === "") {
        alert("Title and post content are required!");
        return;
    }

    const post = {
        id: Date.now(),
        title: title,
        image: image,
        content: content
    };

    saveToLocalStorage(post);
    addPostToDOM(post);

    titleInput.value = "";
    imageInput.value = "";
    postInput.value = "";
});

function addPostToDOM(post) {
    const div = document.createElement("div");
    div.classList.add("single-post");

    div.innerHTML = `
        <h2><strong>${post.title}</strong></h2>
        ${post.image ? `<img src="${post.image}" class="post-img">` : ""}
        <p>${post.content}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <hr>
    `;

    div.querySelector(".edit-btn").addEventListener("click", () => {
        editPost(post.id);
    });

    div.querySelector(".delete-btn").addEventListener("click", () => {
        deletePost(post.id);
        div.remove();
    });

    postPlace.appendChild(div);
}

function saveToLocalStorage(post) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach(post => addPostToDOM(post));
}

function editPost(id) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    const target = posts.find(p => p.id === id);

    if (!target) return;

    const newTitle = prompt("Enter new title:", target.title);
    if (newTitle === null) return;

    const newImage = prompt("Enter new image URL (optional):", target.image);
    if (newImage === null) return;

    const newContent = prompt("Enter new post content:", target.content);
    if (newContent === null) return;

    target.title = newTitle.trim();
    target.image = newImage.trim();
    target.content = newContent.trim();

    localStorage.setItem("posts", JSON.stringify(posts));

    location.reload();
}

function deletePost(id) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(posts));
}
