<script lang="ts">
	import HeaderButton from "./HeaderButton.svelte";
	import Popup from "./Popup.svelte";

  let { otsikko, logo }: { otsikko: string; logo: string } = $props();
  // pitää muokata myöhemmin miten otsikkoNaytetaan arvo määräytyy
  let otsikkoNaytetaan = true;
  let popupIkkunaNaytetaan = $state(false);
</script>

<header class=" px-20 grid place content-evenly grid-cols-2 gap-4">
  <img  class=" py-5 w-45 h-45" src={logo} alt="Strip 'n Sip logo" />

  <div class=" grid items-center justify-end"><HeaderButton text="?" onclick={() => popupIkkunaNaytetaan = true} />

  </div>
  
    {#if otsikkoNaytetaan}
    <h1 class=" font-josefin  text-tekstit text-4xl sm:text-5xl col-span-2 flex items-center justify-center text-center ">{otsikko}</h1>
    {/if}
  
</header>

<Popup {popupIkkunaNaytetaan}>
  {#snippet header()}
  <div class=" flex justify-between">
    <div class="order-1"></div>
     <div class="order-2 pl-13">
      <img src="./pics/help.png" alt="Ohje" class="max-w-20 min-w-20 max-w-20 min-v-20"/>
     </div>
    <div class="order-3"><HeaderButton text="x" onclick={() => popupIkkunaNaytetaan = false}/></div>
  </div>
  {/snippet}
  <div>
    <h1 class="text-center pb-2 pt-8 text-2xl">Strip 'n Sip</h1>
  </div>
  <p class="text-center py-2 px-35 text-xl">Tämä peli sopii erilaisiin tilanteisiin, joissa halutaan viettää aikaa yhdessä rennosti ja hauskasti. Pariskunta-kategoria tarjoaa syvällisiä keskusteluja, juomapeli tuo mukaan rohkeampia kysymyksiä ja tehtäviä ystävien iltaan, ja Never have I ever -pakka toimii kevyenä tutustumisleikkinä. Pelaaminen on yksinkertaista: valitse korttipakka, napauta sitä ja vastaa esitettyyn kysymykseen tai suorita annettu tehtävä yhdessä.</p>
  {#snippet footer()}
    <h2 class="text-center pb-2 pt-5 text-2xl">Tekijät</h2>
    <p class=" text-center py-2 pb-8 text-xl">Jeremia Vepsäläinen, Sanni Pöykiö, Aino Seppi, Samuli Ilomäki</p>
  {/snippet}
</Popup>