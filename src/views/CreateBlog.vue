<template>
  <div class="create-blog">
    <h1>Create an blog</h1>
    <form @submit="_submitBlog">

      <v-col cols="12" md="6">
        <v-textarea
          solo
          name=""
          label="Blog Description"
 @change="_setForm"
        ></v-textarea>
      </v-col>

      <br>
    <v-btn type="submit" color="success">Submit</v-btn>
    </form>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: "CreateBlog",
  methods: {
    ...mapMutations(['setForm']),
    ...mapActions(['createBlog']),
    _setForm (value) {
      this.setForm({ key: 'blog', value })
    },
    _submitBlog (event) {
      event.preventDefault()
      this.createBlog()
    }
  }
}
</script>

<style scoped>
textarea {
  width: 300px;
  height: 300px;
  font-size: 24px;
}
</style>
