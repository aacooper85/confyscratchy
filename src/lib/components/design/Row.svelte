<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';
    import ConfidenceButton from "./Button.svelte";
    import { DesignRow } from "$lib/types/design/Row";

    export let label: string;
    export let row: DesignRow;

    let answerChoice = (index: number) => () => {
        row.answer = index;
    }

    let addOption = () => () => {
        row.length += 1;
    }

    let removeOption = () => () => {
        row.length -= 1;
        if (row.answer >= row.length) {
            row.answer = 0;
        }
    }
</script>

<p>
    <Button class="btn-sm btn-light" outline on:click={addOption()} disabled={row.length>=26}>⬆️</Button>
    <Button class="btn-sm btn-light" outline on:click={removeOption()} disabled={row.length<=1}>⬇️</Button>
    <b>{label}</b>
    {#each Array(row.length) as _,i}
        <ConfidenceButton index={i} answer={row.answer} on:click={answerChoice(i)}></ConfidenceButton>
    {/each}
<br>
</p>