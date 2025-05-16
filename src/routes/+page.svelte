<script lang="ts">
	// import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	
	 <!-- Preview image for social media -->
	<meta property="og:title" content="K Sriama Srikar | Portfolio" />
	<meta property="og:description" content="Explore my projects, skills, and achievements." />
	<meta property="og:image" content="static/images/no_padding.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://k-srirama-srikar.github.io/" />

	<!-- Twitter card (optional) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="K Srirama Srikar | Portfolio" />
	<meta name="twitter:description" content="Explore my projects, skills, and achievements." />
	<meta name="twitter:image" content="static/images/no_padding.png" />


</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

	</h1>

	<h2>
		Hi! I am <strong>K Srirama Srikar</strong>!
	</h2>

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
