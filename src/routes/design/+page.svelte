<script>
	/** @type {import('./$types').PageData} */
	export let data;
	
	let cardId = data.cardId;
	let encodedData = btoa(cardId);
	let confUrl = `/confidence/${encodedData}`;

	function newCardId() {
		cardId = crypto.randomUUID();
		encodedData = btoa(cardId);
		confUrl = `/confidence/${encodedData}`;
	}

	import { QRCodeImage } from "svelte-qrcode-image";
</script>

<h1>Design A New Card</h1>

<h4><a href={confUrl}>Confidence URL</a></h4>

<QRCodeImage text={confUrl} />

<br>
<button on:click={newCardId}>
	Generate New Id
</button>

<p>Card ID: {cardId.substring(0, 6)}</p>
<p>Encoded ID: {encodedData}</p>

<p>~Card Design Components Go Here~</p>