<script lang="ts">
    export let total: number;
    export let value: number;
</script>

<input type="number" min="0" max={total} value={value}/>