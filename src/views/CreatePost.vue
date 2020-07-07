<template>
    <div class="create-post">
        <h1>Create an blog</h1>
        <v-form @submit="_submitPost">
            <v-col cols="12" sm="6" md="10" @change="_setMainTitle">
                <v-text-field solo label="Main Title"></v-text-field>
            </v-col>
            <v-col cols="12" md="10">
                <v-textarea solo name="" label="Post Description" @change="_setForm"></v-textarea>
            </v-col>

            <br>
            <v-btn type="submit" color="success">Submit</v-btn>
        </v-form>

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
            ...mapMutations(['setMainTitle']),
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
            },
            _setMainTitle(value) {
                this.setMainTitle({
                    key: 'mainTitle',
                    value
                })
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
