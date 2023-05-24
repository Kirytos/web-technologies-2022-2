import { Post } from "./src/components/post.js"

const renderPost = post => `
    <div class='post_data'>
        <p class='post_user-id'>User ID: ${post.userId}</p>
        <p class='post_id'>Post ID: ${post.id}</p>
    </div>
    <h3 class='post_title'>${post.title}</h3>
    <p class='post_content'>${post.body}</p>
`;

const renderComment = comment => `
    <div class='comment'>
        <div class='comment_profile'>
            <img class='comment_image' src='/src/assets/images/profile-image.png' alt='profile' />
            <p class='comment_email'>${comment.email}</p>
        </div>
        <p class='comment_body'>${comment.body}</p>
    </div>
`;

const getPost = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await response.json();
}

const getComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return await response.json();
}

const init = async () => {
    const post = document.getElementById('post');
    const comments = document.getElementById('comments');

    new Post(
        {post, comments},
        {renderPost, getPost, renderComment, getComments}
    ).init();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}