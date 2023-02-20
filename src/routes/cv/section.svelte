<script lang="ts">
	export let header: string;
</script>

<section>
	<h2>{header}</h2>
	<div>
		<slot />
	</div>
</section>
