<script lang="ts">
	import { wrapKeyUp } from '$lib/handlers';
	import TextGradient from './TextGradient.svelte';
	import Typewriter from './Typewriter.svelte';

	export let preview: string;
	export let detail: string;

	let typeWriter;

	let isExpanded = true;
	function expand() {
		isExpanded = !isExpanded;
		isExpanded ? typeWriter.start() : typeWriter.stop();
	}
</script>

<span on:click={expand} on:keyup={wrapKeyUp(expand)}>
	{#if isExpanded}<TextGradient>{preview}</TextGradient>{/if}<Typewriter
		text={detail}
		bind:controller={typeWriter}
	/>
</span>
