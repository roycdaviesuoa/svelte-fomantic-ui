<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let value: string="";
    export let password: boolean=false;

    // TODO: Add other events such as key presses etc

</script>

{#if password}
    <input type="password" class={uiProps($$restProps)} bind:value={value} {...otherProps($$restProps)}/>
{:else}
    <input type="text" class={uiProps($$restProps)} bind:value={value} {...otherProps($$restProps)}/>
{/if}