<script lang="ts">
    import NumberSpinner from "svelte-number-spinner";
    import { Button, Container, InputGroup, Label } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let total: number;
    export let value: number;
</script>

<div class="mx-1">
<Label>{String.fromCharCode(97 + index).toUpperCase()}:</Label>
<Button outline color="danger" on:click={() => {value--;}} class="btn-sm px-1 border-0">-</Button>
<NumberSpinner bind:value min="0" max={total} class="w-25 my-1 rounded text-end"/>
<Button outline color="success" on:click={() => {value++;}} class="btn-sm px-1 border-0">+</Button>
</div>