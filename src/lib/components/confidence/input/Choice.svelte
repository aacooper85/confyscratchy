<script lang="ts">
    import { Col, InputGroup, Label } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let total: number;
    export let value: number;

    let nonZero = value > 0;
    function highlight() {
        nonZero = value > 0;
    }
</script>

<style>
    .highlighted {
        background-color: rgb(229, 255, 209);
    }
</style>

<Col class="col-2"><InputGroup class="my-1">
<Label class="my-auto me-2 font-monospace">{String.fromCharCode(97 + index).toUpperCase()}</Label>
<input type="number" class="rounded text-center" class:highlighted={nonZero} bind:value min="0" max={total} on:input={highlight} on:change/>
</InputGroup>
</Col>