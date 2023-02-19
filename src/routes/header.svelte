<script>
	import Logo from './logo.svelte';
	import Github from '$lib/images/github.svelte';
	import Instagram from '$lib/images/instagram.svelte';
</script>

<header>
	<Logo />

	<div id="header-links-container">
		<div id="header-links">
			<a href="https://github.com/flxdot" target="_blank" rel="noreferrer" class="social-icon">
				<Github />
			</a>
			<a href="https://instagram.com/flxdot" target="_blank" rel="noreferrer" class="social-icon">
				<Instagram />
			</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: relative;
	}

	#header-links-container {
		display: flex;
		align-items: center;
		height: 100%;
		position: absolute;
		right: 1rem;
		top: 0;
	}

	#header-links {
		display: flex;
		justify-content: space-between;
		column-gap: 0.5rem;

		line-height: 1rem;

		a {
			height: 1rem;
		}
	}

	.social-icon {
		height: 1rem;
		width: 1rem;
	}

	:global(.social-icon svg path) {
		fill: var(--text-primary);
	}

	:global(.social-icon:hover path) {
		fill: var(--accent);
	}
</style>
