<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean = false;
    export let header: boolean = false;
</script>

{#if header}
    <!-- Used with Placeholder -->
    <div class="image header">
        <slot/>
    </div>
{:else}
    <img class={(ui?"ui ":"") + uiProps($$restProps) + " image"} {...otherProps($$restProps)}/>
{/if}