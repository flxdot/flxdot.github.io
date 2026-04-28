<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer>&copy; {currentYear}</footer>

<style lang="scss">
	footer {
		position: fixed;
		bottom: 0;

		font-size: 14px;
		color: var(--text-helper);
	}
</style>
