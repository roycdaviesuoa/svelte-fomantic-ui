<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {uiProps, otherProps} from "../Helpers"
    export let ui: boolean = false;
    export let checkbox: boolean = false;
</script>

{#if checkbox}
    <!-- Used with Checkbox -->
    <label>
        <slot />
    </label>
{:else}
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " label"} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}