<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, behavior, Progress, Segment, Div } from "../svelte-fomantic-ui.svelte";
    import {parse, stringify, toJSON, fromJSON} from 'flatted';

    console.log(stringify({a:3, b:5, c:[1,2,3,4,5]}));
</script>

<Segment ui>

<Div ui name={"text"} settings={{a:3, b:5, c:[1,2,3,4,5]}}>
    Hello World
</Div>

</Segment>

