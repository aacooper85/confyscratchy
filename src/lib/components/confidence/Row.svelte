<script lang="ts">
	import ConfidenceInput from "./Input.svelte";
	import { ConfidenceRow } from "$lib/types/confidence/Row";
    import { Row, Col, InputGroup } from "@sveltestrap/sveltestrap";

	export let label: string;
	export let row: ConfidenceRow;
	export let valid: Boolean;

	let checkvalid = () => {
		let t = row.sum() === row.length;
		valid = t;
		return "";
	};
</script>

<Row class="font-monospace border rounded m-2 p-1">
	<Col class="col-3 my-auto">
		<Row>
			<Col class="col-6">
				{#if row.sum() > row.length}
					{checkvalid()}
					<strong>{row.sum()}/{row.length} 🔺</strong>
				{:else if row.sum() === row.length}
					{checkvalid()}
					{row.sum()}/{row.length} ✅
				{:else}
					{checkvalid()}
					<i>{row.sum()}/{row.length}</i> 🔽
				{/if}
			</Col>
			<Col class="col-6"><strong>Question {label}</strong></Col>
		</Row>
	</Col>
	<Col class="col-9 border-start">
		<Row>
			{#each Array(row.length) as _, i}
			<Col class="col-2">
				<ConfidenceInput index={i} total={row.length} bind:value={row.input[i]}></ConfidenceInput>
			</Col>
			{/each}
		</Row>
	</Col>
</Row>

<!-- <Row class="border rounded m-1 justify-content-start">
	<Col class="col-1">
		{#if row.sum() > row.length}
			{checkvalid()}
			<strong>{row.sum()}/{row.length} 🔺</strong>
		{:else if row.sum() === row.length}
			{checkvalid()}
			{row.sum()}/{row.length} ✅
		{:else}
			{checkvalid()}
			<i>{row.sum()}/{row.length}</i> 🔽
		{/if}
	</Col>
	<Col class="col-2"><strong>Question {label}</strong></Col>
		<Col class="col-9">
			{#each Array(row.length) as _, i}
				<ConfidenceInput index={i} total={row.length} bind:value={row.input[i]}></ConfidenceInput>
			{/each}
		</Col>
</Row> -->