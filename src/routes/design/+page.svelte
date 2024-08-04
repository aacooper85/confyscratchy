<script lang="ts">
	import DesignRow from "$lib/components/design/Row.svelte";
	import { DesignCard } from "$lib/types/design/Card";
	import { QRCodeImage } from "svelte-qrcode-image";
	import {
		Button,
		Card,
		Col,
		Container,
		Form,
		FormGroup,
		Input,
		InputGroup,
		Label,
		Row,
	} from "@sveltestrap/sveltestrap";

	let card: DesignCard = new DesignCard(); // includes default title and description

	let addRow = () => {
		card.addRow();
		card = card;
	};
	let removeRow = () => {
		card.removeRow();
		card = card;
	};
</script>

<h3 class="text-center my-3">Design A New Card</h3>

<Container fluid>
	<Form>
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
	</Form>
</Container>
<hr />

<!-- TO DO make the Share section a Collapsible element -->
<Container class="text-center">
<h3>Share Your Card</h3>

<a href={card.confidenceUrl()} target="_blank"
	><QRCodeImage
		text={card.confidenceUrl()}
		margin={2}
		altText="QR Code for Confidence Card URL"
	/></a
>
</Container>
