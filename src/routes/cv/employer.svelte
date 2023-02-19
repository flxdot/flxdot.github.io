<script lang="ts">
	import type WorkExperience from './types';

	export let job: WorkExperience;
</script>

{#if job.url}
	<a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
{:else}
	{job.company}
{/if}
