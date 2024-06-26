<script lang="ts">
    import ConfidenceInput from "./Input.svelte";
    import { ConfidenceRow } from "$lib/types/confidence/Row";
    export let label: string;
    export let row: ConfidenceRow;
</script>

<div class="row w-75">
    <div class="col">
        <b>{label}</b>
    </div>
    {#each Array(row.length) as _,i}
        <ConfidenceInput index={i} total={row.length} bind:value={row.input[i]} ></ConfidenceInput>
    {/each}
    <div class="col">
        {#if (row.sum() > row.length)}
            <b>{row.sum()}/{row.length} 🔺</b>
        {:else if (row.sum() == row.length)}
            {row.sum()}/{row.length} ✅
        {:else}
            <i>{row.sum()}/{row.length}</i> 🔽
        {/if}
    </div>
</div>