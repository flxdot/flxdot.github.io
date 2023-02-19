<script lang="ts">
	let navigateHome = () => {
		window.location.href = '/';
	};

	let keyUp = (event: KeyboardEvent) => {
		if (event.key === 'enter') {
			navigateHome();
		}
	};
</script>

<div class="logo" on:click={navigateHome} on:keyup={keyUp}>
	<span class="firstname">felix</span><span class="lastname"
		>fanghanel<span class="domain">.dev()</span></span
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
