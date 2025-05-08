<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	import PelausSivu from './PelausSivu.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import PeliNavigaatio from './PeliNavigaatio.svelte';
	import { fade, fly, slide } from 'svelte/transition';

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
			nimi: 'Näin meidän kesken',
			etupuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl hover:shadow-xl/50 ',
			takapuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhdeteksti text-tekstit shadow-xl/30',
			img: '/pics/favorite2.svg',
			alt: 'sydän',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20',
			asettelu: 'sm:justify-self-end'
		},
		{
			id: 2,
			nimi: 'Kippis ja kulaus',
			etupuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl hover:shadow-xl/50 ',
			takapuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-juompelikakkonen text-juomapeliteksti shadow-xl/30',
			img: '/pics/juoma.svg',
			alt: 'tuoppi',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20',
			asettelu: 'sm:justify-items-center'
		},
		{
			id: 3,
			nimi: 'Oletko koskaan',
			etupuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl hover:shadow-xl/50 ',
			takapuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-neverkakkonen text-neverteksti shadow-xl/30',
			img: '/pics/have.svg',
			alt: 'vaaka',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20',
			asettelu: 'sm:justify-self-start'
		}
	];
	//vanha koodi ennen objektitaulukkoa
	let valitutKysymykset: Kysymykset[] = $state([]);
	let ollaanPelisivulla = $state(false);
	let ollaanEtusivulla = $state(true);
	let valittu = $state(0);
	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			.slice(0, 15); // ottaa 15 ensimmäistä kysymystä;
		console.log(valitutKysymykset);
		console.log(korttiPakat[valinta - 1].nimi);
		ollaanEtusivulla = false;
		ollaanPelisivulla = true;
		valittu = valinta - 1;
		//puuttuu näkyvyystilan vaihto
		//valitun kortin propsien vieminen pelisivulle
	}
	$inspect(valitutKysymykset);
</script>

<main>
	{#if ollaanEtusivulla}<div
			class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10"
			in:fly={{ delay: 400, y: 50, duration: 400 }}
			out:fly={{ y: 50, duration: 300 }}
		>
			<PeliNavigaatio {korttiPakat} {korttiPakanValinta} />
		</div>
	{:else if ollaanPelisivulla}
		<div class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10">
			<div class=" sm:col-start-2 sm:justify-items-center">
				<PelausSivu
					className={korttiPakat[valittu].etupuoliTW}
					takapuoliTW={korttiPakat[valittu].takapuoliTW}
					text={korttiPakat[valittu].nimi}
					taulukko={valitutKysymykset}
					bind:ollaanEtusivulla
					bind:ollaanPelisivulla
				></PelausSivu>
			</div>
		</div>
	{/if}
</main>
