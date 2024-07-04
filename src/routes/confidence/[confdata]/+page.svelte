<script lang="ts">
    import ConfidenceRow from "$lib/components/confidence/Row.svelte";
	import { ConfidenceCard } from "$lib/types/confidence/Card";
	import scratch from "$lib/components/scratch/Row.svelte";
	import { ScratchCard } from "$lib/types/scratch/Card";
	import ScratchRow from "$lib/components/scratch/Row.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: ConfidenceCard = ConfidenceCard.fromBase64(data.base64string);
	export let locked = false;
	
	export let lock = () =>{
		let t=true;
		locked=t;
	}
	let valid = new Array<boolean>;
	for (let i =0; i<card.rows.length;i++){
		valid[i]=false;
		}
	
	
</script>

<h2>{card.title}</h2>

<p>{card.description}</p>


{#if (!locked)}
	<h3>Your individual confidence report:</h3>
	<form>
		{#each card.rows as row, index}
			<ConfidenceRow bind:row={row} label={`${(index+1)}.`} bind:valid={valid[index]}></ConfidenceRow>
		{/each}
	</form>
	{#if (valid.every(Boolean))}
	<button on:click={lock()}> Lock these answers!</button>
	{/if}
{:else}
	<h3>Your individual confidence report:</h3>
	<form>
		{#each card.rows as row, index}
			<b>{`${(index+1)}.`}</b>
				{#each row.input as entry,index}
					<input type = "number" value={entry} min="0" max={row.length} readonly/>
				{/each}
			<br>
		{/each}
	</form>
	
	<h3>Your Team scratchcard:</h3>
	<form>
		{#each card.rows as row, index}
			<ScratchRow label={`${(index+1)}.`} bind:row={row}  ></ScratchRow>
		{/each}
	</form>
{/if}
	
