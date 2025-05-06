<script lang="ts">
	interface Props {
		text: string;
		onclick?: () => void;
		disabled?: boolean;
	}

	let { text, onclick, disabled = false }: Props = $props();
</script>

<button
	class="border-tekstit hover:bg-tekstit text-tekstit cursor-pointer rounded-full border-4 px-4 py-1 text-3xl hover:text-white hover:shadow-xl sm:text-4xl"
	{onclick}
	{disabled}>{text}</button
>
