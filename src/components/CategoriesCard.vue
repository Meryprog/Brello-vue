<template>
    <div v-if="categories.length != 0" v-for="category in categories" :key="category.id" class=" flex flex-col flex-shrink-0 bg-cyan-400 w-72 max-h-[500px] rounded" draggable="true">
			<div class="bg-white rounded flex items-center flex-shrink-0 h-10 px-2">
				<span class="block text-sm font-semibold">{{ category.name }}</span>
				<span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span>
				<button @click=" createPostData[category.id] = {}; showPostForm[category.id] = !showPostForm[category.id]" title="Add Post" class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
					</svg>
				</button>
				<button @click="deleteCardAction(category.id)" title="Delete Card" class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-red-500 hover:text-white-100">
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.10002 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H4.06055L4.88474 20.1871C4.98356 21.7682 6.29471 23 7.8789 23H16.1211C17.7053 23 19.0164 21.7682 19.1153 20.1871L19.9395 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.0073C19.0018 4.99995 18.9963 4.99995 18.9908 5H16.9C16.4367 2.71776 14.419 1 12 1C9.58104 1 7.56329 2.71776 7.10002 5ZM9.17071 5H14.8293C14.4175 3.83481 13.3062 3 12 3C10.6938 3 9.58254 3.83481 9.17071 5ZM17.9355 7H6.06445L6.88085 20.0624C6.91379 20.5894 7.35084 21 7.8789 21H16.1211C16.6492 21 17.0862 20.5894 17.1192 20.0624L17.9355 7ZM14.279 10.0097C14.83 10.0483 15.2454 10.5261 15.2068 11.0771L14.7883 17.0624C14.7498 17.6134 14.2719 18.0288 13.721 17.9903C13.17 17.9517 12.7546 17.4739 12.7932 16.9229L13.2117 10.9376C13.2502 10.3866 13.7281 9.97122 14.279 10.0097ZM9.721 10.0098C10.2719 9.97125 10.7498 10.3866 10.7883 10.9376L11.2069 16.923C11.2454 17.4739 10.83 17.9518 10.2791 17.9903C9.72811 18.0288 9.25026 17.6134 9.21173 17.0625L8.79319 11.0771C8.75467 10.5262 9.17006 10.0483 9.721 10.0098Z" fill="#ff0000"></path> </g></svg>
				</button>
				<button @click="Update(category.id)"  title="Update Card" class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-green-500 hover:text-green-100">
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1739 3.5968C13.8662 3.2047 14.686 3.10369 15.4528 3.31598C15.7928 3.41011 16.0833 3.57409 16.3571 3.7593C16.6172 3.9352 16.9155 4.16808 17.2613 4.43799L17.3117 4.47737C17.6575 4.74728 17.9559 4.98016 18.1897 5.18977C18.4358 5.41046 18.6654 5.65248 18.8393 5.95945C19.2314 6.65177 19.3324 7.47151 19.1201 8.23831C19.026 8.5783 18.862 8.86883 18.6768 9.14267C18.5009 9.40276 18.268 9.70112 17.998 10.0469L10.8953 19.1462C10.8773 19.1692 10.8596 19.1919 10.8421 19.2144C10.5087 19.6419 10.2566 19.9651 9.9445 20.2306C9.68036 20.4553 9.38811 20.6447 9.07512 20.794C8.70535 20.9704 8.30733 21.0685 7.78084 21.1983C7.75324 21.2051 7.72528 21.212 7.69696 21.219L5.57214 21.7435C5.42499 21.7799 5.25702 21.8215 5.10885 21.8442C4.94367 21.8696 4.68789 21.8926 4.40539 21.8022C4.06579 21.6934 3.77603 21.4672 3.58809 21.1642C3.43175 20.9121 3.39197 20.6584 3.3765 20.492C3.36262 20.3427 3.36213 20.1697 3.3617 20.0181C3.36167 20.0087 3.36165 19.9994 3.36162 19.9902L3.35475 17.8295C3.35465 17.8003 3.35455 17.7715 3.35445 17.7431C3.3525 17.2009 3.35103 16.7909 3.4324 16.3894C3.50128 16.0495 3.61406 15.72 3.76791 15.4093C3.94967 15.0421 4.20204 14.7191 4.53586 14.2918C4.55336 14.2694 4.57109 14.2467 4.58905 14.2237L11.6918 5.12435C11.9617 4.77856 12.1946 4.48019 12.4042 4.2464C12.6249 4.00025 12.8669 3.77065 13.1739 3.5968ZM14.9191 5.24347C14.6635 5.17271 14.3903 5.20638 14.1595 5.33708C14.1203 5.35928 14.0459 5.41135 13.8934 5.5815C13.7348 5.75836 13.5438 6.00211 13.2487 6.38018L16.4018 8.84145C16.697 8.46338 16.887 8.21896 17.0201 8.02221C17.1482 7.83291 17.1806 7.74808 17.1926 7.70467C17.2634 7.44907 17.2297 7.17583 17.099 6.94505C17.0768 6.90586 17.0247 6.83145 16.8546 6.6789C16.6777 6.52033 16.434 6.32938 16.0559 6.03426C15.6778 5.73914 15.4334 5.54904 15.2367 5.41597C15.0474 5.28794 14.9625 5.25549 14.9191 5.24347ZM15.1712 10.418L12.0181 7.95674L6.16561 15.4543C5.75585 15.9792 5.6403 16.135 5.56031 16.2966C5.48339 16.452 5.42699 16.6167 5.39256 16.7866C5.35675 16.9633 5.35262 17.1572 5.35474 17.8231L5.36082 19.7357L7.2176 19.2773C7.86411 19.1177 8.05119 19.0666 8.21391 18.9889C8.37041 18.9143 8.51653 18.8196 8.64861 18.7072C8.78593 18.5904 8.90897 18.4405 9.31872 17.9156L15.1712 10.418ZM12 21C12 20.4477 12.4477 20 13 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H13C12.4477 22 12 21.5523 12 21Z" fill="#00ff40"></path> </g></svg>
				</button>
			</div>
			<div v-if="showPostForm[category.id]">
					<div class="z-10 flex flex-col items-start p-1  bg-white cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
					
						<h2 class="flex items-center h-6 px-1 text-xl font-semibold  text-gray-900  rounded-full">
							Add New Post
						</h2>
						<form class="w-full">
							<div class="">
								<label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
								<div class="mt-2">
									<input required v-model="createPostData[category.id].title" id="title" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
								</div>
								<label for="content" class="block text-sm font-medium leading-6 text-gray-900">Content</label>
								<div class="mt-2">
									<input required v-model="createPostData[category.id].content" id="content" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
								</div>
							</div>
						</form>
						<div class="flex justify-end w-full mt-3 text-xs font-medium text-gray-400">
							<div class="relative flex items-center">
								<button type="button" @click="showPostForm[category.id] = false"  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button>
								<button type="button" @click="createPost(createPostData[category.id], category.id); showPostForm[category.id] = false;" class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset hover:text-gray-900 ring-gray-300 hover:bg-blue-100 sm:mt-0 sm:w-auto">Submit</button>
							</div>
						</div>
					</div>
			</div>
			<PostCard :item="category.id" />
			<div>
				<CategoryForm v-if="showUpdateForm[category.id]" :data="category"  @close="showUpdateForm[category.id] = false" />
			</div>
			<div >
				<AlertAction v-if="showAlert[category.id]" :data="category" @close="showAlert[category.id] = false" @submit="deleteCard" />
			</div>
			 
	</div>
	<div v-else class="transition duration-700 ease-in-out w-full h-full flex items-center justify-center">
		<span class="text-6xl ext-gray-600">NO CARD </span>
	</div>
		
</template>

<style scoped>
	
</style>

<script setup>
import { onMounted, ref } from 'vue';
import CategoryForm from './CategoryForm.vue';
import AlertAction from './AlertAction.vue';
import WordPressAPI from '@/api/data.js';
import PostCard from './PostCard.vue';
import { usePostStore } from '../utils/postStore';

const showPostForm = ref([])
const createPostData = ref([])
const showUpdateForm = ref([])
const showAlert = ref([])
	defineProps({
	categories:Array
	})
const post = usePostStore();


const emit =  defineEmits(['delete', 'reloa', 'message', 'preload'])
function Update(IDcategory) {
	showUpdateForm.value[IDcategory] = true
	console.log('Good', IDcategory)
	console.log(showUpdateForm)
}
const PostDataId = ref({})
async function GetCardPost(id) {
	PostDataId.value = await WordPressAPI.fetchPostByCategoryId(id)
}
function deleteCardAction(id) {
	showAlert.value[id] = true

}
async function createPost(post, cardID) {
	const response = await WordPressAPI.createPost(post, cardID)
	emit('preload')
}
function closeAlertAction(id) {
	showAlert.value[id] = false
}
async function deleteCard(id) {
	try {
		closeAlertAction(id)
		const response = await WordPressAPI.deleteCategory(id)
		console.log(response)
	} catch (err) {
		console.log('error', err)
	} finally {
		
		emit('reloa')
		
	}
}

</script>