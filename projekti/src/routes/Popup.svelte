<script lang="ts">
	import type { Snippet } from 'svelte';
	import { scale } from 'svelte/transition';

	interface Props {
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
    popupIkkunaNaytetaan: boolean;
	}

	let { header, children, footer, popupIkkunaNaytetaan }: Props = $props();
</script>

{#if popupIkkunaNaytetaan}
	<!-- tumma läpikuultava tausta, jonka päälle tulee valkoinen div infoikkunaksi -->
	<div class="backdrop"></div>

	<div 
		class="modal bg-slate-100 font-josefin text-tekstit flex flex-col rounded-xl my-10 overflow-y-auto" 
		transition:scale={{ duration: 300 }}
	>
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
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	} 
</style>
