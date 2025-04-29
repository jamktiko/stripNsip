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

<!-- {#if valittuPeli===1}
{/if} -->
