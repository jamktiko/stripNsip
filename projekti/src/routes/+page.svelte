<script lang="ts">
	import Header from './Header.svelte';

	import PelinValinta from './PelinValinta.svelte';
	let peliValittu = $derived(true);
	$inspect(peliValittu);
</script>

<Header otsikko="Mitä peliä haluat pelata?" logo="logo.png" />

{#if peliValittu}
	<PelinValinta bind:peliValittu></PelinValinta>
{/if}
