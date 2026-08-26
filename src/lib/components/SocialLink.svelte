<script lang="ts">
	import Icon from './Icon.svelte';
	import type { SocialLink } from '$lib/types';

	let { link, showLabel = true, variant = 'default' }: { link: SocialLink; showLabel?: boolean; variant?: 'default' | 'pill' | 'icon-only' } = $props();
</script>

{#if variant === 'pill'}
	<a
		href={link.href}
		target={link.href.startsWith('mailto:') ? undefined : '_blank'}
		rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
		class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] hover:border-[var(--accent)] transition-all shadow-xs"
	>
		<Icon name={link.icon} size={16} class="text-[var(--accent)]" />
		<span>{link.label}</span>
	</a>
{:else if variant === 'icon-only'}
	<a
		href={link.href}
		target={link.href.startsWith('mailto:') ? undefined : '_blank'}
		rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
		class="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-transparent hover:border-[var(--border-main)] transition-all"
		aria-label={link.label}
		title={link.label}
	>
		<Icon name={link.icon} size={18} />
	</a>
{:else}
	<a
		href={link.href}
		target={link.href.startsWith('mailto:') ? undefined : '_blank'}
		rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
		class="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors group"
	>
		<Icon name={link.icon} size={16} class="group-hover:text-[var(--accent)] transition-colors" />
		{#if showLabel}
			<span>{link.label}</span>
		{/if}
	</a>
{/if}
