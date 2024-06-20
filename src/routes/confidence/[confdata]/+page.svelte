<script lang="ts">
    import { Card } from "$lib/types/confidence/Card";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: Card = Card.fromBase64(data.base64string);
</script>

<h2>{card.title}</h2>

<p>{card.description}</p>

{#each card.rows as row, index}
	<p>{row.length} -- {row.answer} -- {index}</p>
{/each}