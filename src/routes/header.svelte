<script>
	import Logo from './logo.svelte';
	import github from '$lib/images/github.svg';
	import instagram from '$lib/images/instagram.svg';
</script>

<header>
	<Logo />

	<div id="header-links-container">
		<div id="header-links">
			<a href="https://github.com/flxdot" target="_blank" rel="noreferrer">
				<img src={github} alt="GitHub" />
			</a>
			<a href="https://instagram.com/flxdot" target="_blank" rel="noreferrer">
				<img src={instagram} alt="Instagram" />
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

		img {
			height: 1rem;
			width: 1rem;
		}
	}
</style>
