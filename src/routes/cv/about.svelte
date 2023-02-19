<script>
	import Employer from './employer.svelte';
	import TextFacade from '$components/TextFacade.svelte';
	import TextGradient from '$components/TextGradient.svelte';

	import { experience } from './data';
	const current_job = experience[0];
</script>

<div id="cv-about">
	<p>
		I'm Felix. A full-stack developer for <TextGradient>industrial</TextGradient> applications based
		in Germany. Currently <TextGradient>{current_job.title}</TextGradient> at <Employer
			job={current_job}
		/>. I specialize in combining <TextGradient>domain knowledge</TextGradient> with <TextFacade
			preview="technology"
			detail="containerized microservice application build in python (FastAPI),
			PostgreSQL for cloud and on-premises deployments"
		/>.
	</p>
</div>

<style lang="scss">
	#cv-about {
		p {
			font-size: 2rem;
			margin: 10px 0;
		}

		:global(a:before) {
			content: '';
			position: absolute;
			bottom: 4px;
			left: 0;
			height: 4px;
			width: 100%;
			background: var(--text-primary);
		}

		:global(a:hover:before) {
			background: var(--accent-grad);
		}
	}
</style>
