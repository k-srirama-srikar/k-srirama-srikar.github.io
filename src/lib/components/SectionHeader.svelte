<script lang="ts">
	let { title, subtitle = '' }: { title: string; subtitle?: string; tag?: string } = $props();
</script>

<div class="mb-5">
	<h2 class="text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-main)]">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-1.5 text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl">
			{subtitle}
		</p>
	{/if}
</div>
