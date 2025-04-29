<script lang="ts">
	import Kortti from './Kortti.svelte';
	import PelinValinta from './PelinValinta.svelte';
	interface Props {
		valittuPeli: number;
		pakka1TailWind: string;
		pakka2TailWind: string;
		pakka3TailWind: string;
	}
	let { valittuPeli }: Props = $props();
</script>

{#if valittuPeli === 1}
	<Kortti className={pakka1TailWind} onclick={klikkaus} text={pakka1Nimi} id={1}></Kortti>
{/if}
