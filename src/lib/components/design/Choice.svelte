<script lang="ts">
    import { Button } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let answer: number;
</script>

{#if index == answer}
    <Button color="success" class="btn-sm m-1 rounded" value={index}>
        {String.fromCharCode(97 + index).toUpperCase()} ✅
    </Button>
{:else}
    <Button outline color="danger" class="btn-sm m-1 rounded text-reset" on:click value={index}>
        {String.fromCharCode(97 + index).toUpperCase()} 🚫
    </Button>
{/if}