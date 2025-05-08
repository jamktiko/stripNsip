<script lang="ts">
	interface Props {
		text: string;
		onclick: () => void;
		tyyli?: string;
		ikoni?: string;
		alt?: string;
	}

	let { text, onclick, tyyli, ikoni, alt }: Props = $props();
</script>

<button class={tyyli} {onclick}><img src={ikoni} {alt} />{text}</button>
