<script lang="ts">
	import Icon from './Icon.svelte';
	import profileData from '$lib/data/profile.json';
	import socialsData from '$lib/data/socials.json';

	const currentYear = new Date().getFullYear();
</script>

<footer id="contact" class="mt-20 border-t border-[var(--border-main)] bg-[var(--bg-surface)] py-16 transition-colors">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-[var(--border-subtle)]">
			<!-- Left info -->
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<img src={profileData.avatar} alt={profileData.displayName} class="w-10 h-10 rounded-full object-cover ring-1 ring-[var(--border-main)]" />
					<div>
						<h3 class="text-lg font-bold text-[var(--text-main)]">{profileData.fullName}</h3>
						<p class="text-xs text-[var(--text-faint)] font-mono">{profileData.currentStatus}</p>
					</div>
				</div>
				<p class="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
					Open to software engineering and data engineering opportunities.
				</p>
			</div>

			<!-- Right contact actions -->
			<div class="flex flex-col md:items-end justify-center space-y-4">
				<a
					href="mailto:{profileData.email}"
					class="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-base font-semibold text-[var(--accent-text)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-xs transition-all hover:translate-y-[-1px]"
				>
					<Icon name="mail" size={18} />
					<span>{profileData.email}</span>
				</a>

				<div class="flex flex-wrap items-center gap-2 pt-2">
					{#each socialsData as social}
						<a
							href={social.href}
							target={social.href.startsWith('mailto:') ? undefined : '_blank'}
							rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
							class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-page)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors"
						>
							<Icon name={social.icon} size={14} />
							<span>{social.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-faint)] font-mono">
			<p>© {currentYear} {profileData.fullName}. All rights reserved.</p>
			<p class="flex items-center gap-2">
				<span>Designed with Svelte</span>
				<span>·</span>
				<span>Made with </span>
				<span>·</span>
				<a href="https://github.com/k-srirama-srikar/k-srirama-srikar.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--accent)] underline transition-colors">
					View Source
				</a>
			</p>
		</div>
	</div>
</footer>
