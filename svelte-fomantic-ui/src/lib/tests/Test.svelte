<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Input, Icon, Popup, Content, Calendar } from "../svelte-fomantic-ui.svelte";
</script>

<Input ui fluid left icon popup={{position :"bottom right", hoverable: true}}>
    <Icon calendar/>
    <Input placeholder="Date/Time"/>
</Input>
<Popup ui settings={{position :"bottom right", hoverable: true}}>
    <Content><Calendar ui></Calendar></Content>
</Popup>
