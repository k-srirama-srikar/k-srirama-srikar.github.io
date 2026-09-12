<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	const points = [
		'Final-year B.Tech in Data Science & Engineering at IIT Palakkad.',
		'Incoming Data Engineer at Texas Instruments. Former Summer Intern at Texas Instruments (Data & Agentic Platforms Team).',
		'My technical interests include Distributed Systems, Agentic AI, Compiler Design, Software Engineering, and Data Engineering.',
		'I serve as the Head of Yet Another Coding Club (YACC), the official programming club of IIT Palakkad.'
	];
</script>

<section id="about" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<SectionHeader title="About" />

	<div class="p-5 sm:p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] shadow-xs">
		<ul class="space-y-2.5">
			{#each points as point}
				<li class="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
					<span class="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--text-faint)] shrink-0"></span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

