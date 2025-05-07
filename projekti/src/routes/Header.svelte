<script lang="ts">
	import Button from './Button.svelte';
	import Popup from './Popup.svelte';

	let { otsikko, logo }: { otsikko: string; logo: string } = $props();
	// pitää muokata myöhemmin miten otsikkoNaytetaan arvo määräytyy
	// let otsikkoNaytetaan = true;
	let popupIkkunaNaytetaan = $state(false);
</script>

<header class=" place grid grid-cols-2 content-evenly gap-4 px-20">
	<img class=" w-45 h-45 py-5" src={logo} alt="Strip 'n Sip logo" />

	<div class=" grid items-center justify-end">
		<!-- <Button 
		text="?" 
		onclick={() => (popupIkkunaNaytetaan = true)} 
		tyyli={'text-3xl sm:text-4xl hover:shadow-xl border-4 border-tekstit cursor-pointer hover:bg-tekstit py-1 px-4 rounded-full text-tekstit hover:text-white'} 
		/> -->
		<Button
			text="?"
			onclick={() => (popupIkkunaNaytetaan = true)}
			tyyli={'border-tekstit hover:bg-tekstit text-tekstit cursor-pointer rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl'}
		/>
	</div>

	<!-- {#if otsikkoNaytetaan}
		<h1
			class=" font-josefin text-tekstit col-span-2 flex items-center justify-center py-10 text-center text-4xl md:text-4xl"
		>
			{otsikko}
		</h1>
	{/if} -->
</header>

<Popup {popupIkkunaNaytetaan}>
	{#snippet header()}
		<div class=" flex justify-between">
			<div class="order-1"></div>
			<div class="pl-13 order-2">
				<img src="./pics/help.png" alt="Ohje" class="min-v-20 min-w-20 max-w-20" />
			</div>
			<div class="order-3">
				<Button
					text="x"
					onclick={() => (popupIkkunaNaytetaan = false)}
					tyyli={'border-tekstit hover:bg-tekstit text-tekstit cursor-pointer rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl'}
				/>
			</div>
		</div>
	{/snippet}
	<div>
		<h1 class="pb-2 pt-8 text-center text-2xl">Strip 'n Sip</h1>
	</div>
	<p class="sm:px-30 px-5 py-2 text-center text-xl">
		Tämä peli pistää porukan puhumaan, paljastamaan ja nauramaan – joskus jopa yllättymään. Näin meidän kesken -kategoria kutsuu syvällisiin keskusteluihin, Kippis ja kulaus esittää ronskimpia
		kysymyksiä ja tehtäviä illanviettoon. Oletko koskaan toimii puolestaan hauskana
		jäänmurtajana uusien tuttavuuksien kanssa. Pelaaminen on helppoa: valitse korttipakka, napauta,
		ja vastaa kysymykseen tai tee tehtävä – yksin tai yhdessä.
	</p>
	{#snippet footer()}
		<h2 class="pb-2 pt-5 text-center text-2xl">Tekijät</h2>
		<p class=" py-2 pb-8 text-center text-xl">
			Jeremia Vepsäläinen, Sanni Pöykiö, Aino Seppi, Samuli Ilomäki
		</p>
	{/snippet}
</Popup>
