<script lang="ts">
    export let style: string = "";
    export let name: string="";
    export let group: string="";
    export let value: string="";
    export let placeholder: string="";
    export let single: boolean=false;
</script>

{#if single}
    <div class={"ui " + style + " radio checkbox"}>
        <input type="radio" {placeholder} {name} {value} >
        <slot/>
    </div>
{:else}
    <div class={"ui " + style + " radio  checkbox"}>
        <input type="radio" {placeholder} {name} {value} bind:group>
        <slot/>
    </div>
{/if}

