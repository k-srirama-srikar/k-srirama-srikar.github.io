<script lang="ts">
	let { name, size = 18, class: className = '' }: { name: string; size?: number; class?: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="inline-block shrink-0 {className}"
	aria-hidden="true"
>
	{#if name === 'github'}
		<path
			d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
		/>
	{:else if name === 'linkedin'}
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x="2" y="9" width="4" height="12" />
		<circle cx="4" cy="4" r="2" />
	{:else if name === 'gitlab'}
		<path
			d="m22 13.29-1.33-4.1a1.45 1.45 0 0 0-2.76-.08L16.2 13.2H7.8L6.09 9.11a1.45 1.45 0 0 0-2.76.08L2 13.29a2.3 2.3 0 0 0 .84 2.58l9.16 6.66 9.16-6.66a2.3 2.3 0 0 0 .84-2.58Z"
		/>
	{:else if name === 'codeberg'}
		<path
			fill="currentColor"
			stroke="none"
			d="M11.999.747A11.974 11.974 0 0 0 0 12.75c0 2.254.635 4.465 1.833 6.376L11.837 6.19c.072-.092.251-.092.323 0l4.178 5.402h-2.992l.065.239h3.113l.882 1.138h-3.674l.103.374h3.86l.777 1.003h-4.358l.135.483h4.593l.695.894h-5.038l.165.589h5.326l.609.785h-5.717l.182.65h6.038l.562.727h-6.397l.192.684h6.721l.519.673h-7.011l.206.732h7.336l.481.621h-7.625l.226.804h7.958l.436.564h-8.257l.245.871h8.583l.389.502h-8.883l.265.943h9.213l.337.435h-9.516l.286 1.018h9.845l.281.363A11.974 11.974 0 0 0 24 12.75c0-6.627-5.373-12-12-12Z"
		/>
	{:else if name === 'mail'}
		<rect width="20" height="16" x="2" y="4" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	{:else if name === 'external-link'}
		<path d="M15 3h6v6" />
		<path d="M10 14 21 3" />
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
	{:else if name === 'download'}
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" x2="12" y1="15" y2="3" />
	{:else if name === 'arrow-right'}
		<path d="M5 12h14" />
		<path d="m12 5 7 7-7 7" />
	{:else if name === 'arrow-left'}
		<path d="m12 19-7-7 7-7" />
		<path d="M19 12H5" />
	{:else if name === 'chevron-down'}
		<path d="m6 9 6 6 6-6" />
	{:else if name === 'chevron-up'}
		<path d="m18 15-6-6-6 6" />
	{:else if name === 'sun'}
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="m4.93 4.93 1.41 1.41" />
		<path d="m17.66 17.66 1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="m6.34 17.66-1.41 1.41" />
		<path d="m19.07 4.93-1.41 1.41" />
	{:else if name === 'moon'}
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	{:else if name === 'menu'}
		<line x1="4" x2="20" y1="12" y2="12" />
		<line x1="4" x2="20" y1="6" y2="6" />
		<line x1="4" x2="20" y1="18" y2="18" />
	{:else if name === 'close'}
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	{:else if name === 'codeforces'}
		<!-- Codeforces 3 bar icon -->
		<path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5Z" fill="currentColor" stroke="none"/>
		<path d="M12 3.5a1.5 1.5 0 0 1 1.5 1.5v11.5a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5Z" fill="currentColor" stroke="none"/>
		<path d="M19.5 11.5a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-3 0V13a1.5 1.5 0 0 1 1.5-1.5Z" fill="currentColor" stroke="none"/>
	{:else if name === 'leetcode'}
		<!-- LeetCode brackets/curly icon -->
		<path d="M16.1 4.5a1.5 1.5 0 0 1 2.12 0l1.28 1.28a1.5 1.5 0 0 1 0 2.12l-7.78 7.78a2.5 2.5 0 0 1-3.54 0L4.5 12.0a2.5 2.5 0 0 1 0-3.54l3.68-3.68a1.5 1.5 0 0 1 2.12 2.12L7.33 9.87a.5.5 0 0 0 0 .71l2.97 2.97a.5.5 0 0 0 .71 0l6.37-6.37a1.5 1.5 0 0 1 .72-.68Z" fill="currentColor" stroke="none"/>
		<line x1="8" y1="18" x2="16" y2="18" stroke-width="2.5"/>
	{:else if name === 'atcoder'}
		<!-- AtCoder geometric A shape -->
		<path d="M12 3 L3 19 L8 19 L12 11 L16 19 L21 19 Z" fill="currentColor" stroke="none"/>
	{:else if name === 'terminal'}
		<polyline points="4 17 10 11 4 5" />
		<line x1="12" x2="20" y1="19" y2="19" />
	{:else if name === 'map-pin'}
		<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
		<circle cx="12" cy="10" r="3" />
	{:else if name === 'calendar'}
		<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
		<line x1="16" x2="16" y1="2" y2="6" />
		<line x1="8" x2="8" y1="2" y2="6" />
		<line x1="3" x2="21" y1="10" y2="10" />
	{:else if name === 'award'}
		<circle cx="12" cy="8" r="6" />
		<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
	{:else if name === 'check'}
		<polyline points="20 6 9 17 4 12" />
	{:else}
		<circle cx="12" cy="12" r="10" />
	{/if}
</svg>
