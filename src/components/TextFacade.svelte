<script lang="ts">
	import { wrapKeyUp } from '$lib/handlers';
	import TextGradient from './TextGradient.svelte';
	import Typewriter, { type TypeWriterController } from './Typewriter.svelte';

	export let preview: string;
	export let detail: string;

	let typeWriter: TypeWriterController;

	let isExpanded = true;
	function expand() {
		isExpanded = !isExpanded;
		if (!isExpanded) {
			typeWriter.start();
		} else {
			typeWriter.stop();
		}
	}
</script>

<span class="pointer" on:click={expand} on:keyup={wrapKeyUp(expand)}>
	{#if isExpanded}<TextGradient>{preview}</TextGradient>{/if}<Typewriter
		text={detail}
		bind:controller={typeWriter}
	/>
</span>

<style>
	.pointer {
		cursor: pointer;
	}
</style>
