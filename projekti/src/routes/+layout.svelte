<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import type { Snippet } from 'svelte';
	import { Kayttaja } from '$lib/kayttaja.svelte';
	import Button from './Button.svelte';

	let { children }: { children: Snippet } = $props();
	const user = new Kayttaja(); //luodaan uusi käyttäjä, joka sisältää kaikki käyttäjätiedot
	let teema = $derived(
		user.normaaliTeema
			? 'from-taustakeltanen via-taustasininen to-taustapunanen inset-0 -z-10 min-h-screen bg-gradient-to-br'
			: 'from-pink-400 via-sky-300 to-orange-300 inset-0 -z-10 min-h-screen bg-gradient-to-br'
	); //ternäärinen operaattori. (ehto? arvoJosTosi: arvoJosEpätosi)
	function vaihdaTeema() {
		user.normaaliTeema = !user.normaaliTeema;
	} //vaihtaa user.normaaliTeeman arvon toisinpäin, joka vaihtaa ternäärisen operaattorin kautta teeman tyylityksen
	// $inspect(teema); teeman arvon testausta varten
</script>

<div class={teema}>
	<div class=" pt-5">
		<Button
			text="Teema"
			onclick={vaihdaTeema}
			tyyli="flex cursor-pointer place-content-center mx-auto py-1 border-solid border-4 border-tekstit font-josefin text-tekstit text-xl max-w-30 min-w-30 max-h-10 min-h-10 rounded-xl hover:shadow-xl/40 transform transition duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-tekstit hover:text-white"
		/>
		<!--Button joka vaihtaa teemaa, eli suorittaa vaihdaTeema funktion-->
		<Header logo="./pics/logo.svg" />
		<!-- Header komponentti, joka sisältää logon ja info nappulan-->
	</div>
	<main>
		{@render children()}
	</main>
</div>
