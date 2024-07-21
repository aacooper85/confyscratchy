<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	
	export let buttonlabel = String;
	export let correct = boolean;
	export let revealed = boolean;

	
	export let glyph = () =>{
		if(revealed){
			if(correct){
				return "✅";
			} else {
				return "🚫";
			}
		} else {
			return "?";
		}
	}
	
	const dispatch = createEventDispatcher<{
		Scratch:null}>()
	

		
		
	
	
</script>	

{#if revealed}
 <button disabled>{buttonlabel}{glyph()}</button>
{:else}
<button on:click={() => dispatch('Scratch')}>{buttonlabel}{glyph()}</button>
{/if}