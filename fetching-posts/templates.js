
function currentPost(post) {
    return `<article class="headings">
                <h4>Post</h4>
                <p>${post.body}</p>
                <p><a href="#/authorId=${post.userId}">Author</a></p>
                <h4>Comments</h4>
            </article>`;
}

function comments(comments) {
    return `<li class="list-group-item">
                <span class="email">${comments.email}</span>
                <p>${comments.body}<p>
            </li>`
}

function generatePosts(post) {
    return `<article class="title">
                <h5>
                    <span>${post.id}.</span> <a href="#/postId=${post.id}">${post.title}</a>
                </h5>
                <p>${post.body}</p>
            </article>`;
}

function authorInfo(author) {
    return `<div class="my-3 p-3 bg-white rounded box-shadow authorsInfo">
                <h5 class="border-bottom border-gray pb-2 mb-0">${author.name}</h5>
                <div class="text-muted pt-3">
                    <p class="pb-3 mb-0 medium lh-125 border-bottom border-gray">
                        ${author.phone}
                    </p>
                </div>
                <div class="text-muted pt-3">
                    <p class="pb-3 mb-0 medium lh-125 border-bottom border-gray">
                        ${author.email}
                    </p>
                </div>
                <div class="text-muted pt-3">
                    <p class="pb-3 mb-0 medium lh-125 border-bottom border-gray">
                        ${author.website}
                    </p>
                </div>
                <div class="text-muted pt-3">
                    <p class="pb-3 mb-0 medium lh-125 border-bottom border-gray">
                    ${author.address.suite} ${author.address.street}, ${author.address.city}
                    </p>
                </div>
            </div>`;
}

function error() {
    return `<div class="error">
                <div class="errorNumbers">404
                    <p>Page Not Found</p>
                </div>
            </div>`;
}