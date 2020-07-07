import axios from 'axios'

const getBasePath = () => {
  return 'http://localhost:5000'
}
export const getPosts = async () => {
  const { data: posts } = await axios.get(`${getBasePath()}/posts`)
  return posts
}

export const createPost = async post => {
  const { data: newPost } = await axios.post(`${getBasePath()}/posts`, post)
  return newPost
}

export const upVotePost = async postId => {
  const { data: updatedPost } = await axios.post(`${getBasePath()}/posts/${postId}/votes`)
  return updatedPost
}

export const downVotePost = async postId => {
  const { data: updatedPost } = await axios.delete(`${getBasePath()}/posts/${postId}/votes`)
  return updatedPost
}
