<script lang="ts">
	import { Button, Container, Form } from "@sveltestrap/sveltestrap";
	import ConfidenceRow from "$lib/components/confidence/Row.svelte";
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

<Container fluid class="bg-light rounded">
<h2 class="text-center my-3">{card.title}</h2>
<h4 class="text-center my-3">{card.description}</h4>

{#if !locked}
	<h5 class="m-2 text-muted">Your individual confidence report:</h5>
	<Form class="p-2">
		{#each card.rows as row, index}
			<ConfidenceRow bind:row label={`${index + 1}`} bind:valid={valid[index]}></ConfidenceRow>
		{/each}
	</Form>
	<Container class="text-center">
		{#if valid.every(Boolean)}
			<Button class="btn-md btn-success" on:click={lock}>Lock these answers!</Button>
		{/if}
	</Container>
{:else}
	<h3>Your individual confidence report:</h3>
	<Form>
		{#each card.rows as row, index}
			<p>
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
			</p>
		{/each}
	</Form>
	<h3>Your Team scratchcard:</h3>
	<Form>
		{#each card.rows as row, index}
			<ScratchRow
				label={`${index + 1}.`}
				crow={row}
				bind:revealrow={revealed[index]}
			></ScratchRow>
		{/each}
	</Form>
{/if}
</Container>
