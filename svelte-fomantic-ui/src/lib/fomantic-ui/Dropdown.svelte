<script lang="ts">
    export let value: string = "";
    export let name: string = "";
    export let style: string = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

<select bind:value on:click={doClick} on:keydown on:keypress on:keyup class={"ui " + style + " dropdown"} {...$$restProps}>
    <slot/>
</select>
