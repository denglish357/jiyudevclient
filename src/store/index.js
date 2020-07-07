import Vue from 'vue'
import Vuex from 'vuex'
import * as postService from '../services/posts'

import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
    },
    posts: []
  },
  mutations: {
    setForm (state, { key, value }) {
      state.form[key] = value
    },
    setMainTitle(state, {key, value}){
     state.form[key] = value
    },
    setPosts (state, posts) {
      state.posts = posts
    },

    setPost (state, updatedPost) {
      Object.assign(
        state.posts.find(post => post._id === updatedPost._id, updatedPost))
    }

  },
  actions: {
    async   createPost (context) {
      await postService.createPost(context.state.form)
      router.push('/')
    },
    async getPosts (context) {
      const posts = await postService.getPosts()
      context.commit('setPosts', posts)
    },
    async upVoteIdea (context, post) {
      const updatedPost = await postService.upVotePost(post._id)
      context.commit('setPost', updatedPost)
    },
    async downVotePost (context, post) {
      const updatedPost = await postService.downVotePost(post._id)
      context.commit('setPost', updatedPost)
    }
  },
  modules: {
  }
})
