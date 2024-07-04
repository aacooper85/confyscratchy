<script lang="ts">
	import ScratchRow from "$lib/components/scratch/Row.svelte";
	import scratch from "$lib/components/scratch/Row.svelte";
	import { ScratchCard } from "$lib/types/scratch/Card";
	
	/** @type {import('./$types').PageData} */
	export let data;

	let card: ScratchCard = ScratchCard.fromBase64(data.datastring);
	let scratcharray = new Array;


</script>

<h1>Scratch Card</h1>

<p>Data String From URL: {data.datastring}</p>

<h2>{card.title}</h2>

<p>{card.description}</p>
<form>
	{#each card.rows as row, index}
		<ScratchRow label={`${(index+1)}.`} bind:row={row} bind:scratchlist={scratcharray[index]} ></ScratchRow>
	{/each}
</form>
