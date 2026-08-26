<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import profileData from '$lib/data/profile.json';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{profileData.displayName} · Software Engineer</title>
	<meta name="description" content="{profileData.positioningLine}" />
	<meta name="author" content="{profileData.fullName}" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{profileData.displayName} · Software Engineer" />
	<meta property="og:description" content="{profileData.positioningLine}" />
	<meta property="og:image" content="{profileData.avatar}" />
	<meta property="og:url" content="https://k-srirama-srikar.github.io/" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{profileData.displayName} · Software Engineer" />
	<meta name="twitter:description" content="{profileData.positioningLine}" />
	<meta name="twitter:image" content="{profileData.avatar}" />

	<link rel="icon" href="{profileData.avatar}" />
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
