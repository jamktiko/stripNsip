<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		class?: string;
	}
	let { text, onclick }: Props = $props();
</script>

<button {onclick}>
	<div class="font-josefin pt-9 text-2xl">{text}</div>
	<span> </span></button
>

<style></style>
