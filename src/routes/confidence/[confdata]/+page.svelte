<script lang="ts">
    import ConfidenceRow from "$lib/components/confidence/Row.svelte";
	import { ConfidenceCard } from "$lib/types/confidence/Card";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: ConfidenceCard = ConfidenceCard.fromBase64(data.base64string);
</script>

<h2>{card.title}</h2>

<p>{card.description}</p>

<form>
	{#each card.rows as row, index}
		<ConfidenceRow bind:row={row} label={`${(index+1)}.`}></ConfidenceRow>
	{/each}
</form>