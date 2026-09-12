<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '$lib/components/Icon.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL, createBreadcrumbSchema } from '$lib/seo';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);

	const breadcrumbSchema = $derived(
		createBreadcrumbSchema([
			{ name: 'Home', url: `${SITE_URL}/` },
			{ name: 'Projects', url: `${SITE_URL}/projects` },
			{ name: project.title, url: `${SITE_URL}/projects/${project.slug}` }
		])
	);

	const softwareSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'SoftwareSourceCode',
		name: project.title,
		description: project.summary,
		programmingLanguage: project.stack.join(', '),
		author: {
			'@type': 'Person',
			name: 'Kakaraparty Srirama Srikar',
			url: `${SITE_URL}/`
		},
		codeRepository: project.links.github || undefined,
		url: `${SITE_URL}/projects/${project.slug}`
	});
</script>

<SEO
	title="{project.title} · Overview · Kakaraparty Srirama Srikar"
	description="{project.summary}"
	canonicalUrl="{SITE_URL}/projects/{project.slug}"
	type="article"
	keywords="{project.title}, {project.stack.join(', ')}, Kakaraparty Srirama Srikar, IIT Palakkad"
	structuredData={[breadcrumbSchema, softwareSchema]}
/>

<div class="py-8 sm:py-12 max-w-3xl mx-auto space-y-8">
	<!-- Top Breadcrumb -->
	<div>
		<a
			href="/projects"
			class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group"
		>
			<Icon name="arrow-left" size={14} class="group-hover:-translate-x-0.5 transition-transform" />
			<span>Back to all projects</span>
		</a>
	</div>

	<!-- Header Area -->
	<div class="space-y-4 border-b border-[var(--border-subtle)] pb-8">
		<div class="flex flex-wrap items-center gap-3">
			{#if project.category}
				<span class="text-xs font-mono text-[var(--text-faint)] font-medium uppercase tracking-wider">
					{project.category}
				</span>
			{/if}
			{#if project.startDate}
				<span class="text-xs font-mono text-[var(--text-muted)]">
					{project.startDate} {#if project.endDate && project.endDate !== project.startDate}- {project.endDate}{/if}
				</span>
			{/if}
		</div>

		<h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)] leading-tight">
			{project.title}
		</h1>

		<p class="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
			{project.summary}
		</p>

		<!-- Stack Badges -->
		<div class="flex flex-wrap items-center gap-1.5 pt-1">
			{#each project.stack as tech}
				<span class="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[var(--text-muted)] bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
					{tech}
				</span>
			{/each}
		</div>

		<!-- Links / CTAs -->
		<div class="flex flex-wrap items-center gap-2.5 pt-3">
			{#if project.links.github}
				<a
					href={project.links.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[var(--accent-text)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-xs transition-colors"
				>
					<Icon name="github" size={15} />
					<span>{#if project.links.backend}Frontend Repository{:else}View Source Code{/if}</span>
				</a>
			{/if}

			{#if project.links.backend}
				<a
					href={project.links.backend}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] shadow-xs transition-colors"
				>
					<Icon name="github" size={15} />
					<span>Backend Repository</span>
				</a>
			{/if}

			{#if project.links.demo}
				<a
					href={project.links.demo}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] shadow-xs transition-colors"
				>
					<Icon name="external-link" size={15} />
					<span>Live Deployment</span>
				</a>
			{/if}

			{#if project.links.note}
				<div class="p-2.5 rounded-lg text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
					{project.links.note}
				</div>
			{/if}
		</div>
	</div>

	<!-- Overview Section -->
	{#if project.overview}
		<section class="space-y-3">
			<h2 class="text-base sm:text-lg font-semibold tracking-tight text-[var(--text-main)]">
				Overview & Architecture
			</h2>
			<p class="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
				{project.overview}
			</p>
		</section>
	{/if}

	<!-- Architecture / Technical Approach Section -->
	{#if project.approach}
		<section class="space-y-3 p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)]">
			<h2 class="text-base sm:text-lg font-semibold tracking-tight text-[var(--text-main)] flex items-center gap-2">
				<Icon name="terminal" size={18} class="text-[var(--text-muted)]" />
				<span>Technical Design & Implementation</span>
			</h2>
			<p class="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
				{project.approach}
			</p>
		</section>
	{/if}

	<!-- Highlights Section -->
	<section class="space-y-4">
		<h2 class="text-base sm:text-lg font-semibold tracking-tight text-[var(--text-main)]">
			Key Engineering Highlights
		</h2>
		<ul class="space-y-3 list-none">
			{#each project.highlights as highlight}
				<li class="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] flex items-start gap-3 shadow-2xs">
					<div class="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"></div>
					<span class="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
						{highlight}
					</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Footer Navigation -->
	<div class="pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between">
		<a
			href="/projects"
			class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
		>
			<Icon name="arrow-left" size={14} />
			<span>Explore all projects</span>
		</a>
		<a
			href="/#contact"
			class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
		>
			<span>Get in touch</span>
			<Icon name="arrow-right" size={14} />
		</a>
	</div>
</div>
