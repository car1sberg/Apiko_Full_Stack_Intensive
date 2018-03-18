
const POSTS = `https://jsonplaceholder.typicode.com/posts/`;
const AUTHORS = `https://jsonplaceholder.typicode.com/users/`;

const postsDOM = document.getElementById('posts');
const commentsDOM = document.getElementById('comments');

const home = () => {
    commentsDOM.innerHTML = '';
    fetchUrl(POSTS, postsDOM, generatePosts);
};
window.onload = () => home();

// Geting data
function fetchUrl(url, placeInDom, template) {
    fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            return Promise.reject(error());
        })
        .then(json => {
            if (Array.isArray(json)) {
                placeInDom.innerHTML = json.map(item => template(item)).join('');
            }
            else {
                placeInDom.innerHTML =  template(json);
            }
        })
        .catch(error => placeInDom.innerHTML = error);
}

// Listener for the URL
window.addEventListener('hashchange', () => {
    if (location.hash.includes('postId')) {
        let id = location.hash.match(/\d+/g).toString();
        fetchUrl(`${POSTS}${id}`, postsDOM, currentPost);
        fetchUrl(`${POSTS}${id}/comments`, commentsDOM, comments);
    }
    else if (location.hash.includes('author')) {
        let id = location.hash.match(/\d+/g).toString();
        fetchUrl(`${AUTHORS}${id}`, postsDOM, authorInfo)
        commentsDOM.innerHTML = '';
    }
    else if (location.hash === '') {
        fetchUrl(POSTS, postsDOM, generatePosts);
    }
});