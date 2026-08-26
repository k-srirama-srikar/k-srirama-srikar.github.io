<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Project } from '$lib/types';
	import rawProjects from '$lib/data/projects.json';

	const projects = rawProjects as Project[];

	let selectedCategory = $state('All');
	let searchQuery = $state('');

	const categories = ['All', 'Systems & Graphics', 'Compilers & Systems', 'Distributed Systems & Backend', 'Full-Stack Web Engineering', 'AI & Audio Engineering', 'Computer Vision'];

	const filteredProjects = $derived(
		projects.filter((project) => {
			const matchesCategory =
				selectedCategory === 'All' || project.category === selectedCategory;
			const matchesQuery =
				searchQuery.trim() === '' ||
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
			return matchesCategory && matchesQuery;
		})
	);
</script>

<svelte:head>
	<title>Projects · Kakaraparty Srirama Srikar</title>
	<meta name="description" content="Selected and open-source projects across systems programming, compilers, data infrastructure, and web applications." />
</svelte:head>

<div class="py-8 sm:py-12 space-y-8">
	<!-- Page Header -->
	<div class="border-b border-[var(--border-subtle)] pb-6">
		<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-main)]">
			Projects
		</h1>
		<p class="mt-2 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
			A complete index of featured engineering systems, course compilers, distributed backends, and public open-source software.
		</p>
	</div>

	<!-- Filter & Search Controls -->
	<div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
		<!-- Category Chips -->
		<div class="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
			{#each categories as category}
				<button
					type="button"
					onclick={() => (selectedCategory = category)}
					class="px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors {selectedCategory === category ? 'bg-[var(--accent)] text-white shadow-xs' : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)]'}"
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Search Box -->
		<div class="relative w-full sm:w-64 shrink-0">
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search projects or stack..."
				class="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs sm:text-sm bg-[var(--bg-surface)] border border-[var(--border-main)] focus:border-[var(--accent)] text-[var(--text-main)] placeholder-[var(--text-faint)] transition-colors"
			/>
			<div class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] pointer-events-none">
				<Icon name="search" size={13} />
			</div>
			{#if searchQuery}
				<button
					type="button"
					onclick={() => (searchQuery = '')}
					class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-main)]"
					aria-label="Clear search"
				>
					<Icon name="close" size={13} />
				</button>
			{/if}
		</div>
	</div>

	<!-- Projects Grid -->
	{#if filteredProjects.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each filteredProjects as project}
				<ProjectCard {project} variant="compact" />
			{/each}
		</div>
	{:else}
		<div class="p-10 text-center rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] space-y-3">
			<p class="text-sm text-[var(--text-muted)] font-medium">No projects found matching your search query.</p>
			<button
				type="button"
				onclick={() => {
					selectedCategory = 'All';
					searchQuery = '';
				}}
				class="text-xs font-semibold text-[var(--accent)] hover:underline"
			>
				Reset filters
			</button>
		</div>
	{/if}
</div>
