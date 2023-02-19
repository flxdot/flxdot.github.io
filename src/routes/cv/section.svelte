<script lang="ts">
	export let header: string;
</script>

<section>
	<h2>{header}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	h2 {
		font-size: 1rem;
		font-weight: var(--font-weight-normal);
	}
</style>
