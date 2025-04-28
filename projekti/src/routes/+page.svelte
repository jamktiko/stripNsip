<script lang="ts">
	import Kortti from './Kortti.svelte';
	let pakka1Nimi = $state('parisuhdepeli');
	let pakka2Nimi = $state('Juoma');
	let pakka3Nimi = $state('NeverhaveIever');
	let pakka1TailWind = $state(
		'bg-blue-500 min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	let pakka2TailWind = $state(
		'bg-red-500 min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	let pakka3TailWind = $state(
		'bg-parisuhde min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	function klikkaus() {
		console.log('toimii vieläkin');
	}
</script>

<main>
	<div></div>
	<!-- Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta-->
	<Kortti className={pakka1TailWind} onclick={klikkaus} text={pakka1Nimi}></Kortti>
	<Kortti className={pakka2TailWind} onclick={klikkaus} text={pakka2Nimi}></Kortti>
	<Kortti className={pakka3TailWind} onclick={klikkaus} text={pakka3Nimi}></Kortti>
</main>

<style>
	/* @theme {
		--font-josefin: 'Josefin Sans', sans-serif;
		--color-parisuhde: #ef476f;
		--color-parisuhdeteksti: #ffe4ef;
		--color-juomapeli: #ffd166;
		--color-juompelikakkonen: #ffeab9;
		--color-juomapeliteksti: #482219;
		--color-neverteksti: #1c3144;
		--color-never: #06d6a0;
		--color-neverkakkonen: #b0f1e0;
		--color-tekstit: #494949;
		--color-taustasininen: #cde8f1;
		--color-taustapunanen: #ffe7ed;
		--color-taustakeltanen: #fcffd6;
	} */
</style>
