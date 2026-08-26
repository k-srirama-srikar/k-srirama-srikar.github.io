<script lang="ts">
	import Icon from './Icon.svelte';
	import type { Project } from '$lib/types';

	let { project, variant = 'featured' }: { project: Project; variant?: 'featured' | 'compact' } = $props();
</script>

{#if variant === 'featured'}
	<div class="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
		<div>
			<!-- Category & Links Header -->
			<div class="flex items-center justify-between gap-2 mb-2.5">
				{#if project.category}
					<span class="text-xs font-mono text-[var(--text-faint)] font-medium uppercase tracking-wider">
						{project.category}
					</span>
				{/if}

				<div class="flex items-center gap-1.5">
					{#if project.links.github}
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							class="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] transition-colors"
							aria-label="View source on GitHub"
							title="View source on GitHub"
						>
							<Icon name="github" size={16} />
						</a>
					{/if}
				</div>
			</div>

			<!-- Project Title -->
			<h3 class="text-lg sm:text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
				{#if project.hasCaseStudy}
					<a href="/projects/{project.slug}" target="_blank" rel="noopener noreferrer" class="hover:underline">
						{project.title}
					</a>
				{:else}
					{project.title}
				{/if}
			</h3>

			<!-- Summary -->
			<p class="mt-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
				{project.summary}
			</p>

			<!-- Stack Chips -->
			<div class="mt-4 flex flex-wrap items-center gap-1.5">
				{#each project.stack as tech}
					<span class="px-2 py-0.5 rounded-md text-xs font-mono font-medium text-[var(--text-muted)] bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
						{tech}
					</span>
				{/each}
			</div>
		</div>

		<!-- Footer Actions -->
		<div class="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
			{#if project.hasCaseStudy}
				<a
					href="/projects/{project.slug}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
				>
					<span>Overview</span>
					<Icon name="external-link" size={12} />
				</a>
			{/if}

			{#if project.links.github}
				<a
					href={project.links.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
				>
					<Icon name="github" size={13} />
					<span>Source Code</span>
				</a>
			{:else if project.links.note}
				<span class="text-xs font-mono text-[var(--text-faint)] italic">
					{project.links.note}
				</span>
			{/if}
		</div>
	</div>
{:else}
	<!-- Compact Grid Card -->
	<div class="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group">
		<div>
			<div class="flex items-center justify-between gap-2 mb-2">
				{#if project.category}
					<span class="text-xs font-mono text-[var(--text-faint)] uppercase tracking-wider font-medium">
						{project.category}
					</span>
				{/if}

				{#if project.links.github}
					<a
						href={project.links.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-[var(--text-muted)] hover:text-[var(--text-main)]"
						aria-label="GitHub repo"
					>
						<Icon name="github" size={15} />
					</a>
				{/if}
			</div>

			<h4 class="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
				{#if project.hasCaseStudy}
					<a href="/projects/{project.slug}" target="_blank" rel="noopener noreferrer">
						{project.title}
					</a>
				{:else if project.links.github}
					<a href={project.links.github} target="_blank" rel="noopener noreferrer">
						{project.title}
					</a>
				{:else}
					{project.title}
				{/if}
			</h4>

			<p class="mt-2 text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
				{project.summary}
			</p>
		</div>

		<div class="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
			<div class="flex flex-wrap gap-1">
				{#each project.stack.slice(0, 3) as tech}
					<span class="px-2 py-0.5 rounded text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-surface-subtle)]">
						{tech}
					</span>
				{/each}
			</div>

			{#if project.hasCaseStudy}
				<a
					href="/projects/{project.slug}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1 shrink-0"
				>
					<span>Overview</span>
					<Icon name="external-link" size={11} />
				</a>
			{/if}
		</div>
	</div>
{/if}
