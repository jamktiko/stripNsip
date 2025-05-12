<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		className?: string;
		id?: number;
		ikoni?: string;
		flippaus?: boolean;
		takapuoliTW?: string;
		alt?: string;
		pelaaNakyvyys?: boolean;
		saavutettavuusTyyli?: string;
		saavutettavuusTekstinTyyli?: string;
	}
	let {
		text,
		onclick,
		className,
		ikoni,
		flippaus = $bindable(),
		takapuoliTW = $bindable(),
		alt,
		pelaaNakyvyys,
		saavutettavuusTyyli,
		saavutettavuusTekstinTyyli
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
			{#if pelaaNakyvyys}
				<div class={saavutettavuusTyyli}>
					<div class="handicap {saavutettavuusTekstinTyyli}">Pelaa</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="back">
		<div></div>
	</div>
</button>

<style>
	.handicap {
		rotate: y 180deg;
	}
	.teksti {
		transition: transform 0.7s; /* Smooth animaatio */
		transform: rotateY(180deg); /* Oletusarvo */
	}

	.teksti.flipped {
		transform: rotateY(0deg); /* Flippauksen arvo */
	}

	.card {
		position: relative;
		transform: rotateY(180deg); /* Oletusarvo */
		transition: transform 0.2s ease-in; /* Lisää smooth animaatio */
		transform-style: preserve-3d;
		cursor: pointer;
	}

	.card.flipped {
		transform: rotateY(0); /* Flippauksen arvo */
	}

	.card:hover {
		transform: scale(1.1) rotateY(var(--rotateY, 180deg)); /* Kasvattaa kokoa säilyttäen kääntöasennon */
	}

	.card.flipped:hover {
		transform: scale(1.1) rotateY(0); /* Kasvattaa kokoa, kun kortti on käännetty */
	}
</style>
