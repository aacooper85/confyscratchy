<script lang="ts">
	import DesignRow from "$lib/components/design/Row.svelte";
	import { DesignCard } from "$lib/types/design/Card";
	import { QRCodeImage } from "svelte-qrcode-image";

	let card: DesignCard = new DesignCard(); // includes default title and description
</script>

<h1>Design A New Card</h1>

<form>
	<label for="title">Title:</label>
    <input type="text" id="title" name="title" required bind:value={card.title}>
<br><br>
	<label for="description">Description:</label>
    <input type="textarea" id="description" name="description" required bind:value={card.description}>
<br><br>
	{#each card.rows as row, index}
		<DesignRow bind:row={row} label={`${(index+1)}.`}></DesignRow>
	{/each}
</form>

<br>
<hr>

<!-- TO DO make the Share section a Collapsible element -->

<h3>Share Your Card</h3>

<a href={card.url()} target="_blank"><QRCodeImage text={card.url()} margin={2} altText="QR Code for Confidence Card URL"/></a>
<p><a href={card.url()} target="_blank">{card.url()}</a></p>