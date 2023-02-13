<script lang="ts">
    export let style: string = "";
    export let placeholder: string="";
    export let name: string="";
    export let checked: boolean=false;
    export let group: string="";
    export let value: string="";
    export let single: boolean=false;
</script>

{#if single}
    <div class={"ui " + style + " checkbox"}>
        <input type="checkbox" {placeholder} {name} {value} bind:checked>
        <slot/>
    </div>
{:else}
    <div class={"ui " + style + " checkbox"}>
        <input type="checkbox" {placeholder} {name} {value} bind:checked bind:group>
        <slot/>
    </div>
{/if}
