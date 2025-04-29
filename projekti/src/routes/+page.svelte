<script lang="ts">
	import Header from './Header.svelte';

	import Kortti from './Kortti.svelte';
	let pakka1Nimi = $state('parisuhdepeli');
	let pakka2Nimi = $state('Juoma');
	let pakka3Nimi = $state('NeverhaveIever');
	let pakan1piilotus = $state(false);
	let pakan2piilotus = $state(false);
	let pakan3piilotus = $state(false);
	let pakka1TailWind = $state(
		'bg-parisuhde min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	let pakka2TailWind = $state(
		'bg-red-500 min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	let pakka3TailWind = $state(
		'bg-green-500 min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white '
	);
	function klikkaus() {
		console.log('toimii vieläkin');
	}
</script>

<Header otsikko="Mitä peliä haluat pelata?" logo="logo.png" />

<main>
	<div>
		<!-- Tee hidden elementillä diviin  if lause jolla piilotetaan kaksi muuta-->

		<Kortti className={pakka1TailWind} onclick={klikkaus} text={pakka1Nimi}></Kortti>

		<Kortti className={pakka2TailWind} onclick={klikkaus} text={pakka2Nimi}></Kortti>

		<Kortti className={pakka3TailWind} onclick={klikkaus} text={pakka3Nimi}></Kortti>
	</div>
</main>
