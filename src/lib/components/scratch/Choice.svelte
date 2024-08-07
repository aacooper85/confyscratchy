<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button, Col } from "@sveltestrap/sveltestrap";

	export let buttonlabel: string;
	export let correct: boolean;
	export let revealed: boolean;

	const style = "border rounded my-auto font-monospace p-1";

	let glyph = () => {
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

<Col class="col-2">
	{#if revealed}
		<Button outline color="dark" class={style} disabled>{buttonlabel} {glyph()}</Button>
	{:else}
		<Button outline color="dark" class={style} on:click={() => dispatch("Scratch")}>{buttonlabel} {glyph()}</Button>
	{/if}
</Col>