<script lang="ts">
    export let style: string = "";
    export let placeholder: string="";
    export let name: string="";
    export let value: string="";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>

{#if style.includes("file")}
    <div class={"ui " + style + " input"}>
        <input type="file" {name}>
    </div>
{:else}
    <div class={"ui " + style + " input"}>
        <slot/>
        <input type="text" {placeholder} {name} bind:value={value}>
    </div>
{/if}
