<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	import PeliNavigaatio from './PeliNavigaatio.svelte';
	// import { NUMBER_OF_PROCESSORS } from '$env/static/private';
	// Importit ennen tätä----- Muuttujat tämän jälkeen

	let kaikkiKysymykset: Kysymykset[] = $state([]);

	onMount(async () => {
		const response = await fetch('/data/kysymykset.json');
		if (!response.ok) {
			throw new Error('cannot fetch the data');
		}
		kaikkiKysymykset = await response.json();
	});
	$inspect(kaikkiKysymykset);
	// let valitutKysymykset: Kysymykset[] = $state([]);
	// function korttiPakanValinta() {}
</script>

<PeliNavigaatio {kaikkiKysymykset} />

<!-- <main>
	<div>
		Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta
		<Kortti className={pakka1TailWind} onclick={klikkaus1} text={pakka1Nimi} ikoni={pakka1Logo}
		></Kortti>
		<Kortti className={pakka2TailWind} onclick={klikkaus2} text={pakka2Nimi} ikoni={pakka2Logo}
		></Kortti>
		<Kortti className={pakka3TailWind} onclick={klikkaus3} text={pakka3Nimi} ikoni={pakka3Logo}
		></Kortti>
	</div>
</main> -->

<!-- {#if ollaanEtusivulla}
	<div>
		<Kortti className={pakka1TailWind} onclick={klikkaus1} text={pakka1Nimi} ikoni={pakka1Logo} />
		<Kortti className={pakka2TailWind} onclick={klikkaus2} text={pakka2Nimi} ikoni={pakka2Logo} />
		<Kortti className={pakka3TailWind} onclick={klikkaus3} text={pakka3Nimi} ikoni={pakka3Logo} />
	</div>
{:else if valittuPakka === 1}
	<div>
	<Kortti className={pakka1TailWind} onclick={() => console.log('tähän joku funktio')} text={pakka1Nimi} ikoni={pakka1Logo} />
	<button onclick={() => ollaanEtusivulla = true}>takaisin</button>
	</div>
{:else if valittuPakka === 2}
	<div>
	<Kortti className={pakka2TailWind} onclick={() => console.log('tähän joku funktio')} text={pakka2Nimi} ikoni={pakka2Logo} />
	<button onclick={() => ollaanEtusivulla = true}>takaisin</button>
	</div>
{:else if valittuPakka === 3}
	<div>
	<Kortti className={pakka3TailWind} onclick={() => console.log('tähän joku funktio')} text={pakka3Nimi} ikoni={pakka3Logo} />
	<button onclick={() => ollaanEtusivulla = true}>takaisin</button>
	</div>
{/if} -->
