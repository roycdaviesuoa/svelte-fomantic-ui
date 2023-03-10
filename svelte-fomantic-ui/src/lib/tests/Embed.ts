// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    url : `
<script lang="ts">
    import { Embed, Button } from "../svelte-fomantic-ui.svelte";

    import { update } from "../modules/Embed";

    function activate(id) {
        update(id, {})
    }
</script>

<Button ui fluid green on:click={()=>activate("bear")}>Enable</Button>
<Embed ui id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `,
    activate : `
<Embed ui activate id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `
}

export default code;