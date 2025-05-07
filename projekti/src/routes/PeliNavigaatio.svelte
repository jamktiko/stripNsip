<script lang="ts">
	import Kortti from './Kortti.svelte';
	import type { KorttiPakka } from '$lib/korttiPakka';

	interface Props {
		korttiPakat: KorttiPakka[];
		korttiPakanValinta: (valinta: number) => void;
	}
	let { korttiPakat, korttiPakanValinta }: Props = $props();

	// let ollaanEtusivulla: boolean = $state(true);
</script>

<!-- {#if ollaanEtusivulla} -->
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
<!-- {/if} -->
