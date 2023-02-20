<script lang="ts">
	import './styles.scss';
	import '@fontsource/roboto';
	import '@fontsource/ubuntu-mono';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { afterUpdate } from 'svelte';
	import { markExternalLinks } from '$lib/fixes';

	afterUpdate(() => {
		markExternalLinks();
	});
</script>

<div id="app-container">
	<Header />

	<div id="content">
		<slot />
	</div>

	<Footer />
</div>

<style>
	#app-container {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(#app-container > *) {
		padding: 1rem;
		width: calc(100% - 2rem);
	}
</style>
