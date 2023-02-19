<script lang="ts">
	import Employer from './employer.svelte';
	import type WorkExperience from './types';

	export let job: WorkExperience;
</script>

<div class="container">
	<p class="dates">{job.start} - {job.end ? job.end : 'present'}</p>
	<div class="details">
		<p class="healine">{job.title} at <Employer {job} /></p>
		<p class="description">{job.description}</p>
		<p class="technology">{job.technology.map((t) => '#' + t).join(' ')}</p>
	</div>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 175px 1fr;
		column-gap: 1rem;

		font-size: 0.75em;
	}

	.technology {
		color: var(--text-helper);

		font-size: 0.75em;
	}
</style>
