<div class="logo">
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
			border-color: var(--font-color);
			border-style: solid;
			border: 4px 0 4px 4px;
		}

		span.lastname {
			color: var(--background);
			background-color: var(--font-color);
		}

		span.domain {
			color: var(--accent);
		}
	}
</style>
