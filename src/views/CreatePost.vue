<template>
    <div class="create-post">
        <h1>Create an blog</h1>
        <form @submit="_submitPost">

            <v-col cols="12" md="6">
                <v-textarea solo name="" label="Post Description" @change="_setForm"></v-textarea>
            </v-col>

            <br>
            <v-btn type="submit" color="success">Submit</v-btn>
        </form>

    </div>
</template>

<script>
    import {
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        name: "CreatePost",
        methods: {
            ...mapMutations(['setForm']),
            ...mapActions(['createPost']),
            _setForm(value) {
                this.setForm({
                    key: 'post',
                    value
                })
            },
            _submitPost(event) {
                event.preventDefault()
                this.createPost()
            }
        }
    }

</script>

<style scoped>
    textarea {
        width: 300px;
        height: 300px;
        font-size: 24px;
        border: 5px solid black;
    }

</style>
