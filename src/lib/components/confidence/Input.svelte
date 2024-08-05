<script lang="ts">
    import { Input } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let total: number;
    export let value: number;
</script>

<strong>{String.fromCharCode(97 + index).toUpperCase()}:</strong>
<Input type="number" min="0" max={total} bind:value />