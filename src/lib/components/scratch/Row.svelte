<script lang="ts">
    import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	import Button from "$lib/components/scratch/ScratchChoice.svelte";
	
	export let row: ScratchRow;
	export let label = String;
	
	export let Answer = (index:number) =>{
		return row.answer===index;}
	export let scratchlist = new Array<boolean>;
	
</script>

<p><b>{label}</b>
	{#each Array(row.length) as _,i}
		<Button correct={Answer(i)} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} bind:scratched={scratchlist[i]}> </Button>
	{/each}
<br>
</p>