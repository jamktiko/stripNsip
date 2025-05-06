<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import Kortti from './Kortti.svelte';
	import PelausSivu from './PelausSivu.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import PeliNavigaatio from './PeliNavigaatio.svelte';
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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhde text-parisuhdeteksti shadow-xl hover:shadow-xl/50 transition delay-160 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110',
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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-juomapeli text-juomapeliteksti shadow-xl hover:shadow-xl/50 transition delay-160 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110',
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
			nimi: 'Onko tullut kokeiltua',
			etupuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-never text-neverteksti shadow-xl hover:shadow-xl/50 transition delay-160 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110',
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
	let olaanEtusivulla = $state(true);
	let valittu = $state(0);
	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			.slice(0, 15); // ottaa 15 ensimmäistä kysymystä;
		console.log(valitutKysymykset);
		console.log(korttiPakat[valinta - 1].nimi);
		olaanEtusivulla = false;
		ollaanPelisivulla = true;
		valittu = valinta - 1;
		//puuttuu näkyvyystilan vaihto
		//valitun kortin propsien vieminen pelisivulle
	}
	$inspect(valitutKysymykset);
</script>

<main>
	<div class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10">
		{#if olaanEtusivulla}
			<PeliNavigaatio {korttiPakat} {korttiPakanValinta} />
		{:else if ollaanPelisivulla}
			<div class=" sm:justify-items-center col-start-2">
				<PelausSivu
					className={korttiPakat[valittu].etupuoliTW}
					takapuoliTW={korttiPakat[valittu].takapuoliTW}
					text={korttiPakat[valittu].nimi}
					
					taulukko={valitutKysymykset}
				></PelausSivu>
			</div>
		{/if}
	</div>
</main>
