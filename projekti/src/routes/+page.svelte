<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { onMount } from 'svelte';
	import PelausSivu from './PelausSivu.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import PelinValinta from './PelinValinta.svelte';
	import { Kayttaja } from '$lib/kayttaja.svelte';
	import { fade } from 'svelte/transition';

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
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-rose-300 text-rose-950 shadow-xl hover:shadow-xl/50 ',
			takapuoliTW:
				'm-10 grid h-80 w-60 lg:h-85 lg:w-70 2xl:h-96 2xl:w-80 rounded-xl border-8 border-white bg-parisuhdeteksti text-tekstit shadow-xl/30',
			img: '/pics/favorite6.svg',
			alt: 'sydän',
			imgTWEtupuoli: 'min-w-20 max-w-20 max-w-20',
			imgTWTakapuoli: 'min-w-20 max-w-20 max-w-20',
			asettelu: 'sm:justify-self-end',

			saavutettavuusTyyli: 'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
			saavutettavuusTekstiTyyli:
				' rounded-md bg-rose-100 py-2 font-medium text-tekstit text-2xl'
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
			saavutettavuusTyyli: 'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
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
			saavutettavuusTyyli: 'absolute bottom-5 left-1/2 transform -translate-x-1/2 w-50 text-center px-6 sm:px-2 pb-3',
			saavutettavuusTekstiTyyli: 'rounded-md bg-neverkakkonen py-2 font-medium text-tekstit text-2xl'
		}
	];

	let valitutKysymykset: Kysymykset[] = $state([]);
	let ollaanPelisivulla = $state(false);
	let ollaanEtusivulla = $state(true);
	let valittu = $state(0);
	const user = new Kayttaja();
	let kysymystenMaara = $state(user.korttienMaara);

	function korttiPakanValinta(valinta: number) {
		valitutKysymykset = kaikkiKysymykset
			.filter((kysymys) => kysymys.genre === valinta)
			.sort(() => Math.random() - 0.5) // sekottaa pakan
			// .slice(0, 15); // ottaa 15 ensimmäistä kysymystä;
			.slice(0, kysymystenMaara);
		console.log(valitutKysymykset);
		console.log(korttiPakat[valinta - 1].nimi);
		ollaanEtusivulla = false;
		ollaanPelisivulla = true;
		valittu = valinta - 1;
	}
	$inspect(valitutKysymykset);
	$inspect(user.korttienMaara);
</script>

{#if ollaanEtusivulla}
	<div in:fade={{ delay: 400, duration: 400 }} out:fade={{ duration: 300 }}>
		<div class="grid grid-cols-1 justify-items-center">
			<h2 class="text-tekstit text-3xl font-josefin text-center px-10 pt-5">Pelaa 10 kysymyskorttia tai valitse korttien määrä:</h2>
			
			<div class="p-5">
				<select class="rounded-xl border-2 border-tekstit bg-slate-100 font-josefin text-xl text-tekstit" bind:value={kysymystenMaara}>
					<option value=6>5</option>
					<option value=16>15</option>
					<option value=21>20</option>
					<option value=31>30</option>
					<option value=51>50</option>
				</select>
			</div>
		</div>
	</div>

	<PelinValinta {korttiPakat} {korttiPakanValinta} />
{:else if ollaanPelisivulla}
	<div class="grid justify-items-center px-5 lg:grid-cols-3 sm:px-10">
		<div class=" col-start-2 justify-items-center">
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
