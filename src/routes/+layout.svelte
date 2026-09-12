<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import profileData from '$lib/data/profile.json';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/images/c2img.png" />
	<link rel="apple-touch-icon" href="/images/c2img.png" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-main)] selection:bg-[var(--accent)] selection:text-white transition-colors duration-200">
	<!-- Global Navigation Header -->
	<Header />

	<!-- Main Content Area -->
	<main class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>
