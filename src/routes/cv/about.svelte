<script lang="ts">
	import Employer from './employer.svelte';
	import TextFacade from '$components/TextFacade.svelte';
	import TextGradient from '$components/TextGradient.svelte';

	import { experience } from './data';
	const current_job = experience[0];

	function scale(x: number, start: number, end: number): number {
		return start + x * (end - start);
	}

	// font-size: 48px -> 14px
	// width: 75% -> 50%
	// margin-left: 0 -> (innerWidth - selfWidth) / 2
	let windowHeight = window.innerHeight;
	let windowWidth = window.innerWidth;
	let scrollY = window.scrollY;
	let selfHeight = 0;

	let scrollProgress = 0;
	let marginTop = 0;
	let marginBottom = 0;
	let marginLeft = 24;
	let fontSize = 48;
	let width = 0.75 * windowWidth;

	$: {
		const initialMargin = windowHeight / 2 - selfHeight / 2;
		marginBottom = Math.max(0, initialMargin - scrollY);

		scrollProgress = Math.min(1, Math.max(0, 1 - marginBottom / initialMargin));

		if (marginBottom > 0) {
			marginTop = Math.max(0, initialMargin - 24 + scrollY);
		}
		fontSize = scale(scrollProgress, 48, 14);
		marginLeft = scale(scrollProgress, 24, (windowWidth - 640) / 2);
		width = scale(scrollProgress, 0.75 * windowWidth, 640);
	}
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} bind:scrollY />

<div
	id="cv-about"
	style="--mt: {marginTop}px; --mb: {marginBottom}px; --ml: {marginLeft}px; --w: {width}px; --fs: {fontSize}px; --x: {scrollProgress};"
>
	<div bind:offsetHeight={selfHeight}>
		<h2>About</h2>
		<div>
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
</div>

<style lang="scss">
	#cv-about {
		display: flex;
		align-items: center;

		font-size: var(--fs);

		& > div {
			max-width: var(--w);
			margin: var(--mt) auto var(--mb) calc(var(--ml) - 1rem);

			& > h2 {
				opacity: var(--x);
			}
		}
	}
</style>
