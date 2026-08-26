import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Project } from '$lib/types';
import rawProjects from '$lib/data/projects.json';

const projects = rawProjects as Project[];

export const entries: EntryGenerator = () => {
	return projects.map((project) => ({
		slug: project.slug
	}));
};

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
