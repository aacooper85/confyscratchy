<script lang="ts">
    import ConfidenceButton from "./Button.svelte";
    import { ConfidenceRow } from "$lib/types/confidence/Row";
    export let label: string;
    export let row: ConfidenceRow;

    let answerChoice = (index: number) => () => {
        row.answer = index;
    }
</script>

<p><b>{label}</b>
{#each Array(row.length) as _,i}
    <ConfidenceButton index={i} answer={row.answer} on:click={answerChoice(i)}></ConfidenceButton>
{/each}
<br>
</p>