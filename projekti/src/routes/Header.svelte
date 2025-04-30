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
    <h1>Strip 'n Sip</h1>
  {/snippet}
  <p class="font-josefin">Tähän tekstiä</p>
  {#snippet footer()}
    <h2>Tekijät</h2>
    <p>Ryhmä Rämä</p>
  {/snippet}
</Popup>