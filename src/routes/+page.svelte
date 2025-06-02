<script lang="ts">
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcomeFallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';

  let titles = [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Problem Solver',
	'Machine Learning Enthusiast',
	'Book Lover',
  ];
  let display = '';
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  // Typewriter effect
  onMount(() => {
    const type = () => {
      const current = titles[index];
      if (isDeleting) {
        display = current.substring(0, charIndex--);
      } else {
        display = current.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % titles.length;
      }

      setTimeout(type, isDeleting ? 60 : 100);
    };

    type();
  });
</script>

<svelte:head>
	<title>K Srirama Srikar</title>
	<meta name="description" content="Svelte demo app" />
	
	 <!-- Preview image for social media -->
	<meta property="og:title" content="K Sriama Srikar | Portfolio" />
	<meta property="og:description" content="Explore my projects, skills, and achievements." />
	<meta property="og:image" content="/images/srirama.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://k-srirama-srikar.github.io/" />

	<!-- Twitter card (optional) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="K Srirama Srikar | Portfolio" />
	<meta name="twitter:description" content="Explore my projects, skills, and achievements." />
	<meta name="twitter:image" content="/images/srirama.png" />


</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

	</h1>

	<h2>
		Hi! I am <strong>K Srirama Srikar</strong>!
	</h2>

</section> -->

<!-- <section class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"> -->
<section class="min-h-screen  justify-center items-center text-center text-white ">

  <!-- 🌟 Glowing Blob Background -->
  <div class="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-purple-600 rounded-full opacity-30 blur-3xl mix-blend-overlay animate-pulse pointer-events-none z-0"></div>

  <div class="z-10 max-w-3xl">
    <h1 class="text-5xl sm:text-6xl font-bold leading-tight mb-6">Hi, I'm <span class="text-gray-400">K Srirama Srikar</span></h1>
    <p class="text-xl text-gray-300">A full stack developer passionate about building beautiful web experiences.</p>
  </div>

   <div class="z-10 max-w-3xl">
    <!-- <h1 class="text-5xl sm:text-6xl font-bold leading-tight mb-4">Hi, I'm <span class="text-purple-400">K Srirama Srikar</span></h1> -->
    <p class="text-xl text-gray-300 h-8">I am a <span class="text-white font-semibold">{display}</span></p>

    <!-- 🔗 Call to Action -->
   

	<div class="mt-10 text-center">
	<a 
		href="#projects"
		class="inline-block px-8 py-4 text-lg font-semibold text-white grey-gradient transform transition-all duration-300 rounded-full shadow-xl hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-inner ring-2 ring-transparent focus:outline-none focus:ring-0"
	>
		🚀 View Projects 🌟
	</a>
	</div>



	</div>

  <!-- 🔽 Scroll Down Indicator -->
  <div class="absolute bottom-10">
    <!-- <a href="#projects" class="text-purple-300 animate-bounce text-3xl">&#x25BC;</a> -->
	
	<svg class="arrows">
		<path class="a1" d="M0 0 L30 32 L60 0"></path>
		<path class="a2" d="M0 20 L30 52 L60 20"></path>
		<path class="a3" d="M0 40 L30 72 L60 40"></path>
	</svg>
</div>

</section>

<section id="about" class="min-h-screen px-8 py-20 text-white">
	<h2 class="text-4xl font-semibold mb-4">About</h2>
	<p>About content...</p>
</section>

<section id="projects" class="min-h-screen px-8 py-20 text-white ">
	<h2 class="text-4xl font-semibold mb-4">Projects</h2>
	<p>Projects content...</p>
</section>


<section id="education" class="min-h-screen px-8 py-20 text-white ">
	<h1 class="text-3xl mb-4">Education</h1>
	<p>Your academic background.</p>
</section>

<section id="experience" class="min-h-screen px-8 py-20 text-white ">
	<h1 class="text-3xl mb-4">Experience</h1>
	<p>Work experience goes here.</p>
</section>

<section id="contact" class="min-h-screen px-8 py-20 text-white ">
	<h1 class="text-3xl mb-4">Contact Me</h1>
	<p>Email or contact form.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	/* .welcome { */
		/* display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */


	 .arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
	}

	.arrows path {
	stroke: #2994D1;
	fill: transparent;
	stroke-width: 1px;  
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
	}

	@keyframes arrow
	{
	0% {opacity:0}
	40% {opacity:1}
	80% {opacity:0}
	100% {opacity:0}
	}

	@-webkit-keyframes arrow /*Safari and Chrome*/
	{
	0% {opacity:0}
	40% {opacity:1}
	80% {opacity:0}
	100% {opacity:0}
	}

	.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
	}

	.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
	}

	.arrows path.a3 { 
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
	}

</style>
