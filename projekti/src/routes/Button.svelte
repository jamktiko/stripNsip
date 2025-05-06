<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		tyyli?: string;
	}

	let { text, onclick, tyyli }: Props = $props();
</script>

<button class={tyyli} {onclick}>{text}</button>
<!-- alkuperäinen -->
<!-- <button class="text-3xl sm:text-4xl hover:shadow-xl border-4 border-tekstit cursor-pointer hover:bg-tekstit py-1 px-4 rounded-full text-tekstit hover:text-white" {onclick}>{text}</button> -->
