<script lang="ts">
    import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	import Button from "$lib/components/scratch/ScratchChoice.svelte";
	
	export let row: ScratchRow;
	export let label = String;
	
	export let Answer = (index:number) =>{
		return row.answer===index;}
	export let scratchlist = new Array<boolean>;
	
	export let truecount = (list:Array)=>{
		let sum=0;
		list.forEach(entry => {if(entry) {sum += 1}});
		return sum;}
	
	export let score = (list:Array) =>{
		if(list[row.answer]){
			if(row.length - 2*(truecount(list)-1)>0){
			return row.length - 2*(truecount(list)-1);}
			else {return 0;}}
		else {return 0;}
		}
	
</script>

<p><b>{label}</b>
	{#each Array(row.length) as _,i}
		<Button correct={Answer(i)} buttonlabel={String.fromCharCode(97 + i).toUpperCase()} bind:scratched={scratchlist[i]}> </Button>
	{/each}
	score:<b>{score(scratchlist)}/{row.length}</b>
<br>
</p>