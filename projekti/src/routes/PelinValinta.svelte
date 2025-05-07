<script lang="ts">
	import Kortti from './Kortti.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import { fly } from 'svelte/transition';

  interface Props {
    korttiPakat: KorttiPakka[];
    korttiPakanValinta: (valinta: number) => void;
  }
  let { korttiPakat, korttiPakanValinta }: Props = $props();

	let otsikkoNaytetaan = $state(false);

	function naytaOtsikko() {
		otsikkoNaytetaan = true;
	}
</script>

<!-- <h1 class="font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-5xl">
	Mitä peliä haluat pelata?
</h1> -->

{#if otsikkoNaytetaan}
	<h1 class="font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-5xl">
		Mitä peliä haluat pelata?
	</h1>
{/if}
<!-- <div
	class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10"
	in:fly={{ delay: 400, y: 50, duration: 400 }}
	out:fly={{ y: 50, duration: 300 }}
> -->
{#each korttiPakat as pakka, i}
	{#if i === korttiPakat.length - 1}
		{naytaOtsikko()}
	{/if}
	<div class={pakka.asettelu}>
		<Kortti 
			className={pakka.etupuoliTW} 
			onclick={() => korttiPakanValinta(pakka.id)} 
			text={pakka.nimi}
			ikoni={pakka.img} 
		/>
	</div>
{/each}
<!-- </div> -->
