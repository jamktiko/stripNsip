<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import PelausSivu from './PelausSivu.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import PelinValinta from './PelinValinta.svelte';
	import { Kayttaja } from '$lib/kayttaja.svelte';
	import { fade } from 'svelte/transition';

	// Importit ennen tätä----- Muuttujat tämän jälkeen

	let kaikkiKysymykset: Kysymykset[] = $state([]); //alustetaan kaikkiKysymykset tyhjällä taulukolla

	onMount(async () => {
		const response = await fetch('/data/kysymykset.json');
		if (!response.ok) {
			throw new Error('cannot fetch the data');
		}
		kaikkiKysymykset = await response.json();
	}); // Hakee json tiedostosta kysymykset kaikkiKysymykset taulukkoon
	// $inspect(kaikkiKysymykset); //toiminnan testaamista varten

	//objektiTaulukko Jatkoideana olisi tämän laittaminen globaaliksi
	let korttiPakat: KorttiPakka[] = [
		{
			id: 1,
			nimi: 'Näin meidän kesken',
			etupuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-rose-300 text-rose-950 shadow-xl hover:shadow-xl/50 ',
			takapuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhdeteksti text-tekstit shadow-xl/30',
			img: '/pics/favorite6.svg',
			alt: 'sydän',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20',
			asettelu: 'sm:justify-self-end',
			saavutettavuusTyyli:
				'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
			saavutettavuusTekstiTyyli: ' rounded-md bg-rose-100 py-2 font-medium text-tekstit text-2xl'
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
			asettelu: 'sm:justify-items-center',
			saavutettavuusTyyli:
				'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
			saavutettavuusTekstiTyyli: 'rounded-md bg-yellow-100  py-2 font-medium text-tekstit text-2xl'
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
			asettelu: 'sm:justify-self-start',
			saavutettavuusTyyli:
				'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
			saavutettavuusTekstiTyyli:
				'rounded-md bg-neverkakkonen py-2 font-medium text-tekstit text-2xl'
		}
	];

	let valitutKysymykset: Kysymykset[] = $state([]);

	let ollaanEtusivulla = $state(true);
	let valittu = $state(0);
	const user = new Kayttaja();
	let kysymystenMaara = $state(user.korttienMaara);
	// Functiot tämän jälkeen
	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			//
			.slice(0, kysymystenMaara); // määrittää kysymysten määrän taulukossa valitun muuttujan arvon mukaan
		// console.log(valitutKysymykset);
		// console.log(korttiPakat[valinta - 1].nimi); testaamista varten
		ollaanEtusivulla = false; //vaihtaa sivun etusivulta pelisivulle
		valittu = valinta - 1;
	}
	// $inspect(valitutKysymykset); Toiminnan testaamista varten
	// $inspect(user.korttienMaara); Toiminnan testaamista varten
</script>

{#if ollaanEtusivulla}<!--Etusivun ja pelisivun näkyvyyden muuttamista varten-->
	<div in:fade={{ delay: 400, duration: 400 }} out:fade={{ duration: 300 }}>
		<div class="grid grid-cols-1 justify-items-center">
			<h2 class="text-tekstit font-josefin px-10 pt-5 text-center text-3xl">
				Pelaa 10 kysymyskorttia tai valitse korttien määrä:
			</h2>

			<div class="p-5">
				<select
					class="border-tekstit font-josefin text-tekstit cursor-pointer rounded-xl border-2 bg-slate-100 text-xl"
					bind:value={kysymystenMaara}
					><!-- Korttien määrän valinta-->
					<option value="6">5</option>
					<option value="16">15</option>
					<option value="21">20</option>
					<option value="31">30</option>
					<option value="51">50</option>
				</select>
			</div>
		</div>
	</div>

	<PelinValinta {korttiPakat} {korttiPakanValinta} />
{:else}
	<div class="grid justify-items-center px-5 sm:px-10 lg:grid-cols-3">
		<div class=" col-start-2 justify-items-center">
			<PelausSivu
				className={korttiPakat[valittu].etupuoliTW}
				takapuoliTW={korttiPakat[valittu].takapuoliTW}
				text={korttiPakat[valittu].nimi}
				taulukko={valitutKysymykset}
				bind:ollaanEtusivulla
			></PelausSivu>
		</div>
	</div>
{/if}
