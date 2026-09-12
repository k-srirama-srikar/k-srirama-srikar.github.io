/**
 * Mapping of technologies to GitHub profile shields.io badges.
 * Includes official logos and brand hex colors.
 * Unmapped skills fall back to a clean, standard badge using the skill's name.
 */

const KNOWN_BADGES: Record<string, string> = {
	// Provided Tech Stack & Languages
	'c++': 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
	'c': 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
	'python': 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
	'go': 'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
	'c#': 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white',
	'ocaml': 'https://img.shields.io/badge/OCaml-%23E98407.svg?style=for-the-badge&logo=ocaml&logoColor=white',
	'scala': 'https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white',
	'javascript': 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
	'typescript': 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
	'sql': 'https://img.shields.io/badge/SQL-%2300758F.svg?style=for-the-badge&logo=mysql&logoColor=white',

	// Agentic AI & Systems
	'langgraph': 'https://img.shields.io/badge/LangGraph-%231C3C3C.svg?style=for-the-badge&logo=langchain&logoColor=white',
	'langchain': 'https://img.shields.io/badge/LangChain-%231C3C3C.svg?style=for-the-badge&logo=langchain&logoColor=white',
	'model context protocol (mcp)': 'https://img.shields.io/badge/MCP-FastMCP-%234B32C3.svg?style=for-the-badge&logo=anthropic&logoColor=white',
	'mcp': 'https://img.shields.io/badge/MCP-FastMCP-%234B32C3.svg?style=for-the-badge&logo=anthropic&logoColor=white',
	'multi-agent systems': 'https://img.shields.io/badge/Multi--Agent%20Systems-%2310A37F.svg?style=for-the-badge&logo=openai&logoColor=white',
	'multi-agent orchestration': 'https://img.shields.io/badge/Multi--Agent%20Orchestration-%2310A37F.svg?style=for-the-badge&logo=openai&logoColor=white',
	'google gemini': 'https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white',
	'google adk': 'https://img.shields.io/badge/Google%20ADK-%234285F4.svg?style=for-the-badge&logo=google&logoColor=white',
	'agent skills': 'https://img.shields.io/badge/Agent%20Skills-%236B46C1.svg?style=for-the-badge&logo=probot&logoColor=white',
	'rag': 'https://img.shields.io/badge/RAG-%230052CC.svg?style=for-the-badge&logo=rag&logoColor=white',
	'chromadb': 'https://img.shields.io/badge/ChromaDB-%23FC521F.svg?style=for-the-badge&logoColor=white',
	'elastic': 'https://img.shields.io/badge/Elastic-%230377CC.svg?style=for-the-badge&logo=elasticsearch&logoColor=white',

	// Data Infrastructure & Systems
	'apache spark': 'https://img.shields.io/badge/Apache%20Spark-FDEE21?style=for-the-badge&logo=apachespark&logoColor=black',
	'pyspark': 'https://img.shields.io/badge/PySpark-%23E25A1C.svg?style=for-the-badge&logo=apachespark&logoColor=white',
	'apache iceberg': 'https://img.shields.io/badge/Apache%20Iceberg-%231F425F.svg?style=for-the-badge&logo=apache&logoColor=white',
	'apache kafka': 'https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka',
	'apache hive': 'https://img.shields.io/badge/Apache%20Hive-FDEE21?style=for-the-badge&logo=apachehive&logoColor=black',
	'apache hadoop': 'https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black',
	'apache airflow': 'https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white',
	'apache hudi': 'https://img.shields.io/badge/Apache%20Hudi-%232496ED.svg?style=for-the-badge&logo=apache&logoColor=white',
	'elasticsearch': 'https://img.shields.io/badge/elasticsearch-%230377CC.svg?style=for-the-badge&logo=elasticsearch&logoColor=white',
	'postgres': 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
	'postgresql': 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
	'postgis': 'https://img.shields.io/badge/PostGIS-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white',
	'mongodb': 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',

	// Frameworks & Backend
	'.net': 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
	'fastapi': 'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi',
	'django': 'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white',
	'flask': 'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white',
	'svelte': 'https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white',
	'react': 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
	'node.js': 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
	'nodejs': 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
	'vercel': 'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
	'codeberg': 'https://img.shields.io/badge/Codeberg-2185D0?style=for-the-badge&logo=Codeberg&logoColor=white',

	// Developer Tools & DevOps
	'linux': 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
	'docker': 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
	'kubernetes': 'https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white',
	'git': 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
	'cmake': 'https://img.shields.io/badge/CMake-%23064F8C.svg?style=for-the-badge&logo=cmake&logoColor=white',
	'dune': 'https://img.shields.io/badge/Dune-%23E98407.svg?style=for-the-badge&logo=ocaml&logoColor=white',
	'jenkins': 'https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white',
	'ci/cd': 'https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white',
	'postman': 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
	'bash': 'https://img.shields.io/badge/Bash-000000?style=for-the-badge&logo=GNU%20Bash&logoColor=white',
	'nvidia': 'https://img.shields.io/badge/cuda-000000.svg?style=for-the-badge&logo=nVIDIA&logoColor=green'
};

/**
 * Returns the shields.io badge object for a skill.
 * If known, returns the branded shields.io URL.
 * Otherwise, generates a clean badge in a neutral color with the skill name.
 */
export function getSkillBadge(name: string): { url: string; alt: string } | null {
	if (!name) return null;
	const trimmed = name.trim();
	if (!trimmed) return null;
	const key = trimmed.toLowerCase();

	if (KNOWN_BADGES[key]) {
		return { url: KNOWN_BADGES[key], alt: trimmed };
	}

	// Escape dashes for shields.io format: "-" becomes "--"
	const escaped = trimmed.replace(/-/g, '--');
	const encoded = encodeURIComponent(escaped);

	return {
		url: `https://img.shields.io/badge/${encoded}-2b3042?style=for-the-badge&logoColor=white`,
		alt: trimmed
	};
}
