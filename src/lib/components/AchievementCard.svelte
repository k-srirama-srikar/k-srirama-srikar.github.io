<script lang="ts">
	import Icon from './Icon.svelte';
	import type { Achievement } from '$lib/types';

	let { achievement }: { achievement: Achievement } = $props();
</script>

<div class="p-4 sm:p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] transition-all shadow-xs hover:shadow-sm flex flex-col justify-between">
	<div>
		<div class="flex items-center justify-between gap-1 text-xs font-mono text-[var(--text-faint)] uppercase tracking-wider mb-1.5">
			<span>{achievement.label}</span>
			{#if achievement.href}
				<a
					href={achievement.href}
					target="_blank"
					rel="noopener noreferrer"
					class="text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors"
					aria-label="View profile"
				>
					<Icon name="external-link" size={13} />
				</a>
			{/if}
		</div>

		<div class="text-base sm:text-lg font-semibold text-[var(--text-main)]">
			{achievement.value}
		</div>

		{#if achievement.detail}
			<p class="mt-1.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
				{achievement.detail}
			</p>
		{/if}
	</div>
</div>

