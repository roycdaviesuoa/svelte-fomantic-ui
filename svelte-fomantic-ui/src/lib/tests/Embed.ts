// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    url : `
<script lang="ts">
    import { Embed, Button } from "../svelte-fomantic-ui.svelte";

    import { update } from "svelte-fomantic-ui/src/lib/modules/Embed";

    function activate(id) {
        update(id, {})
    }
</script>

<Button ui fluid green attached top on:click={()=>activate("bear")}>Enable</Button>
<Embed ui id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `,
    activate : `
<Embed ui activate data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `,
    content_ids : `
<Button ui fluid green attached top on:click={()=>activate("bear2")}>Enable</Button>
<Embed ui id="bear2" data-source="youtube" data-id="O6Xo21L0ybE"/>
    `,
    specifying_metadata : `
<Button ui fluid green attached top on:click={()=>activate("bear3")}>Enable</Button>
<Embed ui id="bear3" data-source="youtube" data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"/>
    `,
    specifying_programmatically : `
<script lang="ts">
    import { Embed, Button } from "svelte-fomantic-ui";

    import { update } from "svelte-fomantic-ui/src/lib/modules/Embed";

    function specify(id) {
        update(id, {
            source      : 'youtube',
            id          : 'O6Xo21L0ybE',
            placeholder : '/images/bear-waving.jpg'
          });
    }
</script>

<Button ui fluid green attached top on:click={()=>specify("bear4")}>Enable</Button>
<Embed ui id="bear4"/>
    `, 
    youtube : `
<Button ui fluid green attached top on:click={()=>activate("bear5")}>Enable</Button>
<Embed ui id="bear5" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png"/>
    `,
    vimeo : `
<Button ui fluid green attached top on:click={()=>activate("vimeo1")}>Enable</Button>
<Embed ui id="vimeo1" data-source="vimeo" data-id="125292332" data-placeholder="/images/vimeo-example.jpg"/>
    `
}

export default code;