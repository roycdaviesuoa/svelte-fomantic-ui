// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    url : `
<script lang="ts">
    import { update, Embed, Button } from "svelte-fomantic-ui";
</script>

<Button ui fluid green attached top on:click={()=>update("bear")}>Enable</Button>
<Embed ui id="bear" data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `,
    activate : `
<Embed ui activate data-url="https://www.youtube.com/embed/O6Xo21L0ybE" data-placeholder="/images/bear-waving.jpg"/>
    `,
    content_ids : `
<Button ui fluid green attached top on:click={()=>update("bear2")}>Enable</Button>
<Embed ui id="bear2" data-source="youtube" data-id="O6Xo21L0ybE"/>
    `,
    specifying_metadata : `
<Button ui fluid green on:click={()=>update("bear3")}>Enable</Button>
<Embed ui id="bear3" data-source="youtube" data-id="O6Xo21L0ybE" data-icon="video" data-placeholder="/images/bear-waving.jpg"/>
    `,
    specifying_programmatically : `
<script lang="ts">
    import { update, Embed, Button } from "svelte-fomantic-ui";

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
<Button ui fluid green attached top on:click={()=>update("bear5")}>Enable</Button>
<Embed ui id="bear5" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png"/>
`,
    vimeo : `
<Button ui fluid green attached top on:click={()=>update("vimeo1")}>Enable</Button>
<Embed ui id="vimeo1" data={{source : "vimeo", id : "125292332", placeholder : "/images/vimeo-example.jpg"}}/>
`,
    any_content : `
<Button ui fluid green attached top on:click={()=>update("any")}>Enable</Button>
<Embed ui id="any" data={{url : "https://rasterbuster.lubber.de", placeholder : "/images/image-16by9.png", icon : "right circle arrow"}}/>
`,
    behaviors : `
<script lang="ts">
    import { behavior, Embed, Button, Grid, Column, Row, Header } from "svelte-fomantic-ui";
</script>

<Grid ui>
    <Row six column>
        <Column><Button ui fluid green on:click={()=>behavior("content", "change", "youtube", "O6Xo21L0ybE")}>Youtube</Button></Column>
        <Column><Button ui fluid blue on:click={()=>behavior("content", "change", "vimeo", "125292332")}>Vimeo</Button></Column>
        <Column><Button ui fluid brown on:click={()=>behavior("content", "change", "url", "", "https://fomantic-ui.com")}>Webpage</Button></Column>
        <Column><Button ui fluid yellow on:click={()=>output = behavior("content", "get type")}>Get type</Button></Column>
        <Column><Button ui fluid orange on:click={()=>output = behavior("content", "get source")}>Get source</Button></Column>
        <Column><Button ui fluid purple on:click={()=>output = behavior("content", "get url")}>Get URL</Button></Column>
    </Row>
    <Row one column centered>
        <Column><Header h4>{output}</Header></Column>
    </Row>
</Grid>

<Embed ui id="content"/>
    `
}

export default code;