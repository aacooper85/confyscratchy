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

<Row class="border rounded m-1">
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
		<InputGroup>
			{#each Array(row.length) as _, i}
				<ConfidenceInput index={i} total={row.length} bind:value={row.input[i]}></ConfidenceInput>
			{/each}
		</InputGroup>
	</Col>
</Row>