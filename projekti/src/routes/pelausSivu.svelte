<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import Kortti from './Kortti.svelte';
	interface Props {
		text: string;
		className?: string;
		ikoni: string;
		taulukko?: Kysymykset[];
		takapuoliTW: string;
		// onclick: () => void;
	}

	let { text, className, ikoni, taulukko, takapuoliTW }: Props = $props();
	let flipped = $state(false);
	let kysymyksenNumero = $state(0);
	function flippaa() {
		flipped = !flipped;
		// if (flipped) {
		// 	className = takapuoliTW;
		// } ei toimi ehkä ei koska ei bindattu.
		text = taulukko[kysymyksenNumero].question;
		kysymyksenNumero++;
	}
	$inspect(text);
</script>

<main>
	<div>
		<Kortti
			className="card {flipped ? 'flipped' : ''} $'{className}"
			onclick={flippaa}
			{text}
			{ikoni}
		></Kortti>
	</div>
</main>

<style>
</style>
