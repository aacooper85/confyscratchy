<script lang="ts">


    import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	import {ConfidenceRow} from "$lib/types/confidence/Row";
	import Button from "$lib/components/scratch/ScratchChoice.svelte";

	
	
	export let crow = ConfidenceRow;
	export let label = String;
	export let row=crow.castToScratchRow();
	
	
	export let Answer = (index:number) =>{
		return row.answer===index;}
	export let revealrow=false;
	
	let Scratch = (index:number) => () => {
		row.scratch(index); 
		if(row.scratches[row.answer]){
			revealrow=true;
		}
		console.log("Scratched"+index);
		row=row;
		console.log(revealrow);
    }
 

	
</script>

<p><b>{label}</b>
	{#if revealrow}
		{#each Array(row.length) as _,i}
			<Button correct={Answer(i)} revealed={revealrow} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} > </Button>
		{/each}
	{:else}
	{#each Array(row.length) as _,i}
		<Button correct={Answer(i)} revealed={row.scratches[i]} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} on:Scratch={Scratch(i)}> </Button>
	{/each}
	{/if}
	score:<b>{row.score()}/{row.length}</b> 
<br>
</p>