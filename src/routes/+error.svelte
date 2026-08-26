<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Page Not Found · K Srirama Srikar</title>
</svelte:head>

<div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
	<div class="p-3 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] mb-6">
		<Icon name="terminal" size={36} />
	</div>

	<h1 class="text-4xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
		{page.status || 404}
	</h1>

	<p class="mt-3 text-lg text-[var(--text-muted)] max-w-md">
		{page.error?.message || 'The requested page could not be found.'}
	</p>

	<div class="mt-8 flex items-center gap-4">
		<a
			href="/"
			class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-xs transition-colors"
		>
			<Icon name="arrow-left" size={16} />
			<span>Return Home</span>
		</a>
		<a
			href="/projects"
			class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors"
		>
			<span>View Projects</span>
		</a>
	</div>
</div>
