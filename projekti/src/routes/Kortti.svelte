<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		className: string;
		ikoni?: string;
		flippaus?: boolean;
		takapuoliTW?: string;
		alt?: string;
		pelinValintaNakyy?: boolean;
		saavutettavuusTyyli?: string;
		saavutettavuusTekstinTyyli?: string;
	} // vaihtoehtoisena tyylityksiä varten annettu propseja joita ei aina anneta.
	let {
		text,
		onclick,
		className,
		ikoni,
		flippaus = $bindable(),
		takapuoliTW = $bindable(),
		alt,
		pelinValintaNakyy,
		saavutettavuusTyyli,
		saavutettavuusTekstinTyyli
	}: Props = $props();
</script>

<button {onclick} class="card {flippaus ? 'flipped' : ''} {className}">
	<!--Jos flippaus=true kortilla on luokka flippaus, tehty animaatiota varten. kortin tyylitykset riippuvat flippaus luokan olemassaolosta-->
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
			{#if pelinValintaNakyy}
				<!-- Jos pelin valinta näkyvyys on aktiivisena, halutaan että kortilla on saavutettavuuden takia "nappula" jossa lukee pelaa -->
				<div class={saavutettavuusTyyli}>
					<div class="saavutettavuus {saavutettavuusTekstinTyyli}">Pelaa</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="back">
		<!-- kortin toisen puolen tyylitystä varten, myös flippaus animaatiota varten -->
		<div></div>
	</div>
</button>

<style>
	.saavutettavuus {
		rotate: y 180deg;
	}
	.teksti {
		transition: transform 0.6s;
		transform: rotateY(180deg);
	}

	.teksti.flipped {
		transform: rotateY(0deg);
	}

	.card {
		position: relative;
		transform: rotateY(180deg); /* flippauksen arvo */
		transition: transform 0.2s ease-in; /*Hoverilla kasvatus animaation aika*/
		transform-style: preserve-3d;
		cursor: pointer;
	}

	.card.flipped {
		transform: rotateY(0);
	}

	.card:hover {
		transform: scale(1.1) rotateY(var(--rotateY, 180deg)); /* Kasvattaa kokoa mutta säilyttää kääntöasennon */
	}

	.card.flipped:hover {
		transform: scale(1.1) rotateY(0); /* Kasvattaa kokoa, kun kortilla on flipped classi */
	}
</style>
