<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"

    export let ui: boolean=false;
    export let name: string="";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target: event.target});
    }
</script>

<div on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " buttons"} {...otherProps($$restProps)}>
    <slot />
</div>