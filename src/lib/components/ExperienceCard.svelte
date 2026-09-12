<script lang="ts">
	import Icon from './Icon.svelte';
	import type { ExperienceEntry } from '$lib/types';

	let { entry }: { entry: ExperienceEntry } = $props();

	function formatDateRange(start: string, end: string | 'present'): string {
		const format = (d: string) => {
			if (d === 'present') return 'Present';
			const [y, m] = d.split('-');
			if (!m) return y;
			const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return `${months[parseInt(m, 10) - 1]} ${y}`;
		};
		return `${format(start)} - ${format(end)}`;
	}
</script>

<div class="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all">
	<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
		<div class="flex items-start gap-3.5">
			<!-- Company Logo -->
			<div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 bg-white border border-[var(--border-main)] flex items-center justify-center p-2 shadow-2xs">
				{#if entry.logo}
					<img src={entry.logo} alt={entry.company} class="w-full h-full object-contain" />
				{:else}
					<Icon name="terminal" size={22} class="text-[var(--text-muted)]" />
				{/if}
			</div>

			<div>
				<!-- Primary Prominence: Company Name (no hyperlink) -->
				<h3 class="text-base sm:text-lg font-semibold text-[var(--text-main)]">
					{entry.company}
				</h3>
				<!-- Role Underneath -->
				<p class="text-sm sm:text-base text-[var(--accent)] font-medium mt-0.5">
					{entry.title}
				</p>
				{#if entry.location}
					<p class="text-xs text-[var(--text-faint)] font-mono mt-1 flex items-center gap-1">
						<Icon name="map-pin" size={11} />
						<span>{entry.location}</span>
					</p>
				{/if}
			</div>
		</div>

		<!-- Date -->
		<div class="sm:text-right shrink-0">
			<span class="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
				<Icon name="calendar" size={12} />
				<span>{formatDateRange(entry.startDate, entry.endDate)}</span>
			</span>
		</div>
	</div>

	<!-- Bullets -->
	<ul class="mt-5 space-y-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed list-none">
		{#each entry.bullets as bullet}
			<li class="flex items-start gap-2.5">
				<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-faint)] shrink-0"></span>
				<span>{bullet}</span>
			</li>
		{/each}
	</ul>

	<!-- Tech Tags -->
	{#if entry.skills && entry.skills.length > 0}
		<div class="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
			<span class="text-xs font-mono text-[var(--text-faint)] uppercase tracking-wider mr-1">Stack:</span>
			{#each entry.skills as skill}
				<span class="px-2 py-0.5 rounded-md text-xs font-mono font-medium text-[var(--text-muted)] bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
					{skill}
				</span>
			{/each}
		</div>
	{/if}
</div>
