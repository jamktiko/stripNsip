<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id?: number;
		ikoni?: string;
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
		<div class="grid grid-cols-1 justify-items-center">
			<div
				class="teksti {flippaus
					? 'flipped'
					: ''} font-josefin absolute top-1/2 -translate-y-1/2 pl-5 pr-5 text-2xl lg:text-3xl"
			>
				{text}
			</div>
			<span class="justify-items-center"
				><img
					src={ikoni}
					{alt}
					class="right-21 lg:right-25 2xl:right-29 min-w-13 max-w-13 lg:min-w-15 lg:max-w-15 2xl:min-w-18 2xl:max-w-18 2 absolute pt-7 lg:absolute
		2xl:absolute"
				/>
			</span>
		</div>
	</div>
	<div class="back}">
		<div></div>
	</div>
</button>

<style>
	.teksti {
		transition: transform 0.7s; /* Smooth animaatio */
		transform: rotateY(180deg); /* Oletusarvo */
	}

	.teksti.flipped {
		transform: rotateY(0deg); /* Flippauksen arvo */
	}
	.card.flipped {
		transform: rotateY(0);
	}
	.back {
		transform: rotateY(180deg);
	}
	.card {
		position: relative;

		transform: rotateY(180deg);
		transition: transform 0.7s;
		transform-style: preserve-3d;

		cursor: pointer;
	}
	.front,
	.back {
		backface-visibility: hidden;
	}
</style>
