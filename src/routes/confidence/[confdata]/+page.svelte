<script lang="ts">
	import { Button } from "@sveltestrap/sveltestrap";
	import ConfidenceRow from "$lib/components/confidence/Row.svelte";
	import { ConfidenceCard } from "$lib/types/confidence/Card";
	import ScratchRow from "$lib/components/scratch/Row.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: ConfidenceCard = ConfidenceCard.fromBase64(data.base64string);
	export let locked = false;
	let srow: ScratchRow;

	export let lock = () => {
		locked = true;
	};
	let valid = new Array<boolean>();
	let revealed = new Array();
	for (let i = 0; i < card.rows.length; i++) {
		valid[i] = false;
		revealed[i] = false;
	}
</script>

<h2>{card.title}</h2>

<p>{card.description}</p>

{#if !locked}
	<h3>Your individual confidence report:</h3>
	<form>
		{#each card.rows as row, index}
			<ConfidenceRow
				bind:row
				label={`${index + 1}.`}
				bind:valid={valid[index]}
			></ConfidenceRow>
		{/each}
	</form>
	{#if valid.every(Boolean)}
		<Button class="btn-sm ms-1 btn-light" on:click={() => lock()}>
			Lock these answers!</Button>
	{/if}
{:else}
	<h3>Your individual confidence report:</h3>
	<form>
		{#each card.rows as row, index}
			<p>
				<b>{`${index + 1}.`}</b>
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
					{#each row.input as entry, i}
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
	</form>

	<h3>Your Team scratchcard:</h3>
	<form>
		{#each card.rows as row, index}
			<ScratchRow
				label={`${index + 1}.`}
				crow={row}
				bind:revealrow={revealed[index]}
			></ScratchRow>
		{/each}
	</form>
{/if}
