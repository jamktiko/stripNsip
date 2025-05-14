<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import Kortti from './Kortti.svelte';
	import { fade, fly } from 'svelte/transition';
	import Button from './Button.svelte';

	interface Props {
		text: string;
		className?: string;
		ikoni?: string;
		taulukko: Kysymykset[];
		takapuoliTW: string;
		ollaanEtusivulla: boolean;
		ollaanPelisivulla: boolean;
	}

	let {
		text,
		className,
		ikoni,
		taulukko,
		takapuoliTW = $bindable(),
		ollaanEtusivulla = $bindable(),
		ollaanPelisivulla = $bindable()
	}: Props = $props();
	//propsit ylhäällä, Alhaalla alustetaan muuttujat

	let ohjeistusTeksti = $state('Aloita peli napauttamalla korttia!');
	let flipped = $state(false);
	let kysymyksenNumero = $state(0);
	// functiot alapuolella

	function flippaa() {
		flipped = !flipped;

		if (flipped) {
			className = takapuoliTW;
		} //tyylitys vaihtuu kortin takapuolelle ekan flippauksen jälkeen. Ei pidä vaihtua kuin vain kerran

		setTimeout(() => {
			text = taulukko[kysymyksenNumero].question;
		}, 200);
		//Kysymyksen vaihtuminen halutaan viiveellä, jotta sitä ei näe kun se vaihtuu ( vaihtuu flippausanimaation puolessa välissä)
		kysymyksenNumero++;
		if (kysymyksenNumero > 0 && kysymyksenNumero < taulukko.length - 1) {
			ohjeistusTeksti = 'Napauta korttia uudestaan!';
			// pelin ohjeistusta varten, kun korttia on painettu kerran. mutta ei ole viimeinen kerta ennen tekstin katoamista
		} else {
			ohjeistusTeksti = 'Vielä viimeisen kerran!';
		} // ohjeistus käyttäjälle että nyt tulee viimeinen kysymys
		if (kysymyksenNumero >= taulukko.length) {
			ohjeistusTeksti = '';
		} //halutaan kadottaa teksti kun viimeinen kysymys on napautettu pois
	}
	function siirtymäFunktio() {
		ollaanEtusivulla = true;
		ollaanPelisivulla = false;
		// console.log(ollaanEtusivulla); Testausta varten
	}
</script>

<h1
	class="font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-5xl"
	in:fade={{ delay: 400, duration: 400 }}
	out:fade={{ duration: 300 }}
>
	<!--Ohjeistustekstin animaatio-->
	{ohjeistusTeksti}
</h1>

<div
	class="grid justify-items-center pt-3"
	in:fly={{ delay: 300, duration: 400, x: 1000, y: 0 }}
	out:fade={{ duration: 400 }}
>
	<!-- korttien animaatio-->
	{#if kysymyksenNumero < taulukko.length}
		<Kortti
			flippaus={flipped}
			className="card {flipped ? 'flipped' : ''} $'{className}"
			onclick={flippaa}
			{takapuoliTW}
			{text}
			{ikoni}
		></Kortti>
	{:else}
		<!--Kun korttipakka on tyhjä, halutaan näkyviin nämä asiat jotka kehottavat pelaamaan uudestaan, ja ohjeistavat miten pääsee pelaamaan uudelleen-->
		<div class="grid grid-cols-1 justify-items-center pb-10">
			<img src="./pics/loppu4.svg" alt="" height="200" width="200" />
			<h1 class="text-tekstit font-josefin pt-10 text-3xl">Nyt ne loppu :(</h1>
			<h1 class="text-tekstit font-josefin text-center text-3xl">
				Mutta ei hätää – etusivulta löytyy lisää seikkailuja!
			</h1>
		</div>
	{/if}

	<div
		class="py-15 flex items-center justify-center"
		in:fly={{ delay: 400, duration: 400 }}
		out:fade={{ duration: 400 }}
	>
		<Button
			tyyli={'bg-tekstit  text-2xl font-josefin max-w-45 min-w-45 hover:shadow-xl/40 flex items-center justify-center max-h-15 min-h-15 place-content-center rounded-xl py-2 pr-5 text-white cursor-pointer'}
			text="Etusivulle"
			onclick={siirtymäFunktio}
			ikoni={'/pics/takaisin.svg'}
			alt={'nuoli vasemmalle'}
		>
			<!-- Takaisin pelinvalintamenuun siirtymistä varten oleva button -->
		</Button>
	</div>
</div>
