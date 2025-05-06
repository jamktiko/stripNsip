<div class=" inset-0 -z-10 bg-gradient-to-br from-taustakeltanen via-taustasininen to-taustapunanen"></div>
 <script lang="ts">
	import '../app.css';
	import Header from "./Header.svelte";
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>


<Header otsikko="Mitä peliä haluat pelata?" logo="./pics/logo.svg" />


{@render children()}


