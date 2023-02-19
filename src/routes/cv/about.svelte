<script>
	import GradHl from './grad-hl.svelte';

	import { experience } from './data';
	import Employer from './employer.svelte';
	import PopOutDetail from './pop-out-detail.svelte';
	const current_job = experience[0];
</script>

<div id="cv-about">
	<p>
		I'm Felix. A full-stack developer for <GradHl>industrial</GradHl> applications based in Germany.
		Currently <GradHl>{current_job.title}</GradHl> at <Employer job={current_job} />. I specialize
		in combining <GradHl>domain knowledge</GradHl> with <PopOutDetail preview="technology"
			>with a strong focus on containerized microservice application build in python (FastAPI),
			PostgreSQL for cloud and on-premises deployments.</PopOutDetail
		>.
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
