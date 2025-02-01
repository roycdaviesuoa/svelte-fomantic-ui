<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { serialize, classString, otherProps } from "../svelte-fomantic-ui";

    export let ui: boolean = false;
    export let h1: boolean = false;
    export let h2: boolean = false;
    export let h3: boolean = false;
    export let h4: boolean = false;
    export let h5: boolean = false;
    export let h6: boolean = false;
    export let popup: object | boolean | undefined = undefined;
    
</script>

<!-- Document Headers -->
{#if h1}
    <h1 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h1>
{:else if h2}
    <h2 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h2>
{:else if h3}
    <h3 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h3>
{:else if h4}
    <h4 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h4>
{:else if h5}
    <h5 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h5>
{:else if h6}
    <h6 class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </h6>
{:else}
<!-- Section Header -->
    <div class={classString(ui, $$restProps, "header")} data-module={serialize((popup?"popup":null), (typeof(popup) === "boolean")?undefined:popup)} {...otherProps($$restProps)}>
        <slot />
    </div>
{/if}