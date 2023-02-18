<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    import { createEventDispatcher } from 'svelte';

    export let ui: boolean=false;
    export let link: boolean=false;
    export let name: string="";

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target: event.target});
    }

</script>

{#if link}
    <i class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} on:click={doClick} {...otherProps($$restProps)}>
        <slot />
    </i>
{:else}
    <i class={(ui?"ui ":"") + uiProps($$restProps) + " icon"} {...otherProps($$restProps)}>
        <slot />
    </i>
{/if}