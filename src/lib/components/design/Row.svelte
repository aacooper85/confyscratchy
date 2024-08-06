<script lang="ts">
    import ConfidenceChoice from "./Choice.svelte";
    import { DesignRow } from "$lib/types/design/Row";
    import { Button, FormGroup, Row, Col } from "@sveltestrap/sveltestrap";

    export let label: string;
    export let row: DesignRow;

    let answerChoice = (index: number) => () => {
        row.answer = index;
    };

    let addOption = () => () => {
        row.length += 1;
    };

    let removeOption = () => () => {
        row.length -= 1;
        if (row.answer >= row.length) {
            row.answer = 0;
        }
    };
</script>

<FormGroup>
    <Row>
        <Col class="col-1">
            <Button on:click={addOption()} outline block color="secondary" class="btn-sm m-1" disabled={row.length >= 26}>More</Button>
        </Col>
        <Col class="col-1">
            <Button on:click={removeOption()} outline block color="secondary" class="btn-sm m-1" disabled={row.length <=1}>Less</Button>
        </Col>
        <Col class="col-2">
            <Button disabled block color="dark" class="btn-sm m-1"><strong>Question {label}</strong></Button>
        </Col>
        <Col class="col-8">
            {#each Array(row.length) as i}
                <ConfidenceChoice index={i} answer={row.answer} on:click={answerChoice(i)}></ConfidenceChoice>
            {/each}
        </Col>
    </Row>
</FormGroup>
