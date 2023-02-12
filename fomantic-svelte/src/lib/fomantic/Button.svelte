<script lang="ts">
    export let style: string = "";
    export let name: string = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

<button {name} on:click={doClick} on:keydown on:keypress on:keyup class={"ui " + style + " button"}>
    <slot />
</button>