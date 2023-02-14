<script lang="ts">
    export let value: string="";
    export let password: boolean=false;

    // TODO: Add other events such as key presses etc

</script>

{#if password}
    <input type="password" bind:value={value} {...$$restProps}/>
{:else}
    <input type="text" bind:value={value} {...$$restProps}/>
{/if}