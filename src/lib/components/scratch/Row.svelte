<script lang="ts">
	import { ConfidenceRow } from "$lib/types/confidence/Row";
	import Choice from "$lib/components/scratch/Choice.svelte";

	export let crow: ConfidenceRow;
	export let label: string;
	export let row = crow.castToScratchRow();

	export let Answer = (index: number) => {
		return row.answer === index;
	};

	export let revealrow = false;
	let Scratch = (index: number) => () => {
		row.scratch(index);
		if (row.scratches[row.answer]) {
			revealrow = true;
		}
		row = row;
	};
</script>

<p>
	<b>{label}</b>
	{#if revealrow}
		{#each Array(row.length) as _, i}
			<Choice correct={Answer(i)} revealed={revealrow} buttonlabel={String.fromCharCode(97 + i).toUpperCase()}></Choice>
		{/each}
	{:else}
		{#each Array(row.length) as _, i}
			<Choice correct={Answer(i)} revealed={row.scratches[i]} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} on:Scratch={Scratch(i)}></Choice>
		{/each}
	{/if}
	Score:<b>{row.score()}/{row.length}</b>
	<br />
</p>
