import { errorHandler } from "../errorHandler.js";

export class Post {
    #postEl = null;
    #commentsEl = null;
    #renderPost = null
    #getPost = null
    #renderComment = null
    #getComments = null
    #postId = null

    constructor(elements, options) {
        const {post, comments} = elements;
        this.#postEl = post;
        this.#commentsEl = comments;
        const {renderPost, getPost, renderComment, getComments} = options;
        this.#renderPost = renderPost;
        this.#getPost = getPost;
        this.#renderComment = renderComment;
        this.#getComments = getComments;
    }

    async init () {
        const url = new URL(window.location.href);
        const postId = +url.searchParams.get('id');
        this.setPost(postId)
        await this.loadPost()
        await this.loadComments();
    }

    setPost(postId) {
        this.#postId = postId
    }

    async loadPost () {
        try {
            const post = await this.#getPost(this.#postId);
            this.renderPost(post);
        } catch (error) {
            errorHandler(error);
        }
    }

    async loadComments () {
        try {
            const comments = await this.#getComments(this.#postId);
            this.renderComments(comments);
        } catch (error) {
            errorHandler(error);
        }
    }
    
    renderPost(post) {
        this.#postEl.innerHTML = this.#renderPost(post);
    }
    
    renderComments(comments) {
        this.#commentsEl.innerHTML += comments.map(this.#renderComment).join('')
    }
}