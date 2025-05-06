<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import { flip } from 'svelte/animate';
	import Kortti from './Kortti.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	interface Props {
		text: string;
		className?: string;
		ikoni: string;
		taulukko?: Kysymykset[];
		takapuoliTW: string;
		// onclick: () => void;
	}

	let { text, className, ikoni, taulukko, takapuoliTW = $bindable() }: Props = $props();
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
	$inspect(text);
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
</main>

<style>
</style>
