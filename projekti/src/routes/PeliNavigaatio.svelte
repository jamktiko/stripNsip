<script lang="ts">
	import Kortti from './Kortti.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';

  interface Props {
    korttiPakat: KorttiPakka[];
    korttiPakanValinta: (valinta: number) => void;
  }
  let { korttiPakat, korttiPakanValinta }: Props = $props();
</script>

<!-- <h1 class="font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-5xl">
	Mitä peliä haluat pelata?
</h1> -->
{#each korttiPakat as pakka}
	<div class={pakka.asettelu}>
		<Kortti 
			className={pakka.etupuoliTW} 
			onclick={() => korttiPakanValinta(pakka.id)} 
			text={pakka.nimi}
			ikoni={pakka.img} 
		/>
	</div>
{/each}
