<script lang="ts">
	import Icon from './Icon.svelte';
	import type { Position } from '$lib/types';

	let { position }: { position: Position } = $props();

	function formatDateRange(start?: string, end?: string | 'present'): string {
		if (!start) return '';
		const format = (d: string) => {
			if (d === 'present') return 'Present';
			const [y, m] = d.split('-');
			if (!m) return y;
			const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return `${months[parseInt(m, 10) - 1]} ${y}`;
		};
		const formatEnd = end === 'present' ? 'Present' : end ? format(end) : 'Present';
		return `${format(start)} - ${formatEnd}`;
	}
</script>

<div class="p-5 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all">
	<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
		<div class="flex items-start gap-3.5">
			<!-- Club Logo -->
			<div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 bg-white border border-[var(--border-main)] flex items-center justify-center p-2 shadow-2xs">
				{#if position.logo}
					<img src={position.logo} alt={position.org} class="w-full h-full object-contain" />
				{:else}
					<Icon name="terminal" size={22} class="text-[var(--text-muted)]" />
				{/if}
			</div>

			<div>
				<!-- Primary Prominence: Organization Name -->
				<h3 class="text-sm sm:text-base font-semibold text-[var(--text-main)]">
					{position.org}
				</h3>

				<!-- Role Timeline / Progression -->
				{#if position.roles && position.roles.length > 0}
					<div class="mt-2 space-y-1.5">
						{#each position.roles as r, i}
							<div class="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs sm:text-sm">
								<span class="font-medium {i === 0 ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-muted)]'}">
									{r.role}
								</span>
								<span class="text-xs font-mono text-[var(--text-faint)]">
									{formatDateRange(r.startDate, r.endDate)}
								</span>
							</div>
						{/each}
					</div>
				{:else if position.role}
					<p class="text-xs sm:text-sm text-[var(--accent)] font-medium mt-0.5">
						{position.role}
					</p>
				{/if}
			</div>
		</div>

		<!-- Single Date badge if no roles array -->
		{#if (!position.roles || position.roles.length === 0) && position.startDate}
			<div class="shrink-0">
				<span class="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
					<Icon name="calendar" size={12} />
					<span>{formatDateRange(position.startDate, position.endDate)}</span>
				</span>
			</div>
		{/if}
	</div>

	<p class="mt-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
		{position.description}
	</p>

	{#if position.highlights && position.highlights.length > 0}
		<ul class="mt-3.5 pt-3.5 border-t border-[var(--border-subtle)] space-y-2 text-xs sm:text-sm text-[var(--text-muted)] list-none">
			{#each position.highlights as highlight}
				<li class="flex items-start gap-2.5">
					<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-faint)] shrink-0"></span>
					<span>{highlight}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
