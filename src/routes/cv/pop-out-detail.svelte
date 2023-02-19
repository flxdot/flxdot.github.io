<script lang="ts">
	import { wrapKeyUp } from '$lib/handlers';
	import GradHl from './grad-hl.svelte';

	export let preview: string;

	let isExpanded = false;
	function expand() {
		isExpanded = !isExpanded;
	}
</script>

<span class="clickable" on:click={expand} on:keyup={wrapKeyUp(expand)}
	><GradHl>{preview}</GradHl></span
>{#if isExpanded}&nbsp;<slot />{/if}

<style lang="scss">
	.clickable {
		cursor: pointer;
	}
</style>
