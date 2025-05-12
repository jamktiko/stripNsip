<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import type { Snippet } from 'svelte';
	import { Kayttaja } from '$lib/kayttaja.svelte';

	let { children }: { children: Snippet } = $props();
	const user = new Kayttaja();
	let teema = $state(
		'from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br'
	);
	function vaihdaTeema() {
		if (
			teema ===
			'from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br'
		) {
			teema =
				'from-taustapunanen via-taustakeltanen to-taustasininen inset-0 -z-10 min-h-screen bg-gradient-to-br';
		} else {
			teema =
				'from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br';
		}
	}
</script>

<div class={teema}>
	<button onclick={vaihdaTeema}>Teemanappula</button>
	<Header logo="./pics/logo.svg" />

	{@render children()}

	<!-- <div class="inset-0 -z-10 min-h-screen bg-gradient-to-br from-green-500 via-blue-500 to-red-500"> -->
</div>
