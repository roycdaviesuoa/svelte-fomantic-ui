<script lang="ts">
    export let style: string = "";
    export let ui: boolean = false;
    export let _for: string = "";
</script>

{#if ui}
    <div class={"ui " + style + " label"}>
        <slot />
    </div>
{:else}
    <label for={_for} class={style}>
        <slot />
    </label>
{/if}