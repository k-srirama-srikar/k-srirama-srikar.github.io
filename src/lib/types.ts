export interface Profile {
	fullName: string;
	displayName: string;
	positioningLine: string;
	email: string;
	location: string;
	currentStatus: string;
	resumeUrl: string;
	avatar: string;
}

export interface ExperienceEntry {
	id: string;
	company: string;
	title: string;
	location?: string;
	startDate: string;
	endDate: string | 'present';
	current?: boolean;
	logo?: string;
	website?: string;
	bullets: string[];
	skills?: string[];
}

export interface EducationEntry {
	id: string;
	institution: string;
	degree: string;
	startDate: string;
	endDate: string | 'present';
	gpa?: string;
	location?: string;
	logo?: string;
	website?: string;
	highlights?: string[];
}

export interface ProjectLinks {
	github?: string;
	backend?: string;
	gitlab?: string;
	demo?: string;
	note?: string;
}

export interface Project {
	slug: string;
	title: string;
	featured: boolean;
	startDate: string;
	endDate: string;
	stack: string[];
	summary: string;
	overview?: string;
	highlights: string[];
	approach?: string;
	links: ProjectLinks;
	hasCaseStudy: boolean;
	category?: string;
	stars?: number;
}

export interface SkillGroup {
	id: string;
	label: string;
	items: string[];
}

export interface Achievement {
	id: string;
	label: string;
	value: string;
	detail?: string;
	href?: string;
}

export interface CodingProfile {
	id: string;
	platform: string;
	handle: string;
	href: string;
	title?: string;
	rating?: string;
	maxRating?: string;
	problemsSolved?: string;
	note?: string;
	badgeColor?: string;
}

export interface RoleHistory {
	role: string;
	startDate: string;
	endDate: string | 'present';
	description?: string;
}

export interface Position {
	id: string;
	role?: string;
	org: string;
	startDate?: string;
	endDate?: string | 'present';
	description: string;
	logo?: string;
	roles?: RoleHistory[];
	highlights?: string[];
}

export interface SocialLink {
	id: string;
	label: string;
	href: string;
	icon: string;
}
