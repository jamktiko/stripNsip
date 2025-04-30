<script lang="ts">
	import '../app.css';
<<<<<<< HEAD
	import Header from "./Header.svelte";
	import type { Snippet } from 'svelte';
=======
	
>>>>>>> refs/remotes/origin/develop

	let { children }: { children: Snippet } = $props();
</script>

<<<<<<< HEAD
<Header otsikko="Mitä peliä haluat pelata?" logo="logo.png" />
=======

>>>>>>> refs/remotes/origin/develop

{@render children()}
