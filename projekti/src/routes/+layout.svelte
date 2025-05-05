<script lang="ts">
	import '../app.css';
	import Header from "./Header.svelte";
	// import PeliNavigaatio from './PeliNavigaatio.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Header otsikko="Mitä peliä haluat pelata?" logo="./pics/logo.svg" />

<!-- <PeliNavigaatio /> -->

{@render children()}
