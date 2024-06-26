<script lang="ts">
    export let index: number;
    export let total: number;
    export let value: number;
</script>

<b>{String.fromCharCode(97 + index).toUpperCase()}:</b>
<input type="number" min="0" max={total} bind:value={value}/>