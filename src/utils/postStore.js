import { defineStore } from "pinia";
import WordPressAPI from '@/api/data.js';
import axios from "axios";
import { ref } from "vue";
export const usePostStore = defineStore('post-card', {
    
    state: () => ({
        posts: [],
        postCardID: ref([])
    }),
    getters: {
        getPosts: (state) => state.posts,
        getPostCard: (state) => state.postCardID
    },
    actions: {
        async getPostByCardID(ID) {
            const response = await WordPressAPI.fetchPostByCategoryId(ID)
            this.postCardID[ID] = response
            console.log(this.postCardID)
        },
        async getAllPosts() {
            
            
        }
    }
})