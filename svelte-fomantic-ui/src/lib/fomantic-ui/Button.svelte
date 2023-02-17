<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"

    export let ui: boolean=false;
    export let toggle: boolean=false;
    export let name: string = "";
    export let active: boolean = false;
    export let on_style: string = "";
    export let off_style: string = "";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target: event.target});
    }
    function doToggle(event) {
        active = !active;
        dispatch('toggle', {name: name, active: active, target: event.target})
    }
</script>

{#if toggle}
    <div on:click={doToggle} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " " + (active?on_style:off_style) + " button"} {...otherProps($$restProps)}>
        {#if active}
            <slot name="on"/>
        {:else}
            <slot name="off"/>
        {/if}
    </div>
{:else}
    <div on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + uiProps($$restProps) + " button"} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}