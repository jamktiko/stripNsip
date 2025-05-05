<script lang="ts">
  interface Props {
    teksti: string;
    onclick: () => void
  }
  let { teksti, onclick }: Props = $props();
</script>

<button {onclick}>{teksti}</button>