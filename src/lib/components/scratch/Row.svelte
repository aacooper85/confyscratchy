<script lang="ts">
    import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	import Button from "$lib/components/scratch/ScratchChoice.svelte";
	
	export let row: ScratchRow;
	export let label = String;
	
	export let Answer = (index:number) =>{
		return row.answer===index;}
		
</script>

<p><b>{label}</b>
	{#each Array(row.length) as _,i}
		<Button correct={Answer(i)} buttonlabel={String.fromCharCode(97 + i).toUpperCase()}> </Button>
	{/each}
	{row.scratches.size}
<br>
</p>