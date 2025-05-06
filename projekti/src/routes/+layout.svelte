<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br"
>
	<Header otsikko="Mitä peliä haluat pelata?" logo="./pics/logo.svg" />

	{@render children()}
</div>
