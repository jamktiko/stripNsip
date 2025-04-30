<script lang="ts">
	import HeaderButton from "./HeaderButton.svelte";
	import Popup from "./Popup.svelte";

  let { otsikko, logo }: { otsikko: string; logo: string } = $props();
  // pitää muokata myöhemmin miten otsikkoNaytetaan arvo määräytyy
  let otsikkoNaytetaan = true;
  let popupIkkunaNaytetaan = $state(false);
</script>

<header>
  <img src={logo} alt="Strip 'n Sip logo" />

  {#if otsikkoNaytetaan}
  <h1 class="font-josefin">{otsikko}</h1>
  {/if}

  <HeaderButton text="?" onclick={() => popupIkkunaNaytetaan = true} />
</header>

<Popup {popupIkkunaNaytetaan}>
  {#snippet header()}
    <HeaderButton text="x" onclick={() => popupIkkunaNaytetaan = false} />
    <HeaderButton text="?" disabled={true} />
    <img src="https://api.mtvuutiset.fi/graphql/caas/v1/media/5236266/data/78bad80a8e026613bc09d64c8941749c/landscape16_9/1600/korttipakka.jpg" alt="terve">
    <h1 class="text-center p-2 text-xl">Strip 'n Sip</h1>
  {/snippet}
  <p class="text-center p-2">Tämä peli sopii erilaisiin tilanteisiin, joissa halutaan viettää aikaa yhdessä rennosti ja hauskasti. Pariskunta-kategoria tarjoaa syvällisiä keskusteluja, juomapeli tuo mukaan rohkeampia kysymyksiä ja tehtäviä ystävien iltaan, ja Never have I ever -pakka toimii kevyenä tutustumisleikkinä. Pelaaminen on yksinkertaista: valitse korttipakka, napauta sitä ja vastaa esitettyyn kysymykseen tai suorita annettu tehtävä yhdessä.</p>
  {#snippet footer()}
    <h2 class="text-center pb-2 pt-5 text-xl">Tekijät</h2>
    <p class=" text-center p-2">Jeremia Vepsäläinen, Sanni Pöykiö, Aino Seppi, Samuli Ilomäki</p>
  {/snippet}
</Popup>