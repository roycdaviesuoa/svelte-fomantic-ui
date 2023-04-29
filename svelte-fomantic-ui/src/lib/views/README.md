## Views

Various modules and module groups for more complex Fomantic UI views. For example: 

```xml
<Card ui popup>
    <Image>
        <Image src="/images/watchmen-horizontal.jpg"/>
    </Image>
    <Content>
        <Header>Watchmen</Header>
        <Description>
            In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, 
            but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.
        </Description>
    </Content>
    <Buttons ui two bottom attached>
        <Button ui>
            <Icon add/>
            Queue
        </Button>
        <Button ui primary>
            <Icon play/>
            Watch
        </Button>
    </Buttons>
</Card>
<Popup ui>
    <Header>User Rating</Header>
    <Rating ui yellow data-rating="3"/>
</Popup>
```

and

```xml
<Items ui>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
    <Item>
        <Image>
            <Image src="/images/image.png"/>
        </Image>
        <Content>
            <Link header>Header</Link>
            <Meta>
                <span>Description</span>
            </Meta>
            <Description>
                <p></p>
            </Description>
            <Extra>
                Additional Details
            </Extra>
        </Content>
    </Item>
</Items>
```