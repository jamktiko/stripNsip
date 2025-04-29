<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id: number;
	}
	let { text, onclick, className, id }: Props = $props();
</script>

<button {onclick} class={className}>
	<div>{text}</div>
	<span> </span></button
>

<style>
</style>
