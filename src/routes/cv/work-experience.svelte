<script lang="ts">
	import Section from './section.svelte';
	import WorkExperienceItem from './work-experience-item.svelte';
	import { experience } from './data';
</script>

<Section header="Work experience">
	{#each experience as job}
		<WorkExperienceItem {job} />
	{/each}
</Section>
