<script lang="ts">
	import Icon from './Icon.svelte';
	import profileData from '$lib/data/profile.json';
	import socialsData from '$lib/data/socials.json';
</script>

<section id="hero" class="pt-6 sm:pt-10 pb-12 border-b border-[var(--border-subtle)]">
	<div class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
		<!-- Left Content -->
		<div class="flex-1 space-y-3.5 text-center md:text-left">
			<!-- Main Title & Name -->
			<div>
				<h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)] leading-tight break-words">
					{profileData.fullName}
				</h1>
				<p class="mt-1 font-mono text-xs sm:text-sm text-[var(--accent)] font-medium">
					Software Engineer · Systems, Data & Agentic AI
				</p>
			</div>

			<!-- Location & Quick Meta -->
			<div class="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-[var(--text-faint)] font-mono">
				<div class="flex items-center gap-1.5">
					<Icon name="map-pin" size={13} class="text-[var(--text-muted)]" />
					<span>{profileData.location}</span>
				</div>
				<span class="hidden sm:inline">·</span>
				<div class="flex items-center gap-1.5">
					<Icon name="terminal" size={13} class="text-[var(--text-muted)]" />
					<span>Incoming Data Engineer @ Texas Instruments</span>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
				<a
					href="#projects"
					class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-[var(--accent-text)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-2xs transition-all hover:translate-y-[-1px]"
				>
					<span>Projects</span>
					<Icon name="arrow-right" size={13} />
				</a>
				<a
					href={profileData.resumeUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] hover:border-[var(--accent)] shadow-2xs transition-all hover:translate-y-[-1px]"
				>
					<Icon name="download" size={13} />
					<span>Resume</span>
				</a>
				<a
					href="mailto:{profileData.email}"
					class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors"
				>
					<Icon name="mail" size={13} />
					<span>Contact</span>
				</a>
			</div>

			<!-- Social Icons Row -->
			<div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
				{#each socialsData as social}
					<a
						href={social.href}
						target={social.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
						class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-all"
					>
						<Icon name={social.icon} size={13} />
						<span>{social.label}</span>
					</a>
				{/each}
			</div>
		</div>

		<!-- Right: Circular Avatar -->
		<div class="relative shrink-0 flex items-center justify-center">
			<div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-[var(--bg-surface)] border-2 border-[var(--border-main)] shadow-md bg-[var(--bg-surface)] group">
				<img
					src={profileData.avatar}
					alt={profileData.fullName}
					class="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
				/>
			</div>
		</div>
	</div>
</section>
