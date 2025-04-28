<script lang="ts">
	import Kortti from './Kortti.svelte';
	let pakka1 = $state('parisuhdepeli');
	let pakka2 = $state('Juoma');
	let pakka3 = $state('NeverhaveIever');
	function klikkaus() {
		console.log('toimii vieläkin');
	}
</script>

<main>
	<Kortti onclick={klikkaus} text={pakka1}></Kortti>
	<Kortti onclick={klikkaus} text={pakka2}></Kortti>
	<Kortti onclick={klikkaus} text={pakka3}></Kortti>
</main>

<style>
</style>
