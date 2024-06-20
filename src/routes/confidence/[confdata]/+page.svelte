<script lang="ts">
    import { Card } from "$lib/types/Card";

	/** @type {import('./$types').PageData} */
	export let data;

	let card: Card = Card.fromBase64(data.datastring);
</script>

<h2>{card.title}</h2>

<p>{card.description}</p>