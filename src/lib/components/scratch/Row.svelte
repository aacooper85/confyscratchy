<script lang="ts">
	import { ConfidenceRow } from "$lib/types/confidence/Row";
	import Choice from "$lib/components/scratch/Choice.svelte";
    import { Row, Col } from "@sveltestrap/sveltestrap";

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

<Row class="border rounded m-3 mb-4 p-2 shadow">
	<Col class="col-2 my-auto text-center">
		<strong>Question {label}</strong>
	</Col>
	<Col class="col-8 border-start border-end">
		<Row>
			{#if revealrow}
				{#each Array(row.length) as _, i}
					<Choice correct={Answer(i)} revealed={revealrow} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} />
				{/each}
			{:else}
				{#each Array(row.length) as _, i}
					<Choice correct={Answer(i)} revealed={row.scratches[i]} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} on:Scratch={Scratch(i)} />
				{/each}
			{/if}
		</Row>
	</Col>
	<Col class="col-2 my-auto text-end">
		Team Score: {row.score()}/{row.length}
	</Col>
</Row>