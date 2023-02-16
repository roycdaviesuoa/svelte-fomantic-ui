<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
    export let name: string = "";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

<a class={(ui?"ui ":"") + style} on:click={doClick} on:keydown on:keypress on:keyup {...$$restProps}>
    <slot />
</a>