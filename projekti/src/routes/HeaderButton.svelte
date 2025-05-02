<script lang="ts">
	interface Props {
		text: string;
		onclick?: () => void;
		disabled?: boolean;
	}

	let { text, onclick, disabled = false }: Props = $props();
</script>

<button class="text-4xl hover:shadow-xl hover:bg-gray-800 bg-tekstit py-1 px-4 rounded-full text-white"{onclick} {disabled}>{text}</button>

<style>
  /* button {
    border: 3px solid black;
  } */
</style>