<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	let kaikkiKysymykset: Kysymykset[] = $state([]);
	onMount(async () => {
		const response = await fetch('/data/kysymykset.json');
		if (!response.ok) {
			throw new Error('cannot fetch the data');
		}
		kaikkiKysymykset = await response.json();
	});
	$inspect(kaikkiKysymykset);
	let pakka1Nimi = $state('Pehmeitä paljastuksia');
	let pakka2Nimi = $state('Kippis ja kulaus');
	let pakka3Nimi = $state('Onko tullut kokeiltua?');
	let pakka1TailWind = $state(
		'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl/30'
	);
	let pakka2TailWind = $state(
		'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl/30'
	);
	let pakka3TailWind = $state(
		'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl/30'
	);

	let pakka1Logo = $state('material-symbols-outlined md-75');
	let pakka2Logo = $state('material-symbols-outlined md-75');
	let pakka3Logo = $state('material-symbols-outlined md-75');

	function klikkaus() {
		console.log('toimii vieläkin');
	}
</script>

<main>
	<div>
		<!-- Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta-->
		<Kortti className={pakka1TailWind} onclick={klikkaus} text={pakka1Nimi} ikoni={pakka1Logo}
		></Kortti>
		<Kortti className={pakka2TailWind} onclick={klikkaus} text={pakka2Nimi} ikoni={pakka2Logo}
		></Kortti>
		<Kortti className={pakka3TailWind} onclick={klikkaus} text={pakka3Nimi} ikoni={pakka3Logo}
		></Kortti>
	</div>
</main>
