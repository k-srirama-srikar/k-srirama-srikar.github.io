<script lang="ts">
	import Icon from './Icon.svelte';
	import type { EducationEntry } from '$lib/types';

	let { entry }: { entry: EducationEntry } = $props();

	function formatDateRange(start: string, end: string | 'present'): string {
		const formatEnd = end === 'present' ? 'Present' : end;
		return `${start} - ${formatEnd}`;
	}
</script>

<div class="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all">
	<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
		<div class="flex items-start gap-3.5">
			<!-- Institution Logo -->
			<div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 bg-white border border-[var(--border-main)] flex items-center justify-center p-2 shadow-2xs">
				{#if entry.logo}
					<img src={entry.logo} alt={entry.institution} class="w-full h-full object-contain" />
				{:else}
					<Icon name="award" size={22} class="text-[var(--text-muted)]" />
				{/if}
			</div>

			<div>
				<h3 class="text-sm sm:text-base font-semibold text-[var(--text-main)]">
					{entry.institution}
				</h3>
				<p class="text-xs sm:text-sm text-[var(--text-muted)] font-medium mt-0.5">
					{entry.degree}
				</p>
				{#if entry.location}
					<p class="text-xs text-[var(--text-faint)] font-mono mt-1 flex items-center gap-1">
						<Icon name="map-pin" size={11} />
						<span>{entry.location}</span>
					</p>
				{/if}
			</div>
		</div>

		<!-- Date & GPA -->
		<div class="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 shrink-0">
			<span class="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
				<Icon name="calendar" size={12} />
				<span>{formatDateRange(entry.startDate, entry.endDate)}</span>
			</span>
			{#if entry.gpa}
				<span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium text-[var(--text-main)] bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
					{entry.gpa}
				</span>
			{/if}
		</div>
	</div>

	{#if entry.highlights && entry.highlights.length > 0}
		<ul class="mt-4 pt-3.5 border-t border-[var(--border-subtle)] space-y-2 text-xs sm:text-sm text-[var(--text-muted)] list-none">
			{#each entry.highlights as highlight}
				<li class="flex items-start gap-2.5">
					<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-faint)] shrink-0"></span>
					<span>{highlight}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
