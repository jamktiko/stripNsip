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
				'from-pink-400 via-sky-300 to-orange-300 inset-0 -z-10 min-h-screen bg-gradient-to-br';
		} else {
			teema =
				'from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br';
		}
	}
</script>


<div class={teema}>
	<div class="pt-5">
    <button class="flex place-content-center mx-auto py-1 border-solid border-4 border-tekstit font-josefin text-tekstit text-xl max-w-30 min-w-30 max-h-10 min-h-10 rounded-xl hover:shadow-xl/40" onclick={vaihdaTeema}>Teema</button>
    <Header logo="./pics/logo.svg" />
		</div>

    {@render children()}

	<!-- <div class="inset-0 -z-10 min-h-screen bg-gradient-to-br from-green-500 via-blue-500 to-red-500"> -->
</div>
