<script lang="ts">
	import type { SkillGroup as SkillGroupType } from '$lib/types';
	import { getSkillBadge } from '$lib/badges';

	let { group }: { group: SkillGroupType } = $props();
</script>

<div class="p-4 sm:p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] transition-all shadow-xs">
	<h3 class="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-faint)] mb-3">
		{group.label}
	</h3>
	<div class="flex flex-wrap items-center gap-2 sm:gap-2.5">
		{#each group.items as item}
			{@const badge = getSkillBadge(item)}
			{#if badge}
				<div class="inline-block transition-transform hover:-translate-y-0.5 hover:opacity-95">
					<img
						src={badge.url}
						alt={badge.alt}
						class="h-7 w-auto object-contain rounded-xs shadow-2xs"
						loading="lazy"
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>
