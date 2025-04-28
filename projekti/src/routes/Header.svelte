<script lang="ts">
  let { otsikko, logo }: { otsikko: string; logo: string } = $props();
</script>

<header>
  <img src={logo} alt="Strip 'n sip logo" />

  <h1>{otsikko}</h1>

  <!-- myöhemmin button-komponentti -->
  <button>?</button>
</header>

<style>
  /* väliaikainen tyylimääritys */
  button {
    border: 1px solid black;
  }
</style>