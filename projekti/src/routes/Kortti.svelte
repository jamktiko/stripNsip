<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		class?: string;
	}
	let { text, onclick }: Props = $props();
</script>

<button
	{onclick}
	class="bg-jamkpinkki min-h-65 max-w-50 min-w-50 bg-parisuhde text-parisuhdeteksti shadow-xl/30 m-10 grid max-h-80 rounded-xl border-8 border-white
"
>
	<div>{text}</div>
	<span> </span></button
>

<style>
</style>
