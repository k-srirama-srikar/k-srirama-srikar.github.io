<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import codingProfilesData from '$lib/data/coding-profiles.json';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL, createBreadcrumbSchema } from '$lib/seo';

	const breadcrumbSchema = createBreadcrumbSchema([
		{ name: 'Home', url: `${SITE_URL}/` },
		{ name: 'Coding Profiles', url: `${SITE_URL}/coding-profiles` }
	]);
</script>

<SEO
	title="Coding Profiles & Competitive Programming · Kakaraparty Srirama Srikar"
	description="Competitive programming ratings, algorithmic contest rankings, and problem-solving metrics on Codeforces (Specialist), LeetCode (Knight), AtCoder, and ICPC Amritapuri Regionals."
	canonicalUrl="{SITE_URL}/coding-profiles"
	keywords="Codeforces little_ghost, LeetCode k_srirama_srikar, AtCoder sri_sri, ICPC Amritapuri Regionals 2025, Competitive Programming, Kakaraparty Srirama Srikar, Srirama Srikar, IIT Palakkad"
	structuredData={[breadcrumbSchema]}
/>

<div class="py-8 sm:py-12 max-w-4xl mx-auto space-y-8">
	<!-- Page Header -->
	<div class="border-b border-[var(--border-subtle)] pb-6">
		<h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)]">
			Coding Profiles
		</h1>
		<p class="mt-2 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
			Competitive programming ratings, algorithmic contest performances, and problem-solving benchmarks.
		</p>
	</div>

	<!-- Profiles Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
		{#each codingProfilesData as profile}
			<div class="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--accent-border)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
				<div>
					<div class="flex items-center justify-between gap-3 mb-4">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-main)] text-[var(--text-main)]">
								<Icon name={profile.id === 'codeforces' ? 'codeforces' : profile.id === 'leetcode' ? 'leetcode' : profile.id === 'atcoder' ? 'atcoder' : 'award'} size={20} />
							</div>
							<div>
								<h2 class="text-base sm:text-lg font-semibold text-[var(--text-main)]">{profile.platform}</h2>
								<p class="text-xs font-mono text-[var(--text-muted)]">@{profile.handle}</p>
							</div>
						</div>

						{#if profile.title}
							<span class="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium {profile.badgeColor || 'text-[var(--text-main)]'} bg-[var(--bg-surface-subtle)] border border-[var(--border-main)]">
								{profile.title}
							</span>
						{/if}
					</div>

					<!-- Stats Grid -->
					<div class="grid grid-cols-2 gap-3 py-3 border-y border-[var(--border-subtle)] my-3">
						{#if profile.rating}
							<div>
								<span class="text-xs font-mono text-[var(--text-faint)] uppercase">Rating</span>
								<p class="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">{profile.rating}</p>
							</div>
						{/if}
						{#if profile.maxRating}
							<div>
								<span class="text-xs font-mono text-[var(--text-faint)] uppercase">Max Rating</span>
								<p class="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">{profile.maxRating}</p>
							</div>
						{/if}
						{#if profile.problemsSolved}
							<div>
								<span class="text-xs font-mono text-[var(--text-faint)] uppercase">Solved</span>
								<p class="text-lg sm:text-xl font-bold font-mono text-[var(--text-main)]">{profile.problemsSolved}</p>
							</div>
						{/if}
					</div>

					{#if profile.note}
						<p class="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mt-2">
							{profile.note}
						</p>
					{/if}
				</div>

				<div class="mt-5 pt-3.5 border-t border-[var(--border-subtle)]">
					<a
						href={profile.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
					>
						<span>View Official Profile</span>
						<Icon name="external-link" size={13} />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
