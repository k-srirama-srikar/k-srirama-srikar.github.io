<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import EducationCard from '$lib/components/EducationCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SkillGroup from '$lib/components/SkillGroup.svelte';
	import AchievementCard from '$lib/components/AchievementCard.svelte';
	import PositionCard from '$lib/components/PositionCard.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import type { ExperienceEntry, EducationEntry, Project, SkillGroup as SkillGroupType, Achievement, Position } from '$lib/types';

	import rawExperience from '$lib/data/experience.json';
	import rawEducation from '$lib/data/education.json';
	import rawProjects from '$lib/data/projects.json';
	import rawSkills from '$lib/data/skills.json';
	import rawAchievements from '$lib/data/achievements.json';
	import rawPositions from '$lib/data/positions.json';

	import SEO from '$lib/components/SEO.svelte';
	import { SITE_URL, personSchema, websiteSchema, profilePageSchema } from '$lib/seo';

	const experienceData = rawExperience as ExperienceEntry[];
	const educationData = rawEducation as EducationEntry[];
	const projectsData = rawProjects as Project[];
	const skillsData = rawSkills as SkillGroupType[];
	const achievementsData = rawAchievements as Achievement[];
	const positionsData = rawPositions as Position[];

	const featuredProjects = projectsData.filter((p) => p.featured);

	let showMoreEducation = $state(false);
	const primaryEducation = educationData.filter((e) => e.id === 'iit-palakkad');
	const secondaryEducation = educationData.filter((e) => e.id !== 'iit-palakkad');
</script>

<SEO
	title="Kakaraparty Srirama Srikar | Software Engineer"
	description="Official portfolio of Kakaraparty Srirama Srikar, Software Engineer and B.Tech Data Science & Engineering student at IIT Palakkad. Incoming Data Engineer at Texas Instruments."
	canonicalUrl="{SITE_URL}/"
	structuredData={[personSchema, websiteSchema, profilePageSchema]}
/>

<!-- 1. Hero Section -->
<Hero />

<!-- 2. About Section -->
<About />

<!-- 3. Experience Section -->
<section id="experience" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<SectionHeader title="Experience" />
	<div class="space-y-4">
		{#each experienceData as exp}
			<ExperienceCard entry={exp} />
		{/each}
	</div>
</section>

<!-- 4. Education Section -->
<section id="education" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<SectionHeader title="Education" />
	<div class="space-y-3.5">
		{#each primaryEducation as edu}
			<EducationCard entry={edu} />
		{/each}

		{#if secondaryEducation.length > 0}
			<div class="pt-2">
				<button
					type="button"
					onclick={() => (showMoreEducation = !showMoreEducation)}
					class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-main)] transition-colors shadow-2xs"
					aria-expanded={showMoreEducation}
				>
					<Icon name={showMoreEducation ? 'chevron-up' : 'chevron-down'} size={13} />
					<span>{showMoreEducation ? 'View Less' : 'View More'}</span>
				</button>

				{#if showMoreEducation}
					<div class="mt-4 space-y-4">
						{#each secondaryEducation as edu}
							<EducationCard entry={edu} />
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>

<!-- 5. Featured Projects Section -->
<section id="projects" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<div class="flex items-center justify-between gap-4 mb-5">
		<h2 class="text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-main)]">
			Projects
		</h2>

		<a
			href="/projects"
			class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
		>
			<span>All Projects</span>
			<Icon name="arrow-right" size={14} class="group-hover:translate-x-0.5 transition-transform" />
		</a>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		{#each featuredProjects as project}
			<ProjectCard {project} variant="featured" />
		{/each}
	</div>
</section>

<!-- 6. Skills Section -->
<section id="skills" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<SectionHeader title="Skills" />
	<div class="space-y-3.5">
		{#each skillsData as group}
			<SkillGroup {group} />
		{/each}
	</div>
</section>

<!-- 7. Leadership Section -->
<section id="leadership" class="py-10 border-b border-[var(--border-subtle)] scroll-mt-20">
	<SectionHeader title="Leadership & Positions" />
	<div class="space-y-4">
		{#each positionsData as position}
			<PositionCard {position} />
		{/each}
	</div>
</section>

<!-- 8. Achievements Section -->
<section id="achievements" class="py-10 scroll-mt-20">
	<div class="flex items-center justify-between gap-4 mb-5">
		<h2 class="text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-main)]">
			Achievements
		</h2>

		<a
			href="/coding-profiles"
			class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
		>
			<span>Coding Profiles</span>
			<Icon name="arrow-right" size={14} class="group-hover:translate-x-0.5 transition-transform" />
		</a>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
		{#each achievementsData as achievement}
			<AchievementCard {achievement} />
		{/each}
	</div>
</section>
