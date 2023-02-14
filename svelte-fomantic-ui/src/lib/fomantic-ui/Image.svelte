<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
</script>

{#if style.includes("header")}
    <div class="image header">
        <slot/>
    </div>
{:else}
    <img class={(ui?"ui ":"") + style + " image"} {...$$restProps}/>
{/if}