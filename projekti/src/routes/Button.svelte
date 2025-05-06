<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		tyyli?: string;
	}

	let { text, onclick, tyyli }: Props = $props();
</script>

<button class={tyyli} {onclick}>{text}</button>
<!-- vanhaa koodia -->
<!-- <button class="text-3xl sm:text-4xl hover:shadow-xl border-4 border-tekstit cursor-pointer hover:bg-tekstit py-1 px-4 rounded-full text-tekstit hover:text-white" {onclick}>{text}</button> -->
<!-- <button
class="border-tekstit hover:bg-tekstit text-tekstit cursor-pointer rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl" 
{onclick}>{text}</button> -->
