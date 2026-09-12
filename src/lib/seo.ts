import profileData from '$lib/data/profile.json';
import socialsData from '$lib/data/socials.json';

export const SITE_URL = 'https://sriramasrikar.dev';
export const GITHUB_IO_URL = 'https://k-srirama-srikar.github.io';
export const DEFAULT_AVATAR = `${SITE_URL}/images/c2img.png`;

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${SITE_URL}/#person`,
	name: profileData.fullName,
	alternateName: [
		'Srirama Srikar',
		'K Srirama Srikar',
		'Srikar Kakaraparty',
		'Srikar',
		'little_ghost'
	],
	url: `${SITE_URL}/`,
	image: DEFAULT_AVATAR,
	email: `mailto:${profileData.email}`,
	jobTitle: 'Software Engineer',
	description: profileData.positioningLine,
	affiliation: {
		'@type': 'CollegeOrUniversity',
		name: 'Indian Institute of Technology Palakkad',
		alternateName: 'IIT Palakkad',
		url: 'https://iitpkd.ac.in'
	},
	alumniOf: [
		{
			'@type': 'CollegeOrUniversity',
			name: 'Indian Institute of Technology Palakkad',
			alternateName: 'IIT Palakkad',
			url: 'https://iitpkd.ac.in'
		}
	],
	sameAs: [
		GITHUB_IO_URL,
		'https://github.com/k-srirama-srikar',
		'https://linkedin.com/in/srirama-srikar',
		'https://gitlab.com/ksriramasrikar',
		'https://codeberg.org/sri-sri',
		'https://codeforces.com/profile/little_ghost',
		'https://leetcode.com/k_srirama_srikar',
		'https://atcoder.jp/users/sri_sri'
	],
	knowsAbout: [
		'Software Engineering',
		'Data Structures and Algorithms',
		'Systems Programming',
		'Compilers',
		'Distributed Systems',
		'Apache Spark',
		'Apache Iceberg',
		'Apache Kafka',
		'C++',
		'OCaml',
		'Go',
		'Python',
		'PostgreSQL',
		'Competitive Programming'
	]
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${SITE_URL}/#website`,
	url: `${SITE_URL}/`,
	name: 'Kakaraparty Srirama Srikar · Portfolio',
	alternateName: [
		'Srirama Srikar Portfolio',
		'Srikar IIT Palakkad',
		'k-srirama-srikar.github.io'
	],
	description: 'Official portfolio and software engineering projects of Kakaraparty Srirama Srikar.',
	author: {
		'@id': `${SITE_URL}/#person`
	},
	inLanguage: 'en-US'
};

export const profilePageSchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	'@id': `${SITE_URL}/`,
	url: `${SITE_URL}/`,
	name: 'Kakaraparty Srirama Srikar · Software Engineer Portfolio',
	description: profileData.positioningLine,
	mainEntity: {
		'@id': `${SITE_URL}/#person`
	},
	isPartOf: {
		'@id': `${SITE_URL}/#website`
	}
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, idx) => ({
			'@type': 'ListItem',
			position: idx + 1,
			name: item.name,
			item: item.url
		}))
	};
}
