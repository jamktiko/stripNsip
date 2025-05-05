<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id?: number;
		ikoni: string;
	}
	let { text, onclick, className , ikoni }: Props = $props();
</script>

<button {onclick} class={className}>
	<div class="pt-9 font-josefin text-2xl">{text}</div>
	<span class="grid justify-items-center"><img src={ikoni} class="max-w-20 min-w-20 max-w-20"> </span> </button
>

<style>
</style>
