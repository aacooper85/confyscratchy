<script lang="ts">
    import { Input } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let total: number;
    export let value: number;
</script>

<div class="col">
    <b>{String.fromCharCode(97 + index).toUpperCase()}:</b>
    <Input class="form-control form-control-sm" type="number" min="0" max={total} bind:value={value}/>
</div>