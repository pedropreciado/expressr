export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: '/api/posts'
  })
}

export const fetchPost = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  })
}

export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: { post }
  })
}

export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  })
}

export const deletePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
}

export const likePost = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/likes`,
    data: { id }
  })
}

export const unlikePost = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`
  })
}
