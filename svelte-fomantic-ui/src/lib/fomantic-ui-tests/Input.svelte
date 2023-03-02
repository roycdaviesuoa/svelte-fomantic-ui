<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Input, Input_Wrapper, Label, Icon, Header, Button } from "../fomantic-ui/Core.svelte";
    import "./examplestyles.css";
    import "./prism.css";
    import Prism from 'svelte-prism';
    import { loop_guard } from "svelte/internal";

    let filename1: string = "";
    let filename2: string = "";
</script>

<div class="example-document">
    <h3 class="document-header">Emoji examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/input.html">here</a></div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Input_Wrapper ui>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">File input</h4>

        <Input_Wrapper ui file>
            <Input type="file"/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui file>
    <Input type="file"/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Invisible file input</h4>
        <p>Note the underscore before the 'for' in the label.  This is due to not being able to use the reserved word 'for' as a variable in typescript.</p>

        <Input ui invisible file type="file" id="invisibleupload1" on:change={(e) => {filename1 = e.target.files[0].name; } }/>
        <Label ui red icon button _for="invisibleupload1">
            <Icon file/>
            Open any file
        </Label>
        <Header h4>File name chosen is: {filename1}</Header>
        
        <Input ui invisible file type="file" id="invisibleupload2" on:change={(e) => {filename2 = e.target.files[0].name; } }/>
        <Label ui placeholder segment _for="invisibleupload2">
            <Header ui icon>
                <Icon upload/>
                Click here to upload
            </Header>
        </Label>
        <Header h4>File name chosen is: {filename2}</Header>

        <Prism language="svelte" source={`
<Input ui invisible file type="file" id="invisibleupload1" on:change={(e) => {filename1 = e.target.files[0].name; } }/>
<Label ui red icon button _for="invisibleupload1">
    <Icon file/>
    Open any file
</Label>
<Header h4>File name chosen is: {filename1}</Header>

<Input ui invisible file type="file" id="invisibleupload2" on:change={(e) => {filename2 = e.target.files[0].name; } }/>
<Label ui placeholder segment _for="invisibleupload2">
    <Header ui icon>
        <Icon upload/>
        Click here to upload
    </Header>
</Label>
<Header h4>File name chosen is: {filename2}</Header>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Focus</h4>

        <Input_Wrapper ui focus>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui focus>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Loading</h4>

        <Input_Wrapper ui left icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon purple double loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon red fast elastic loading>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui left icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon purple double loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui icon red fast elastic loading>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Disabled</h4>

        <Input_Wrapper ui disabled>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui disabled icon>
            <Icon search/>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui disabled>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>

<Input_Wrapper ui disabled icon>
    <Icon search/>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Error</h4>

        <Input_Wrapper ui error>
            <Input type="text" placeholder="Search..."/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui error>
    <Input type="text" placeholder="Search..."/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input types</h4>

        <Input_Wrapper ui>
            <Input type="date"/>
        </Input_Wrapper>
        <Input_Wrapper ui>
            <Input type="email" placeholder="E-Mail Address" required=""/>
        </Input_Wrapper>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Icon</h4>

        <Input_Wrapper ui icon>
            <Input type="text" placeholder="Search..."/>
            <Icon search/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui left icon>
            <Input type="text" placeholder="Search users..."/>
            <Icon users/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon>
            <Input type="text" placeholder="Search..."/>
            <Icon circular search link/>
        </Input_Wrapper>
        <br/><br/>
        <Input_Wrapper ui icon>
            <Input type="text" placeholder="Search..."/>
            <Icon inverted circular search link/>
        </Input_Wrapper>

        <Prism language="html" source={`
<Input_Wrapper ui icon>
    <Input type="text" placeholder="Search..."/>
    <Icon search/>
</Input_Wrapper>

<Input_Wrapper ui left icon>
    <Input type="text" placeholder="Search users..."/>
    <Icon users/>
</Input_Wrapper>

<Input_Wrapper ui icon>
    <Input type="text" placeholder="Search..."/>
    <Icon circular search link/>
</Input_Wrapper>

<Input_Wrapper ui icon>
    <Input type="text" placeholder="Search..."/>
    <Icon inverted circular search link/>
</Input_Wrapper>
    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Prism language="html" source={`

    `}/>
    </div>

    <div class="example">
        <h4 class="example-header">Input</h4>

        <Prism language="html" source={`

    `}/>
    </div>
</div>
