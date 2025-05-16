<script lang="ts">
	import { page } from '$app/state';
	// import { get } from 'svelte/store';
	import logo from '$lib/images/c2img.png';
	// import github from '/images/github_logo.png';
</script>

<!-- <header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Sri" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/k-srirama-srikar">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->
<!-- fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 -->

<header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-zinc-700 bg-carbon/20 bg-opacity-20 text-white px-6 py-4 flex items-center justify-between z-50">
	<!-- Logo Left -->
	<div class="flex items-center gap-2">
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="Iris" class="h-8 w-auto" />
			<!-- <span class="text-xl font-bold tracking-wide">Iris</span> -->
		</a>
	</div>

	<!-- Nav Right -->
	<nav class="flex items-center gap-6">
	<a 
		href="/" 
		class="hover:text-indigo-400 transition-colors text-white-700 uppercase duration-200 ease-in-out"
		aria-current={page.url.pathname === '/' ? 'page' : undefined}
	>
		Home
	</a>
	<a 
		href="/about" 
		class="hover:text-indigo-400 transition-colors text-white"
		aria-current={page.url.pathname === '/about' ? 'page' : undefined}
	>
		About
	</a>
	<a 
		href="/sverdle" 
		class="hover:text-indigo-400 transition-colors text-white"
		aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}
	>
		Sverdle
	</a>
	</nav>


	<!-- <div class="corner">
		<a href="https://github.com/k-srirama-srikar">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<!-- Optional: Floating GitHub link (bottom-left corner) -->
<!-- <a 
	href="https://github.com/username" 
	target="_blank" 
	rel="noopener noreferrer" 
	class="fixed bottom-4 left-4 z-50 opacity-70 hover:opacity-100 transition-opacity"
>
	<img src={github} alt="GitHub" class="h-6 w-6" />
</a> -->

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	/* .corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-2);
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-theme-2);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	/* a:hover {
		color: var(--color-theme-2);
	} */
</style>
