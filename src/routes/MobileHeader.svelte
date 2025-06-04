<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let menuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			if (menuOpen) menuOpen = false;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	afterNavigate(() => {
		menuOpen = false;
	});
</script>




<header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 px-4 py-3 flex items-center justify-between text-white">
	<!-- Logo + Name -->
	<div class="flex items-center gap-2">
		<a href="/" class="text-lg font-semibold">Srikar</a>
	</div>

	<!-- Menu Toggle -->
	<button 
		class="focus:outline-none" 
		on:click={() => menuOpen = !menuOpen} 
		aria-label="Toggle navigation menu"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
		</svg>
	</button>
</header>

<!-- Mobile Dropdown -->
{#if menuOpen}
	<!-- <nav class="fixed top-14 left-0 w-full bg-zinc-900 text-white flex flex-col gap-3 px-4 py-4 z-40 max-h-[80vh] overflow-y-auto">
      -->
    <nav class="fixed inset-0 bg-zinc-900 text-white flex flex-col gap-3 px-4 pt-16 pb-8 z-40 overflow-y-auto">

		<a href="/#about">About</a>
		<a href="/#projects">Projects</a>
		<a href="/#education">Education</a>
		<a href="/#experience">Experience</a>
		<a href="/#contact">Contact</a>
		<a href="/">Resume</a>
	</nav>
{/if}

