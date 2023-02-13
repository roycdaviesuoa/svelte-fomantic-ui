<script lang="ts">
    export let style: string = "";
    export let src: string = "";
    export let alt: string = "";

</script>

{#if style.includes("header")}
    <div class="image header">
        <slot/>
    </div>
{:else if style.includes("content")}
    <img class={style} {src} {alt}/>
{:else}
    <img class={"ui " + style + " image"} {src} {alt}/>
{/if}