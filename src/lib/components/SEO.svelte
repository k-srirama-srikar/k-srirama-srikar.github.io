<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		canonicalUrl?: string;
		type?: string;
		image?: string;
		keywords?: string;
		structuredData?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = 'Kakaraparty Srirama Srikar · Software Engineer · IIT Palakkad',
		description = 'Official portfolio of Kakaraparty Srirama Srikar, Software Engineer and B.Tech Data Science & Engineering undergraduate at IIT Palakkad (Incoming Data Engineer @ Texas Instruments). Systems, infrastructure, compilers, and competitive programming.',
		canonicalUrl = 'https://k-srirama-srikar.github.io/',
		type = 'website',
		image = 'https://k-srirama-srikar.github.io/images/c2img.png',
		keywords = 'Kakaraparty Srirama Srikar, Srirama Srikar, K Srirama Srikar, Srikar Kakaraparty, IIT Palakkad, Indian Institute of Technology Palakkad, Software Engineer, Data Engineer, Texas Instruments, Systems Programming, C++, OCaml, Compiler Design, Apache Spark, Apache Iceberg, Competitive Programming, Codeforces Specialist, LeetCode Knight, ICPC Regionalist, Portfolio',
		structuredData
	}: Props = $props();

	const jsonLdString = $derived(
		structuredData ? JSON.stringify(structuredData) : null
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Kakaraparty Srirama Srikar" />
	<meta name="creator" content="Kakaraparty Srirama Srikar" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Social Media -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content="Kakaraparty Srirama Srikar" />
	<meta property="og:site_name" content="Kakaraparty Srirama Srikar Portfolio" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if jsonLdString}
		<!-- Schema.org JSON-LD Structured Data -->
		{@html `<script type="application/ld+json">${jsonLdString}</script>`}
	{/if}
</svelte:head>
