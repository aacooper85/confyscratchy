<script lang="ts">
	import { ScratchRow } from "$lib/types/scratch/Row";
	import { ScratchChoice } from "$lib/types/scratch/Row";
	
	export let buttonlabel = String;
	export let correct : boolean;
	export let Button = new ScratchChoice(false,correct,buttonlabel);
	export let scratched : boolean;
	scratched = false;
	
	export let glyph = "?";
	
	export let scratch = ()=>{
		Button.scratch;
		Button=Button;
		scratched=true;
		if (Button.correct){
			glyph = "✅";
			} else {
			glyph = "🚫";
			}
		}
	
</script>	
	
<button on:click={scratch()}>{buttonlabel}{glyph}</button>