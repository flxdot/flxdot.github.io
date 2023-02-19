<script lang="ts">
	import TextGradient from '$components/TextGradient.svelte';
	import { wrapKeyUp } from '$lib/handlers';

	let navigateHome = () => {
		window.location.href = '/';
	};
</script>

<div class="logo" on:click={navigateHome} on:keyup={wrapKeyUp(navigateHome)}>
	<span class="firstname">felix</span><span class="lastname"
		>fanghanel<TextGradient>.dev()</TextGradient></span
	>
</div>

<style lang="scss">
	.logo {
		font-family: 'Ubuntu Mono', monospace;
		font-size: 0.75rem;

		> span {
			height: 1.7rem;
			display: inline-flex;
			align-items: center;
			padding: 0 0.5rem;
		}

		span.firstname {
			box-sizing: border-box;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			border-color: var(--text-primary);
			border-style: solid;
			border: 4px 0 4px 4px;
		}

		span.lastname {
			color: var(--background);
			background-color: var(--text-primary);
		}

		span.domain {
			color: var(--accent);
		}
	}

	.logo:hover {
		cursor: pointer;
	}
</style>
