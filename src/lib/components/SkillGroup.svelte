<script lang="ts">
	import type { SkillGroup as SkillGroupType } from '$lib/types';

	let { group }: { group: SkillGroupType } = $props();
</script>

<div class="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs transition-all">
	<h3 class="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-faint)] mb-3.5">
		{group.label}
	</h3>
	<div class="flex flex-wrap gap-2">
		{#each group.items as item}
			<span class="inline-flex items-center px-3 py-1 rounded-md text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors">
				{item}
			</span>
		{/each}
	</div>
</div>
