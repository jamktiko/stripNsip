<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	import PelausSivu from './PelausSivu.svelte';
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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl/30',
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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl/30',
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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl/30',
			takapuoliTW: 'm-10 grid max-h-80 min-h-65 max-w-50 min-w-50 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl/30 opacity-50',
			img: '/pics/have.svg',
			alt: 'vaaka',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20'
		}
	];
	//vanha koodi ennen objektitaulukkoa
	let valitutKysymykset: Kysymykset[] = $state([]);
	let ollaanPelisivulla = $state(false);
	let olaanEtusivulla = $state(true);
	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			.slice(0, 15); // ottaa 15 ensimmäistä kysymystä;
		console.log(valitutKysymykset);
		console.log(korttiPakat[valinta - 1].nimi);
		olaanEtusivulla = false;
		ollaanPelisivulla = true;
		//puuttuu näkyvyystilan vaihto
		//valitun kortin propsien vieminen pelisivulle
	}
	$inspect(valitutKysymykset);
</script>

<main>
	<div class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10">
		{#if olaanEtusivulla}
			<div class=" sm:justify-self-end">
				<!-- Kortit näkyviin eachilla -->
				<!-- Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta-->
				<Kortti
					className={korttiPakat[0].etupuoliTW}
					onclick={() => korttiPakanValinta(korttiPakat[0].id)}
					text={korttiPakat[0].nimi}
					ikoni={korttiPakat[0].img}
				></Kortti>
			</div>
			<div class=" sm:justify-items-center">
				<Kortti
					className={korttiPakat[1].etupuoliTW}
					onclick={() => korttiPakanValinta(korttiPakat[1].id)}
					text={korttiPakat[1].nimi}
					ikoni={korttiPakat[1].img}
				></Kortti>
			</div>
			<div class="sm:justify-self-start">
				<Kortti
					className={korttiPakat[2].etupuoliTW}
					onclick={() => korttiPakanValinta(korttiPakat[2].id)}
					text={korttiPakat[2].nimi}
					ikoni={korttiPakat[2].img}
				></Kortti>
			</div>
		{/if}

		{#if ollaanPelisivulla}
			<div class=" sm:justify-items-center">
				<PelausSivu
					className={korttiPakat[0].etupuoliTW}
					takapuoliTW={korttiPakat[0].takapuoliTW}
					text={korttiPakat[0].nimi}
					ikoni={korttiPakat[0].img}
					taulukko={valitutKysymykset}
				></PelausSivu>
				<div
					class="bg-tekstit font-josefin max-w-30 min-w-30 hover:shadow-xl/40 flex max-h-10 min-h-10 place-content-center rounded-xl py-2 text-white"
				>
					<span class="material-symbols-outlined md-20"> arrow_back_ios </span>
					<div>Takaisin</div>
				</div>
			</div>
		{/if}
	</div>
</main>
