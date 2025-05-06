<script lang="ts">
	import type { Kysymykset } from '$lib/kysymykset';
	import Kortti from './Kortti.svelte';
	interface Props {
		text: string;
		className?: string;
		ikoni: string;
		taulukko?: Kysymykset[];
		// onclick: () => void;
	}

	let { text, className, ikoni, taulukko }: Props = $props();
	let flipped = $state(false);
	let kysymyksenNumero = $state(0);
	function flippaa() {
		// className = `${flipped ? 'flipped ' : ''}${className || ''}`;
		text = taulukko[kysymyksenNumero].question;
		kysymyksenNumero++;
	}
	$inspect(text);
</script>

<main>
	<div>
		<Kortti {className} onclick={flippaa} {text} {ikoni}></Kortti>
	</div>
	<div
		class="bg-tekstit font-josefin max-w-30 min-w-30 hover:shadow-xl/40 flex max-h-10 min-h-10 place-content-center rounded-xl py-2 text-white"
	>
		<span class="material-symbols-outlined md-20"> arrow_back_ios </span>
		<div>Takaisin</div>
	</div>
</main>
