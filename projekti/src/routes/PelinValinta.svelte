<script lang="ts">
	import Kortti from './Kortti.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';
	import { fly, fade } from 'svelte/transition';

	interface Props {
		korttiPakat: KorttiPakka[];
		korttiPakanValinta: (valinta: number) => void;
	}

	let { korttiPakat, korttiPakanValinta }: Props = $props();

	let pelinValintaNakyy = true;
</script>

<h1
	class="font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-5xl"
	in:fade={{ delay: 400, duration: 400 }}
	out:fade={{ duration: 300 }}
>
	Mitä peliä haluat pelata?
</h1>

<div
	class="grid justify-items-center px-5 sm:grid-cols-3 sm:px-10"
	in:fly={{ delay: 400, y: 50, duration: 400 }}
	out:fly={{ y: 50, duration: 300 }}
>
	{#each korttiPakat as pakka}
		<div class={pakka.asettelu}>
			<Kortti
				className={pakka.etupuoliTW}
				onclick={() => korttiPakanValinta(pakka.id)}
				text={pakka.nimi}
				ikoni={pakka.img}
				{pelinValintaNakyy}
				saavutettavuusTyyli={pakka.saavutettavuusTyyli}
				saavutettavuusTekstinTyyli={pakka.saavutettavuusTekstiTyyli}
			/>
		</div>
	{/each}
</div>
