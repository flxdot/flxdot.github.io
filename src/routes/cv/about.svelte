<script lang="ts">
	import Employer from './employer.svelte';
	import TextFacade from '$components/TextFacade.svelte';
	import TextGradient from '$components/TextGradient.svelte';

	import { experience } from './data';
	const current_job = experience[0];

	let windowHeight = window.innerHeight;
	let scrollY = window.scrollY;
	let selfHeight = 0;
	let marginTop = 0;
	let marginBottom = 0;
	$: {
		marginBottom = windowHeight / 2 - selfHeight / 2 - scrollY;

		if (marginBottom > 0) {
			marginTop = windowHeight / 2 - selfHeight / 2 - 24 + scrollY;
			marginTop = marginTop < 0 ? 0 : marginTop;
		} else {
			marginBottom = 0;
		}
	}
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY />

<div id="cv-about" style="--margin-top: {marginTop}px; --margin-bottom: {marginBottom}px;">
	<div bind:offsetHeight={selfHeight}>
		I'm Felix. A full-stack developer for <TextGradient>industrial</TextGradient> applications based
		in Germany. Currently <TextGradient>{current_job.title}</TextGradient> at <Employer
			job={current_job}
		/>. I specialize in combining <TextGradient>domain knowledge</TextGradient> with <TextFacade
			preview="technology"
			detail="containerized microservice application build in python (FastAPI),
			PostgreSQL for cloud and on-premises deployments"
		/>.
	</div>
</div>

<style lang="scss">
	#cv-about {
		width: 75%;
		height: var(--about-height);

		display: flex;
		align-items: center;

		font-size: 2rem;

		& > div {
			margin-top: var(--margin-top);
			margin-bottom: var(--margin-bottom);
		}
	}
</style>
