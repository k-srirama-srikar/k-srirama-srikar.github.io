<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	let isDark = $state(false);

	onMount(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else {
			isDark = false;
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	type="button"
	onclick={toggleTheme}
	class="inline-flex items-center justify-center p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors focus-visible:ring-2"
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if isDark}
		<Icon name="sun" size={18} />
	{:else}
		<Icon name="moon" size={18} />
	{/if}
</button>
