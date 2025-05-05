<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	// import PelausSivu from './pelausSivu.svelte';

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

	//objektiTaulukko
	let korttiPakat: KorttiPakka[] = [
		{
			id: 1,
			nimi: 'Pehmeitä paljastuksia',
			etupuoliTW:
				'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl/30',
			takapuoliTW: 'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl/30 opacity-50',
			img: '/pics/favorite1.svg',
			alt: 'sydän',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20'
		},
		{
			id: 2,
			nimi: 'Kippis ja kulaus',
			etupuoliTW:
				'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl/30',
			takapuoliTW: 'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl/30 opacity-50',
			img: '/pics/juoma.svg',
			alt: 'tuoppi',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20'
		},
		{
			id: 3,
			nimi: 'Onko tullut kokeiltua',
			etupuoliTW:
				'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl/30',
			takapuoliTW: 'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl/30 opacity-50',
			img: '/pics/have.svg',
			alt: 'vaaka',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20'
		}
	];
	//vanha koodi ennen objektitaulukkoa
	let valitutKysymykset: Kysymykset[] = $state([]);

	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			.slice(0, 15); // ottaa 15 ensimmäistä kysymystä;
		console.log(valitutKysymykset);
		console.log(korttiPakat[valinta - 1].nimi);
		//puuttuu näkyvyystilan vaihto
		//valitun kortin propsien vieminen pelisivulle
	}
</script>

<main>
	<div>
		<!-- Kortit näkyviin eachilla -->
		<!-- Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta-->
		<Kortti
			className={korttiPakat[0].etupuoliTW}
			onclick={() => korttiPakanValinta(korttiPakat[0].id)}
			text={korttiPakat[0].nimi}
			ikoni={korttiPakat[0].img}
		></Kortti>
		<Kortti
			className={korttiPakat[1].etupuoliTW}
			onclick={() => korttiPakanValinta(korttiPakat[1].id)}
			text={korttiPakat[1].nimi}
			ikoni={korttiPakat[1].img}
		></Kortti>
		<Kortti
			className={korttiPakat[2].etupuoliTW}
			onclick={() => korttiPakanValinta(korttiPakat[2].id)}
			text={korttiPakat[2].nimi}
			ikoni={korttiPakat[2].img}
		></Kortti>
	</div>
</main>
