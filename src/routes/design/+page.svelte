<script lang="ts">
	import { page } from '$app/stores';
	import { copyText } from 'svelte-copy';
	import DesignRow from "$lib/components/design/Row.svelte";
	import { DesignCard } from "$lib/types/design/Card";
	import { QRCodeImage } from "svelte-qrcode-image";
	import {
		Button,
		Col,
		Container,
		Input,
		InputGroup,
		Label,
		Modal,
		Row,
	} from "@sveltestrap/sveltestrap";

	const origin = $page.url.origin;

	let card: DesignCard = new DesignCard(); // includes default title and description

	let addRow = () => {
		card.addRow();
		card = card;
	};
	let removeRow = () => {
		card.removeRow();
		card = card;
	};

	let open = false;
  	const toggle = () => (open = !open);
</script>

<h3 class="text-center my-3">Design A New Card</h3>

<Container fluid>
		<InputGroup>
			<Label class="m-2 col-1" for="title">Title:</Label>
			<Input
				class="m-1 rounded"
				type="text"
				id="title"
				name="title"
				required
				bind:value={card.title}
			/>
		</InputGroup>
		<InputGroup>
			<Label class="m-2 col-1" for="description">Description:</Label>
			<Input
				class="m-1 rounded"
				type="textarea"
				id="description"
				name="description"
				required
				bind:value={card.description}
			/>
		</InputGroup>
		<Container class="m-2 p-2">
			<Row class="justify-content-center">
				<Col class="col-md-2">
					<Button
						outline
						color="secondary"
						class="btn-sm ms-1"
						on:click={addRow}>Add a Question</Button
					>
				</Col>
				<Col class="col-md-2">
					<Button
						outline
						color="secondary"
						class="btn-sm ms-1"
						on:click={removeRow}>Remove a Question</Button
					>
				</Col>
			</Row>
		</Container>
		<Container class="border rounded p-2">
			{#each card.rows as row, index}
				<DesignRow bind:row label={`${index + 1}`}></DesignRow>
			{/each}
		</Container>
</Container>
<Container class="text-center pt-3">
	<Button color="primary" on:click={toggle}>
		Share Your Card
	  </Button>
	<Modal class="text-center" body header="Share Your Card" isOpen={open} {toggle}>
		<p>Save or copy this QR code by right-clicking on the image.</p>
		<p>Users can also scan this code on their device from your screen.</p>
		<QRCodeImage
				text={card.confidenceUrl(origin)}
				altText="QR Code for Card URL"
			/>
		<br><br>
		<p>Or share the plain text URL:</p>
		<Button color="primary" on:click={() => copyText(card.confidenceUrl(origin))}>Copy URL to Clipboard</Button>
	</Modal>
</Container>