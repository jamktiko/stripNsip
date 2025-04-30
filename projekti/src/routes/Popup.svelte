<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
    popupIkkunaNaytetaan: boolean
	}

	let { header, children, footer, popupIkkunaNaytetaan }: Props = $props();

	// import { fly } from 'svelte/transition';
</script>

{#if popupIkkunaNaytetaan}
<div class="backdrop"></div>

<!-- animaatiot modal diville -->
<!-- transition:fly={{ y: -300, delay: 50, duration: 500 }} -->
<div class="modal">
	<header>
		{@render header?.()}
	</header>

	{@render children()}

	<footer>
		{@render footer?.()}
	</footer>
</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		padding: 1rem;
		position: fixed;
		top: 10vh;
		left: 10vw;
		width: 80%;
		max-height: 80vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
</style>