<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		tyyli?: string;
		ikoni?: string;
		alt?: string;
	} // Alt, tyyli ja ikoni ovat valinnaisia, jotta niitä ei tarvitse määrittää kuin vain niitä tarvittavissa kohdissa.

	let { text, onclick, tyyli, ikoni, alt }: Props = $props();
</script>

<button class={tyyli} {onclick}><img src={ikoni} {alt} />{text}</button>
