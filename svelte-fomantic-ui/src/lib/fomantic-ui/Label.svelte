<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
    export let checkbox: boolean = false;
</script>

{#if checkbox}
    <!-- Used with Checkbox only -->
    <label>
        <slot />
    </label>
{:else}
    <div class={(ui?"ui ":"") + style + " label"} {...$$restProps}>
        <slot />
    </div>
{/if}