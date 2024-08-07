<script lang="ts">
    import ConfidenceChoice from "./Choice.svelte";
	import { ConfidenceRow } from "$lib/types/confidence/Row";
    import { Row, Col } from "@sveltestrap/sveltestrap";

	export let label: string;
	export let row: ConfidenceRow;
    export let revealed: boolean;

    let score = () => {
        if (revealed) {
            return `${row.score()}/${row.length}`
        } else {
            return `?/${row.length}`;
        }
    }
</script>

<Row class="border rounded m-3 mb-4 p-2 shadow">
	<Col class="col-2 my-auto text-center"><strong>Question {label}</strong>
	</Col>
	<Col class="col-8 border-start border-end">
		<Row>
			{#each Array(row.length) as _, i}
                <ConfidenceChoice index={i} value={row.input[i]} revealed={revealed} correct={row.answer == i}/>
			{/each}
		</Row>
	</Col>
    <Col class="col-2 my-auto text-end">Your Score: {score()}</Col>
</Row>