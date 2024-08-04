<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button } from "@sveltestrap/sveltestrap";

	export let buttonlabel: string;
	export let correct: boolean;
	export let revealed: boolean;

	export let glyph = () => {
		if (revealed) {
			if (correct) {
				return "✅";
			} else {
				return "🚫";
			}
		} else {
			return "?";
		}
	};

	const dispatch = createEventDispatcher<{
		Scratch: null;
	}>();
</script>

{#if revealed}
	<Button class="btn-sm ms-1 btn-light" disabled>{buttonlabel}{glyph()}</Button>
{:else}
	<Button class="btn-sm ms-1 btn-light" on:click={() => dispatch("Scratch")}>{buttonlabel}{glyph()}</Button>
{/if}
