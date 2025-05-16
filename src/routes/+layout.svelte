<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	// let { children } = $props();
</script>

<!-- animated glow -->

<!-- 🌌 Full app layout wrapper -->
<!-- <div class="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"> -->
<div class="flex flex-col min-h-screen bg-carbon
 text-white">	
	<!-- 🧭 Header -->
	<Header />
	
	<div class="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-600/20 blur-3xl rounded-full pointer-events-none mix-blend-overlay animate-pulse z-0"></div>

	<!-- 📦 Page content -->
	<main class="flex-1 flex flex-col px-4 py-8 w-full max-w-4xl mx-auto box-border">
		<slot />
	</main>

	<!-- 🦶 Footer -->
	<footer class="flex flex-col justify-center items-center py-3">
		<p>© 2025 by K Srirama Srikar</p>
	</footer>
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
