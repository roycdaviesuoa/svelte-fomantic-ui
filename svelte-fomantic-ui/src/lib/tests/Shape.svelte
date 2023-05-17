<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Shape, Side, Sides, Card, Link, Content, Meta, Image, Description, Icon, Floated, Header, Date, Buttons, Button, Center, Divider } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Shape';

    let shape4shape = "square";
</script>


<Examples
    title = "Shape examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/shape.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Shape -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Shape" code = {Code.shape}>

        <Shape ui people id="shape1">
            <Sides>
                <Side active>
                    <Card ui>
                        <Link image href="#">
                            <Image src="/images/steve.jpg"/>
                        </Link>
                        <Content>
                            <Link header href="#">Steve Jobes</Link>
                            <Meta>
                                <Link>Acquaintances</Link>
                            </Meta>
                            <Description>
                                Steve Jobes is a fictional character designed to resemble someone familiar to readers.
                            </Description>
                        </Content>
                        <Content extra>
                            <Floated right>
                                Joined in 2014
                            </Floated>
                            <span>
                                <Icon user/>
                                151 Friends
                            </span>
                        </Content>
                    </Card>
                </Side>
                <Side>
                    <Card ui>
                        <Image>
                            <Image src="/images/stevie.jpg"/>
                        </Image>
                        <Content>
                            <Header>Stevie Feliciano</Header>
                            <Meta>
                                <Date>Joined in 2014</Date>
                            </Meta>
                            <Description>
                                Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.
                            </Description>
                        </Content>
                        <Content extra>
                            <Link>
                                <Icon user/>
                                22 Friends
                            </Link>
                        </Content>
                    </Card>
                </Side>
            </Sides>
        </Shape>
        <Divider ui/>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape1", "flip left")} popup={{"content":"Flip Left", "position": "bottom center"}}><Icon left long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape1", "flip up")} popup={{"content":"Flip Up", "position": "bottom center"}}><Icon down long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape1", "flip down")} popup={{"content":"Flip Down", "position": "bottom center"}}><Icon up long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape1", "flip right")} popup={{"content":"Flip Right", "position": "bottom center"}}><Icon right long arrow/></Button>
        </Buttons>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape1", "flip over")} popup={{"content":"Flip Over", "position": "bottom center"}}><Icon retweet/></Button>
            <Button ui icon on:click={()=>behavior("shape1", "flip back")} popup={{"content":"Flip Back", "position": "bottom center"}}><Icon flipped retweet/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Cube -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Cube" code = {Code.cube}>

        <Shape ui cube id="shape2">
            <Sides>
                <Side active> <Content> <Center> 1 </Center> </Content> </Side>
                <Side> <Content> <Center> 2 </Center> </Content> </Side>
                <Side> <Content> <Center> 3 </Center> </Content> </Side>
                <Side> <Content> <Center> 4 </Center> </Content> </Side>
                <Side> <Content> <Center> 5 </Center> </Content> </Side>
                <Side> <Content> <Center> 6 </Center> </Content> </Side>
            </Sides>
        </Shape>
        <Divider ui/>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape2", "flip left")} popup={{"content":"Flip Left", "position": "bottom center"}}><Icon left long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape2", "flip up")} popup={{"content":"Flip Up", "position": "bottom center"}}><Icon down long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape2", "flip down")} popup={{"content":"Flip Down", "position": "bottom center"}}><Icon up long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape2", "flip right")} popup={{"content":"Flip Right", "position": "bottom center"}}><Icon right long arrow/></Button>
        </Buttons>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape2", "flip over")} popup={{"content":"Flip Over", "position": "bottom center"}}><Icon retweet/></Button>
            <Button ui icon on:click={()=>behavior("shape2", "flip back")} popup={{"content":"Flip Back", "position": "bottom center"}}><Icon flipped retweet/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Text -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Text" code = {Code.text}>

        <Shape ui text id="shape3">
            <Sides>
                <Side active ui header>Did you know? This side starts visible.</Side>
                <Side ui header>Help, its another side!</Side>
                <Side ui header>This is the last side</Side>
            </Sides>
        </Shape>
        <Divider ui/>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape3", "flip left")} popup={{"content":"Flip Left", "position": "bottom center"}}><Icon left long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape3", "flip up")} popup={{"content":"Flip Up", "position": "bottom center"}}><Icon down long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape3", "flip down")} popup={{"content":"Flip Down", "position": "bottom center"}}><Icon up long arrow/></Button>
            <Button ui icon on:click={()=>behavior("shape3", "flip right")} popup={{"content":"Flip Right", "position": "bottom center"}}><Icon right long arrow/></Button>
        </Buttons>

        <Buttons ui>
            <Button ui icon on:click={()=>behavior("shape3", "flip over")} popup={{"content":"Flip Over", "position": "bottom center"}}><Icon retweet/></Button>
            <Button ui icon on:click={()=>behavior("shape3", "flip back")} popup={{"content":"Flip Back", "position": "bottom center"}}><Icon flipped retweet/></Button>
        </Buttons>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>