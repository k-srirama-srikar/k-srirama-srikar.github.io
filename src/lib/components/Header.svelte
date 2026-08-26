<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import Icon from './Icon.svelte';
	import MobileNav from './MobileNav.svelte';
	import profileData from '$lib/data/profile.json';

	let isDrawerOpen = $state(false);

	const navItems = [
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Education', href: '/#education' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Skills', href: '/#skills' },
		{ label: 'Achievements', href: '/#achievements' },
		{ label: 'Coding Profiles', href: '/coding-profiles' },
		{ label: 'Leadership', href: '/#leadership' },
		{ label: 'Contact', href: '/#contact' }
	];
</script>

<header class="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg-page)]/90 border-b border-[var(--border-main)] transition-colors">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
		<!-- Left: Brand / Avatar + Full Name -->
		<a href="/" class="flex items-center gap-3 font-bold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors group min-w-0">
			<img
				src={profileData.avatar}
				alt={profileData.fullName}
				class="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-[var(--border-main)] group-hover:ring-[var(--accent)] transition-all shrink-0"
			/>
			<span class="text-sm sm:text-base tracking-tight font-semibold truncate">
				{profileData.fullName}
			</span>
		</a>

		<!-- Right Side Controls: Theme Toggle, Resume & Hamburger Menu Button -->
		<div class="flex items-center gap-2 sm:gap-3 shrink-0">
			<!-- Theme Toggle -->
			<ThemeToggle />

			<!-- Résumé Button -->
			<a
				href={profileData.resumeUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-xs transition-colors"
			>
				<Icon name="download" size={14} />
				<span>Resume</span>
			</a>

			<!-- Menu Hamburger (Sandwich) Button - always visible across desktop & mobile -->
			<button
				type="button"
				onclick={() => (isDrawerOpen = !isDrawerOpen)}
				class="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors flex items-center justify-center cursor-pointer"
				aria-label="Toggle navigation menu"
				title="Menu"
			>
				{#if isDrawerOpen}
					<Icon name="close" size={18} />
				{:else}
					<Icon name="menu" size={18} />
				{/if}
			</button>
		</div>
	</div>
</header>

<MobileNav isOpen={isDrawerOpen} onClose={() => (isDrawerOpen = false)} {navItems} />
