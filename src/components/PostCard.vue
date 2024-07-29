<template>
	<div v-if="finishPostData[props.item]">
		<div @click="" v-for="data in finishPostData[props.item]" class="relative flex flex-col items-start p-1 mx-3 my-3 bg-gray-300 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
					<button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-900 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
						</svg>
					</button>
					<h2 class="flex items-center h-6 px-1 text-xl font-semibold  text-gray-900  rounded-full">{{ data.title.rendered }}</h2>
					<h4 class="mt-2 text-sm font-medium" v-html="data.content.rendered"></h4>
					<div class="flex justify-end w-full mt-3 text-xs font-medium text-gray-400">
						<div class="relative flex items-center">
							<svg class="relative w-4 h-4 text-indigo-800 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
							</svg>
							<span class="ml-1 leading-none">{{ data.date }}</span>
						</div>
					</div>
		</div>
		
	</div>
	<div v-else class="flex items-center justify-center w-full h-full">
		<h2 class="text-gray-700 text-4xl">NO POST</h2>
	</div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from '../utils/postStore';
const finishPostData = ref([])
const showsP = ref([])
const props = defineProps({
	item: Number
})
const post = usePostStore()
const dataPost = post.getPostByCardID(props.item)
function launch() {
	const data = post.getPostCard
	finishPostData.value = data
	console.log(finishPostData[props.item])
	if (finishPostData[props.item] != 0) {
		showsP.value[props.item] = true
			console.log('true',data)
	} else {
		showsP.value[props.item] = false
			console.log('false',data[props.item])
	}
}
onMounted(launch)
</script>