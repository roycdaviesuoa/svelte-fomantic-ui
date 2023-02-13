<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
</script>

{#if ui}
    <div class={"ui " + style + " divider"}>
        <slot />
    </div>
{:else}
    <div class={style + " divider"}>
        <slot />
    </div>
{/if}