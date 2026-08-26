<script lang="ts">
	import Icon from './Icon.svelte';
	import profileData from '$lib/data/profile.json';
	import socialsData from '$lib/data/socials.json';

	let {
		isOpen,
		onClose,
		navItems
	}: {
		isOpen: boolean;
		onClose: () => void;
		navItems: Array<{ label: string; href: string }>;
	} = $props();
</script>

{#if isOpen}
	<!-- Backdrop -->
	<button
		type="button"
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity cursor-default w-full h-full border-none"
		onclick={onClose}
		aria-label="Close menu backdrop"
	></button>

	<!-- Slide-over Drawer -->
	<div
		class="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-[var(--bg-surface)] border-l border-[var(--border-main)] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-200 ease-out"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation Menu"
	>
		<div class="space-y-6">
			<!-- Header inside Drawer -->
			<div class="flex items-center justify-between pb-4 border-b border-[var(--border-main)]">
				<div class="flex items-center gap-3 min-w-0">
					<img
						src={profileData.avatar}
						alt={profileData.fullName}
						class="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--accent)] shrink-0"
					/>
					<div class="min-w-0">
						<h3 class="font-bold text-sm text-[var(--text-main)] truncate">{profileData.fullName}</h3>
						<p class="text-xs text-[var(--text-muted)] font-mono truncate">{profileData.currentStatus}</p>
					</div>
				</div>
				<button
					type="button"
					onclick={onClose}
					class="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] shrink-0 cursor-pointer"
					aria-label="Close menu"
				>
					<Icon name="close" size={18} />
				</button>
			</div>

			<!-- Nav links -->
			<nav class="flex flex-col gap-1">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={onClose}
						class="px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--text-main)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] transition-colors flex items-center justify-between"
					>
						<span>{item.label}</span>
						<Icon name="arrow-right" size={14} class="opacity-50" />
					</a>
				{/each}
			</nav>
		</div>

		<!-- Drawer Footer -->
		<div class="pt-6 border-t border-[var(--border-main)] space-y-4">
			<a
				href={profileData.resumeUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-xs transition-colors"
			>
				<Icon name="download" size={16} />
				<span>Resume</span>
			</a>

			<div class="flex items-center justify-center gap-3 pt-2">
				{#each socialsData as social}
					<a
						href={social.href}
						target={social.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
						class="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors"
						aria-label={social.label}
						title={social.label}
					>
						<Icon name={social.icon} size={16} />
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}
