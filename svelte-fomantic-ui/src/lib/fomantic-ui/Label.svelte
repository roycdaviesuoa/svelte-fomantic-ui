<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
    export let checkbox: boolean = false;
</script>

{#if checkbox}
    <label>
        <slot />
    </label>
{:else}
    <div class={(ui?"ui ":"") + style + " label"} {...$$restProps}>
        <slot />
    </div>
{/if}