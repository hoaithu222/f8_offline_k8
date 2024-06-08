const posts = [
    {
        title: "Tiêu đề bài viết 1",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        image: "https://picsum.photos/200"
    },
    {
        title: "Tiêu đề bài viết 2",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        image: "https://picsum.photos/200"
    },
    {
        title: "Tiêu đề bài viết 3",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
        image: "https://picsum.photos/200"
    }
];

const postsContainer = document.getElementById('posts-container');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </div>
    `;

    postsContainer.appendChild(postElement);
});