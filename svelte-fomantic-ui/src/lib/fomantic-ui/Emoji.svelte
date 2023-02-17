<script lang="ts">
    import {uiProps, otherProps} from "./Helpers"
    export let ui: boolean = false;
    export let disabled: boolean = false;
    export let loading: boolean = false;
    export let small: boolean = false;
    export let medium: boolean = false;
    export let large: boolean = false;
    export let big: boolean = false;
    export let relaxed: boolean = false;
    export let link: boolean = false;

    console.log(uiProps($$restProps));
    console.log(otherProps($$restProps));
    console.log((ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (relaxed?"relaxed ":"") + (link?"lnk ":""));
</script>

<em class       ={(ui?"ui ":"") + (disabled?"disabled ":"") + (loading?"loading ":"") + (small?"small ":"") + (medium?"medium ":"") + (large?"large ":"") + (big?"big ":"") + (relaxed?"relaxed ":"") + (link?"lnk ":"")} 
    data-emoji  ={uiProps($$restProps)}>
    <slot />
</em>