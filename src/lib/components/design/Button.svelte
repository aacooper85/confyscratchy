<script lang="ts">
    export let index: number;
    export let answer: number;
</script>

<button on:click value={index}>
    {String.fromCharCode(97 + index).toUpperCase()}
    {#if (index == answer)} ✅ {:else} 🚫 {/if}
</button>