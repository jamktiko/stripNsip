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
	<div class="font-josefin pt-12 text-xl lg:text-2xl pl-5 pr-5">{text}</div>
	<span class="grid justify-items-center pr-2"
		><img src={ikoni} class="min-w-25 max-w-25 lg:min-w-30 lg:max-w-30 2xl:min-w-35 2xl:max-w-35 " />
	</span>
</button>

<style>
</style>
