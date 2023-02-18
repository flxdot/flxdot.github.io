<script>
	import GradHl from './grad-hl.svelte';
</script>

<div id="cv-about">
	<p>
		I'm Felix. A full-stack developer for <GradHl>industrial</GradHl> applications based in Germany.
		Currently <GradHl>Lead Software Engineer</GradHl> at
		<a href="http://nitrex.com" target="_blank" rel="noreferrer">Nitrex</a>. I specialize in
		combining <GradHl>domain knowledge</GradHl> with <GradHl>technology</GradHl>.
	</p>
</div>

<style>
	#cv-about p {
		font-size: 2rem;
		margin: 10px 0;
	}

	a:before {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 0;
		height: 4px;
		width: 100%;
		background: var(--font-color);
	}

	a:hover:before {
		background: var(--accent-grad);
	}
</style>
