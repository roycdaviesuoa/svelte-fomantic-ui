<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import {serialize, uiProps, otherProps} from "../svelte-fomantic-ui"
    export let ui: boolean=false;
    export let h1: boolean=false;
    export let h2: boolean=false;
    export let h3: boolean=false;
    export let h4: boolean=false;
    export let h5: boolean=false;
    export let h6: boolean=false;
    export let settings: object={};
    export let popup: boolean=false;
</script>

<!-- Document Headers -->
{#if h1}
    <h1 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h1>
{:else if h2}
    <h2 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h2>
{:else if h3}
    <h3 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h3>
{:else if h4}
    <h4 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h4>
{:else if h5}
    <h5 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h5>
{:else if h6}
    <h6 class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </h6>
{:else}
<!-- Section Header -->
    <div class={(ui?"ui ":"") + uiProps($$restProps) + " header"} data-settings={serialize(settings)} data-module_type={(popup?"popup":null)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}