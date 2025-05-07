<script lang="ts">
	import Kortti from "./Kortti.svelte";
  import type { KorttiPakka } from '$lib/korttiPakka';

  interface Props {
    korttiPakat: KorttiPakka[];
    korttiPakanValinta: (valinta: number) => void;
		// ollaanEtusivulla: boolean;
  }
  let { korttiPakat, korttiPakanValinta }: Props = $props();

  // let ollaanEtusivulla: boolean = $state(true);
</script>

<!-- {#if ollaanEtusivulla}
<h1 class=" font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-4xl">
	Mitä peliä haluat pelata?
</h1>
{/if} -->
<h1 class=" font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-4xl">
	Mitä peliä haluat pelata?
</h1>
    {#each korttiPakat as pakka}
		<div class={pakka.asettelu}>
		<Kortti 
			className={pakka.etupuoliTW} 
			onclick={() => korttiPakanValinta(pakka.id)} 
			text={pakka.nimi}
			ikoni={pakka.img} />
		</div>
		{/each}