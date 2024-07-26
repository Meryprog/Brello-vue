<template>
    <div class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
	<div class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
		<svg class="w-8 h-8 text-indigo-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
		</svg>
		<input class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring" type="search" placeholder="Search for anything…">
		<div class="ml-10">
			<a class="mx-2 text-sm font-semibold text-indigo-700" href="#">Projects</a>
			<a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Team</a>
			<a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Activity</a>
		</div>
		<buton class="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
			<img src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512" alt="">
		</buton>
	</div>
	<div class="flex justify-between px-10 mt-6">
		<h1 class="text-2xl font-bold">Team Project Board</h1>
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset hover:text-gray-900 ring-gray-300 hover:bg-blue-100 sm:mt-0 sm:w-auto">Add Card</button>
	</div>
	<div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
		
		<div class="flex-shrink-0 w-6"></div>
	</div>
</div>
</template>

<style>

</style>

<script setup>
import WordpressAPI from "@/api/data.js";
import CategoriesCard from "./components/CategoriesCard.vue";
import CategoryForm from "./components/CategoryForm.vue";
import AlertAction from "./components/AlertAction.vue";
import AlertMessage from "./components/AlertMessage.vue";

</script>