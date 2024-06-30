<script lang="ts">
    import { ScratchRow } from "$lib/types/scratch/Row";
    export let label: string;
    export let row: ScratchRow;

	let properlabel = (index:number) => {
		if (row.scratched(index)) {
			if (row.answer === index) {
				return label+"✓";
			} else {
				return label+"✗";
			}
		} else {
			return label+"?";
			}
		}
		
    $: if (scratched) {
        if (correct) {
            color = "primary";
            outline = false;
            fullLabel = label+"✓";
        } else {
            color = "danger";
            outline = true;
            fullLabel = label+"✗";
        }
    } else {
        color = "secondary";
        outline = false;
        fullLabel = label+"?";
    }
	
</script>

<p><b>{label}</b>
{#each Array(row.length) as _,i}
		<button on:click={row.scratch(i)}>{properlabel(i)}</button>
{/each}
<br>
</p>