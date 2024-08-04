<script lang="ts">
    import ConfidenceInput from "./Input.svelte";
    import { ConfidenceRow } from "$lib/types/confidence/Row";
    export let label: string;
    export let row: ConfidenceRow;
	export let valid: Boolean;
	let checkvalid = ()=>{
		let t = (row.sum()===row.length);
		valid=t;
		return '';}
		

</script>

<p><b>{label}</b>
{#each Array(row.length) as _,i}
	<ConfidenceInput index={i} total={row.length} bind:value={row.input[i]}></ConfidenceInput>
{/each}
{#if (row.sum() > row.length)}
	{checkvalid()}
	<b>{row.sum()}/{row.length} 🔺</b>
{:else if (row.sum()===row.length)}
	{checkvalid()}
	{row.sum()}/{row.length} ✅
{:else}
	{checkvalid()}
	<i>{row.sum()}/{row.length}</i> 🔽
{/if}
	<br>
	</p>
