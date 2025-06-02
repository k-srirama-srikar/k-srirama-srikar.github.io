<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import sri from '$lib/images/c2img.png'

	// let { children } = $props();
</script>

<!-- animated glow -->

<!-- 🌌 Full app layout wrapper -->
<!-- <div class="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"> -->
	<!-- <div class="flex flex-col min-h-screen bg-dark-gradient text-white">	 -->
		<!-- 🧭 Header -->
		
		<div class="flex flex-col min-h-screen">
		<Header />
		<section class="fixed inset-0 -z-10 bg-shooting">
		{#each Array(10) as _, i}
			<span
			class="shooting-star"
			style="
				top: {Math.random() * 100}vh;
				right: {Math.random() * 100}vw;
				animation-delay: {Math.random() * 3}s;
				animation-duration: {1 + Math.random() * 2.5}s;
			"
			></span>
		{/each}
		</section>

		<!-- Sidebar -->
		 <div class="grid grid-cols--[20%_80%] min-h-screen text-white">
		<aside class="fixed h-screen top-[65px] left-0 h-[calc(100vh-4rem)] w-[20%] px-8 py-10 flex flex-col text-center items-center z-50 backdrop-blur-sm  border-r border-gray-300">
			<a href="/"><img src="{sri}" alt="Profile" class="rounded-full w-24 h-24 mb-4" /></a>
			<nav class="flex flex-col gap-2 text-sm w-full">
				<div class="or-spacer"></div>
				<a href="/#about" class="hover:underline">About</a>
				<div class="or-spacer"></div>
				<a href="/#projects" class="hover:underline">Projects</a>
				<div class="or-spacer"></div>
				<a href="/#education" class="hover:underline">Education</a>
				<div class="or-spacer"></div>
				<a href="/#experience" class="hover:underline">Experience</a>
				<div class="or-spacer"></div>
				<a href="/#contact" class="hover:underline">Contact Me</a>
				<div class="or-spacer"></div>
				<a href="/" class="hover:underline" target="_blank">Resume</a>
			</nav>
		</aside>

		<main class="ml-[20vw] w-[80vw] min-h-[calc(100vh-4rem)] overflow-y-auto pt-10 px-8">
		<slot /></main>
		<!-- <div class="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-600/20 blur-3xl rounded-full pointer-events-none mix-blend-overlay animate-pulse z-0"></div> -->
		
		<!-- 📦 Page content -->
		<!-- <main class="flex-1 flex flex-col px-4 py-8 w-full max-w-4xl mx-auto box-border"> -->
			<!-- <slot /> -->
			<!-- </main> -->
			
			<!-- 🦶 Footer -->
			<footer class="flex flex-col justify-center items-center py-3">
				<p>© 2025 by siri</p>
			</footer>
			<!-- </div> -->
		</div>
		</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	
</style>
