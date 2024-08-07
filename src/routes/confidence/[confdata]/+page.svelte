<script lang="ts">
	import { Button, Container, Form } from "@sveltestrap/sveltestrap";
	import InputRow from "$lib/components/confidence/input/Row.svelte";
	import LockedRow from "$lib/components/confidence/locked/Row.svelte";
	import { ConfidenceCard } from "$lib/types/confidence/Card";
	import ScratchRow from "$lib/components/scratch/Row.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: ConfidenceCard = ConfidenceCard.fromBase64(data.base64string);
	export let locked = false;

	let lock = () => {
		locked = true;
	};
	let valid = new Array<boolean>();
	let revealed = [];
	for (let i = 0; i < card.rows.length; i++) {
		valid[i] = false;
		revealed[i] = false;
	}
</script>

<Container fluid class="mt-4 pb-4 border rounded">
<h2 class="text-center my-3 pt-2">{card.title}</h2>
<h4 class="text-center my-3">{card.description}</h4>

{#if !locked}
	<h5 class="m-2 text-muted">Your individual confidence report:</h5>
	<Form class="p-2">
		{#each card.rows as row, index}
			<InputRow bind:row label={`${index + 1}`} bind:valid={valid[index]} />
		{/each}
	</Form>
	{#if valid.every(Boolean)}
		<Container class="text-center">
			<Button class="btn-md btn-success" on:click={lock}>Lock these answers!</Button>
		</Container>
	{/if}
{:else}
	<Container class="p-2">
		<h5 class="m-2">Your team scratch card:</h5>
		{#each card.rows as row, index}
			<ScratchRow
				label={`${index + 1}`}
				crow={row}
				bind:revealrow={revealed[index]}
			></ScratchRow>
		{/each}
	</Container>
	<hr>
	<Container class="p-2">
		<h5 class="m-2 text-muted">Your individual locked confidence report:</h5>
		{#each card.rows as row, index}
			{#if revealed[index]}
				<LockedRow label={`${index + 1}`} bind:row revealed={true} />
			{:else}
				<LockedRow label={`${index + 1}`} bind:row revealed={false} />
			{/if}
			
			<!-- <p>
				<b>{`${index + 1}`}</b>
				{#if revealed[index]}
					{#each row.input as entry, i}
						{#if row.answer === i}
							<b>
								<input
									type="number"
									value={entry}
									min="0"
									max={row.length}
									style="font-weight: bold;"
									readonly
								/></b
							>
						{:else}
							<input
								type="number"
								value={entry}
								min="0"
								max={row.length}
								readonly
							/>
						{/if}
					{/each}
					score:<b>{row.input[row.answer]}/{row.length}</b>
				{:else}
					{#each row.input as entry}
						<input
							type="number"
							value={entry}
							min="0"
							max={row.length}
							readonly
						/>
					{/each}
				{/if}
			</p> -->
		{/each}
	</Container>
{/if}
</Container>
