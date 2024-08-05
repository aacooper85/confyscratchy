<script lang="ts">
    import NumberSpinner from "svelte-number-spinner";
    import { InputGroup, Label } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let total: number;
    export let value: number;
</script>

<InputGroup class="w-25">
<Label class="my-auto">{String.fromCharCode(97 + index).toUpperCase()}:</Label>
<NumberSpinner bind:value min="0" max={total} />
</InputGroup>