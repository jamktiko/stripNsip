<script lang="ts">
	import Kortti from './Kortti.svelte';

	function klikkaus() {
		console.log('toimii vieläkin');
	}
</script>

<button
	class=" min-h-65 max-w-50 min-w-50 text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white"
	onclick={klikkaus}>paina tätä</button
>

<style>
</style>
