<script lang="ts">

    // NOT YET COMPLETE
    
    export let style: string = "";
    export let placeholder: string="";
    export let name: string="";
    export let value: string="";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>

<div class={"ui " + style + " input"}>
    <input type="file" {name}>
</div>
