<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id?: number;
		ikoni: string;
	}
	let { text, onclick, className, ikoni }: Props = $props();
</script>

<button {onclick} class={className}>
	<div class="font-josefin pt-9 text-2xl">{text}</div>
	<span class="grid justify-items-center pr-1"
		><img src={ikoni} class="min-w-20 max-w-20 max-w-20" />
	</span>
</button>

<style>
</style>
