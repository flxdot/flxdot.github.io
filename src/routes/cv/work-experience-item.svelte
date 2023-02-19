<script lang="ts">
	import Employer from './employer.svelte';
	import type WorkExperience from './types';

	export let job: WorkExperience;
</script>

<div>
	<p>{job.start} - {job.end ? job.end : 'present'}</p>
	<p class="healine">{job.title} at <Employer {job} /></p>
	<p class="description">{job.description}</p>
</div>
