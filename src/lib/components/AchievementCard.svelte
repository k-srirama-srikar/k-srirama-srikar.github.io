<script lang="ts">
	import Icon from './Icon.svelte';
	import type { Achievement } from '$lib/types';

	let { achievement }: { achievement: Achievement } = $props();
</script>

<div class="p-4 sm:p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
	<div>
		<div class="flex items-center justify-between gap-2 text-xs font-mono text-[var(--text-faint)] font-medium uppercase tracking-wider mb-1.5">
			<span>{achievement.label}</span>
			{#if achievement.href}
				<a
					href={achievement.href}
					target="_blank"
					rel="noopener noreferrer"
					class="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
					aria-label="View profile"
				>
					<Icon name="external-link" size={12} />
				</a>
			{/if}
		</div>

		<!-- Sized down so it is neat and non-imposing -->
		<div class="text-sm sm:text-base font-semibold text-[var(--text-main)] font-mono tracking-tight">
			{achievement.value}
		</div>

		{#if achievement.detail}
			<p class="mt-1 text-xs text-[var(--text-muted)] font-mono leading-relaxed">
				{achievement.detail}
			</p>
		{/if}
	</div>
</div>
