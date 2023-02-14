<script lang="ts">
    export let style: string = "";
    export let ui: boolean=false;
    export let active: boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target: event.target})
    }
    function doToggle() {
        active = !active;
        dispatch('click', {name: name, active: active, target: event.target})
    }
</script>

{#if style.includes("toggle")}
    <div on:click={doToggle} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + style + (active?" active ":"") + " button"} {...$$restProps}>
        {#if active}
            <slot name="on"/>
        {:else}
            <slot name="off"/>
        {/if}
    </div>
{:else}
    <div on:click={doClick} on:keydown on:keypress on:keyup class={(ui?"ui ":"") + style + " button"} {...$$restProps}>
        <slot />
    </div>
{/if}

    