// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    popup : `
<Button ui icon popup={{content:"Add users to your feed"}}>
    <Icon add/>
</Button>
<Button ui icon popup data={{content:"Add users to your feed"}}>
    <Icon add/>
</Button>
<Button ui icon popup data-content="Add users to your feed">
    <Icon add/>
</Button>
<Button ui icon popup data-tooltip="Add users to your feed" data-position="top left">
    <Icon add/>
</Button>
<Button ui icon popup>
    <Icon add/>
</Button>
<Popup ui>
    <Content>Add users to your feed</Content>
</Popup>
    `,
titled : `
<Image ui avatar popup src="/images/elliot.jpg" data={{title : "Elliot Fu", content : "Elliot has been a member since July 2012"}}/>
<Image ui avatar popup src="/images/stevie.jpg" data-title="Stevie Feliciano" data-content="Stevie has been a member since August 2013"/>
<Image ui avatar popup src="/images/matt.jpg" data-title="Matt" data-content="Matt has been a member since July 2014"/>
<Icon question circular colored green inverted popup data={{title : "WHO?", content : "Who else?", position : "bottom center"}}/>
<Link ui popup href="https://fomantic-ui.com" data-content="Click here to go to the Fomantic UI website.">Fomantic UI</Link>
    `,
    html : `
<Card ui popup data-html="<div class='header'>User Rating</div><div class='content'><div class='ui yellow rating'><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i><i class='active star icon'></i></div></div>">
    <Image>
        <Image src="/images/totoro-horizontal.jpg"/>
    </Image>
    <Content>
        <Header>My Neighbor Totoro</Header>
        <Description>
            Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.
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
    `,
    pre_existing : `
<Card ui popup>
    <Image>
        <Image src="/images/watchmen-horizontal.jpg"/>
    </Image>
    <Content>
        <Header>Watchmen</Header>
        <Description>
            In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.
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
    `,
    no_javascript : `
<Button ui icon data-tooltip="Add users to your feed">
    <Icon add/>
</Button>
<Button ui icon data={{tooltip : "Add users to your feed", inverted : ""}}>
<Icon add/>
</Button>
    `,
    tooltip_position : `
<Button ui data-tooltip="Add users to your feed" data-position="top left">
    Top Left
</Button>
<Button ui data-tooltip="Add users to your feed" data-position="top center">
    Top Center
</Button>
<Button ui data-tooltip="Add users to your feed" data-position="top right">
    Top Right
</Button>
<Divider ui/>
<Button ui data-tooltip="Add users to your feed" data-position="bottom left">
    Bottom Left
</Button>
<Button ui data-tooltip="Add users to your feed" data-position="bottom center">
    Bottom Center
</Button>
<Button ui data-tooltip="Add users to your feed" data-position="bottom right">
    Bottom Right
</Button>
<Divider ui/>
<Button ui data-tooltip="Add users to your feed" data-position="right center">
    Right Center
</Button>
<Button ui data-tooltip="Add users to your feed" data-position="left center">
    Left Center
</Button>
    `,
    tooltip_position_inverted : `
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="top left"}}>
    Top Left
</Button>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="top center"}}>
    Top Center
</Button>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="top right"}}>
    Top Right
</Button>
<Divider ui/>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="bottom left"}}>
    Bottom Left
</Button>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="bottom center"}}>
    Bottom Center
</Button>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="bottom right"}}>
    Bottom Right
</Button>
<Divider ui/>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="right center"}}>
    Right Center
</Button>
<Button ui data={{inverted : "", tooltip : "Add users to your feed", position="left center"}}>
    Left Center
</Button>
    `,
    size : `
{#each ['mini', 'tiny', 'small', 'medium', 'large', 'huge'] as size}
    <Button ui data={{tooltip : "Add users to your feed", variation : size}}>
        {size.charAt(0).toUpperCase() + size.slice(1)}
    </Button>
{/each}
<Divider ui/>
{#each ['mini', 'tiny', 'small', 'medium', 'large', 'huge'] as size}
    <Button ui data={{tooltip : "Add users to your feed", variation : size, inverted : "", position : "bottom center"}}>
        {size.charAt(0).toUpperCase() + size.slice(1)}
    </Button>
{/each}
    `,
    basic : `
<Button ui data-tooltip="The default theme's basic tooltip removes the pointing arrow." data-variation="basic">
    Basic
</Button>
<Button ui data-tooltip="You can combine me" data-variation="tiny basic">
    Tiny Basic
</Button>
<Button ui data={{inverted : "", tooltip : "The default theme's basic tooltip removes the pointing arrow.", variation : "basic"}}>
    Basic
</Button>
<Button ui data={{inverted : "", tooltip : "You can combine me", variation : "tiny basic"}}>
    Tiny Basic
</Button>
    `,
    multiline : `
<Button ui data-tooltip="Look,&nbsp;I&nbsp;have&nbsp;multiple&nbsp;lines!
    -one
    -two
    -three" data-position="bottom center" data-variation="multiline">
        Multiline tooltip
</Button>
    `,
    colored : `
<Buttons ui spaced compact wrapping>
    {#each ['Red', 'Orange', 'Yellow', 'Olive', 'Green', 'Teal', 'Blue', 'Violet', 'Purple', 'Pink', 'Brown', 'Gray', 'Black'] as color}
        <Button data-variation={color.toLowerCase()} data-tooltip={color} class="ui button">{color}</Button>
    {/each}
</Buttons>   
    `,
    loading : `
<Grid ui>
    <Row doubling two column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="inverted loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
    </Row>
</Grid>
    `,
    colored_loading : `
<Grid ui>
    <Row doubling four column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="purple loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="orange loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="blue double loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
        <Column>
            <Image ui tiny avatar popup src="/images/tom.jpg" data-position="bottom left" data-variation="green slow loading" data-title="Matt" data-content="Matt has been a member since July 2014" />
        </Column>
    </Row>
</Grid>
    `,
    width : `
<Icon circular heart link popup data-content="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide." data-variation="wide"/>
<Icon circular heart link popup data-content="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide." data-variation="very wide"/>
    `,
    fluid : `
<Button ui popup>Show fluid popup</Button>
<Popup ui fluid>
    <Grid ui four column divided center aligned>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
        <Column>4</Column>
    </Grid>
</Popup>
    `,
    flowing : `
<Button ui popup>Show flowing popup</Button>
<Popup ui flowing>
    <Grid ui three column divided center aligned>
        <Column>
            <Header ui h4>Basic Plan</Header>
            <p><b>2</b> projects, $10 a month</p>
            <Button ui>Choose</Button>
        </Column>
        <Column>
            <Header ui h4>Business Plan</Header>
            <p><b>5</b> projects, $20 a month</p>
            <Button ui>Choose</Button>
        </Column>
        <Column>
            <Header ui h4>Premium Plan</Header>
            <p><b>8</b> projects, $25 a month</p>
            <Button ui>Choose</Button>
        </Column>
    </Grid>
</Popup>
    `,
    inverted : `
<Icon circular heart icon link popup data-content="Hello. This is an inverted popup with javascript" data-variation="inverted"/>
<Button ui icon data={{tooltip : "Hello. This is an inverted popup without javascript", position : "top left", inverted : ""}}>
    <Icon add/>
</Button>
    `,
    colored_javascript : `
<Buttons ui spaced compact wrapping>
    {#each ['Red', 'Orange', 'Yellow', 'Olive', 'Green', 'Teal', 'Blue', 'Violet', 'Purple', 'Pink', 'Brown', 'Gray', 'Black'] as color}
        <Button ui popup>{color}</Button>
        <Popup ui _={color.toLowerCase()}>
            {color}
        </Popup>
    {/each}
</Buttons> 
    `
}

export default code;