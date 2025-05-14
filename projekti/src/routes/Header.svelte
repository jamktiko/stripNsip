<script lang="ts">
	import Button from './Button.svelte';
	import Popup from './Popup.svelte';

	let { logo }: { logo: string } = $props();

	let popupIkkunaNaytetaan = $state(false);
</script>

<header class="place grid grid-cols-2 content-evenly gap-4 px-10 sm:px-20">
	<img class="w-45 h-45 py-5" src={logo} alt="Strip 'n Sip logo" />

	<div class="grid items-center justify-end">
		<!-- nappula, jota klikkaamalla avautuu infoikkuna -->
		<Button
			text="?"
			onclick={() => (popupIkkunaNaytetaan = true)}
			tyyli={'border-tekstit hover:bg-tekstit text-tekstit cursor-pointer transform transition duration-300 ease-out hover:-translate-y-2 hover:scale-105 rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl'}
		/>
	</div>
</header>

<Popup {popupIkkunaNaytetaan}>
	{#snippet header()}
		<div class=" flex justify-between">
			<div class="order-1"></div>
			<div class="pl-13 order-2">
				<img src="./pics/help.png" alt="Ohje" class="min-v-20 min-w-20 max-w-20" />
			</div>
			<div class="order-3">
				<!-- nappula, jota klikkaamalla infoikkuna sulkeutuu -->
				<Button
					text="x"
					onclick={() => (popupIkkunaNaytetaan = false)}
					tyyli={'border-tekstit hover:bg-tekstit text-tekstit cursor-pointer rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl'}
				/>
			</div>
		</div>
	{/snippet}
	<div>
		<h1 class="pb-2 pt-8 text-center text-3xl">Strip 'n Sip</h1>
	</div>
	<p class="sm:px-30 px-5 py-2 text-center text-xl">
		Tämä peli pistää porukan puhumaan, paljastamaan ja nauramaan – joskus jopa yllättymään. Näin
		meidän kesken -kategoria kutsuu syvällisiin keskusteluihin, Kippis ja kulaus on perinteinen
		juomapeli. Oletko koskaan toimii puolestaan hauskana jäänmurtajana uusien tuttavuuksien kanssa.
		Pelaaminen on helppoa: valitse pelin pituus ja korttipakka, napauta, ja vastaa kysymykseen tai
		tee tehtävä – yksin tai yhdessä.
	</p>
	{#snippet footer()}
		<h2 class="pb-2 pt-5 text-center text-3xl">Tekijät</h2>
		<p class=" py-2 pb-8 text-center text-2xl">
			Jeremia Vepsäläinen, Sanni Pöykiö, Aino Seppi, Samuli Ilomäki
		</p>
	{/snippet}
</Popup>
