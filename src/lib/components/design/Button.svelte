<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';

    export let index: number;
    export let answer: number;
</script>

<Button class="btn-sm ms-1 btn-light" outline on:click value={index}>
    {String.fromCharCode(97 + index).toUpperCase()}
    {#if (index == answer)} ✅ {:else} 🚫 {/if}
</Button>