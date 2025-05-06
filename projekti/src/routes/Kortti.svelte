<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id?: number;
		ikoni: string;
		flippaus?: boolean;
		takapuoliTW?: string;
		alt?: string;
	}
	let {
		text,
		onclick,
		className,
		ikoni,
		flippaus = $bindable(),
		takapuoliTW = $bindable(),
		alt
	}: Props = $props();
</script>

<button {onclick} class="card {flippaus ? 'flipped' : ''} {className}">
	<div class="front">
		<div class="font-josefin pl-5 pr-5 pt-12 text-xl lg:text-2xl">{text}</div>
		<span class="grid justify-items-center pr-2"
			><img
				src={ikoni}
				{alt}
				class="min-w-25 max-w-25 lg:min-w-30 lg:max-w-30 2xl:min-w-35 2xl:max-w-35 2
		pt-10"
			/>
		</span>
	</div>
	<div class="back}">
		<div></div>
	</div>
</button>

<style>
	.card.flipped {
		transform: rotateY(0);
	}
	.back {
		transform: rotateY(180deg);
	}
	.card {
		position: relative;
		/* aspect-ratio: 2.5 / 3.5;
		font-size: min(1vh, 0.25rem); */
		/* height: 400em;
		background: var(--bg-1);
		border-radius: 2em; */
		transform: rotateY(360deg);
		transition: transform 0.7s;
		transform-style: preserve-3d;
		/* padding: 0;
		user-select: none; */
		cursor: pointer;
	}
	.front,
	.back {
		/* display: flex;
		align-items: center;
		justify-content: center;
		position: absolute; */
		/* width: 100%;
		height: 100%;
		left: 0;
		top: 0; */
		backface-visibility: hidden;
		/* border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em; */
	}
</style>
