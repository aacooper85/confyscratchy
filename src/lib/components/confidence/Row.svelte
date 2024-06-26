<script lang="ts">
    import ConfidenceInput from "./Input.svelte";
    import { ConfidenceRow } from "$lib/types/confidence/Row";
    export let label: string;
    export let row: ConfidenceRow;
</script>

<p><b>{label}</b>
{#each Array(row.length) as _,i}
    <ConfidenceInput total={row.length} value={0} ></ConfidenceInput>
{/each}
<br>
</p>