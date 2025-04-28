<script lang="ts">
  let { otsikko, logo }: { otsikko: string; logo: string } = $props();
</script>

<header>
  <img src={logo} alt="Strip 'n sip logo" />

  <h1>{otsikko}</h1>

  <button>?</button>
</header>

<style>
  button {
    border: 1px solid black;
  }
</style>