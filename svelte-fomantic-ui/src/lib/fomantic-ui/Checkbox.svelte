<script lang="ts">
    export let style: string = "";
    export let name: string="";
    export let value: string="";
    export let placeholder: string="";
    export let checked: boolean=false;
    export let ui:boolean = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function doClick(event) {     
        dispatch('click', {name: event.target.name, value: event.target.value, checked: event.target.checked, target: event.target});
    }
</script>

<div class={(ui?"ui ":"") + style + " checkbox"}>
    <input type="checkbox" {placeholder} {name} bind:checked bind:value on:click={doClick} {...$$restProps}>
    <slot/>
</div>

