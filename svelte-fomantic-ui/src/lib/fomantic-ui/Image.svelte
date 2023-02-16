<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
    export let header: boolean = false;
</script>

{#if header}
    <!-- Used with Placeholder -->
    <div class="image header">
        <slot/>
    </div>
{:else}
    <img class={(ui?"ui ":"") + style + " image"} {...$$restProps}/>
{/if}