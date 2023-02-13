<script lang="ts">
    export let style: string = "";
    export let href: string = "";
    export let name: string = "";
    export let ui: boolean = false;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function doClick(event) {
        dispatch('click', {name: name, target:event.target})
    }
</script>

{#if ui}
    {#if href === ""}
        <a class={"ui " + style} on:click={doClick} on:keydown on:keypress on:keyup >
            <slot />
        </a>
    {:else}
        <a class={"ui " + style} {href} on:click={doClick} on:keydown on:keypress on:keyup >
            <slot />
        </a>
    {/if}
{:else}
    {#if href === ""}
        <a class={style} on:click={doClick} on:keydown on:keypress on:keyup >
            <slot />
        </a>
    {:else}
        <a class={style} on:click={doClick} {href} on:keydown on:keypress on:keyup >
            <slot />
        </a>
    {/if}
{/if}