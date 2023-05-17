// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    shape : `
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
    `,
    cube : `
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
    `,
    text : `
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
    `
}

export default code;