<script lang="ts">
	import ConfidenceInput from "./Input.svelte";
	import { ConfidenceRow } from "$lib/types/confidence/Row";
    import { Row, Col } from "@sveltestrap/sveltestrap";

	export let label: string;
	export let row: ConfidenceRow;
	export let valid: Boolean;

	let glyph = '';

	let validate = () => {
		const sum = row.sum();
		valid = false;
		if (sum < row.length) {
			glyph = '🔽';
		} else if (sum > row.length) {
			glyph = '🔺';
		} else {
			valid = true;
			glyph = '✅';
		}
	}

	validate();
</script>

<Row class="border rounded m-3 p-2 shadow">
	<Col class="col-2 my-auto text-center"><strong>Question {label}</strong>
	</Col>
	<Col class="col-9 border-start border-end">
		<Row>
			{#each Array(row.length) as _, i}
				<ConfidenceInput on:change={validate} index={i} total={row.length} bind:value={row.input[i]}></ConfidenceInput>
			{/each}
		</Row>
	</Col>
		<Col class="col-1 my-auto text-end">
			{row.sum()}/{row.length} {glyph}
		</Col>
</Row>