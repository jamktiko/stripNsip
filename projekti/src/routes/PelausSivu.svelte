<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';

	import Kortti from './Kortti.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Button from './Button.svelte';
	interface Props {
		text: string;
		className?: string;
		ikoni?: string;
		taulukko?: Kysymykset[];
		takapuoliTW: string;
		ollaanEtusivulla: boolean;
		ollaanPelisivulla: boolean;
		// onclick: () => void;
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
	let flipped = $state(false);
	let kysymyksenNumero = $state(0);
	function flippaa() {
		flipped = !flipped;
		if (flipped) {
			className = takapuoliTW;
		}
		text = taulukko[kysymyksenNumero].question;
		kysymyksenNumero++;
	}
	function siirtymäFunktio() {
		ollaanEtusivulla = true;
		ollaanPelisivulla = false;
		console.log(ollaanEtusivulla);
	}
</script>

<main>
	<div in:fly={{ delay: 200, duration: 1000, x: 300, y: 0 }}>
		<Kortti
			flippaus={flipped}
			className="card {flipped ? 'flipped' : ''} $'{className}"
			onclick={flippaa}
			{takapuoliTW}
			{text}
			{ikoni}
		></Kortti>
	</div>
	<div class="justify-center flex py-20">
	<Button
		tyyli={'bg-tekstit text-2xl font-josefin max-w-45 min-w-45 hover:shadow-xl/40 flex items-center justify-center max-h-15 min-h-15  rounded-xl py-2 pr-5 text-white cursor-pointer shadow-xl'}
		text="Takaisin"
		onclick={siirtymäFunktio}
		ikoni={'/pics/takaisin.svg'}
		alt={'nuoli vasemmalle'}
	>
		<!-- <span class="material-symbols-outlined md-20"> arrow_back_ios </span>
		<div>Takaisin</div> -->
	</Button>
</div>
</main>

<style>
</style>
