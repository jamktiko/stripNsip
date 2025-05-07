<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';

	import Kortti from './Kortti.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Button from './Button.svelte';
	interface Props {
		text: string;
		className?: string;
		ikoni?: string;
		taulukko: Kysymykset[];
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
	<div in:fly={{ delay: 300, duration: 400, x: 1000, y: 0 }} out:fade={{ duration: 400 }}>
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
			<div class="pb-10"><img src="./pics/lopetus.svg" alt="" height="650" width="650" /></div>
		{/if}
	</div>

	<div
		class="py-15 flex items-center justify-center"
		in:fly={{ delay: 400, duration: 400 }}
		out:fade={{ duration: 400 }}
	>
		<Button
			tyyli={'bg-tekstit text-2xl font-josefin max-w-45 min-w-45 hover:shadow-xl/40 flex items-center justify-center max-h-15 min-h-15 place-content-center rounded-xl py-2 pr-5 text-white cursor-pointer'}
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
