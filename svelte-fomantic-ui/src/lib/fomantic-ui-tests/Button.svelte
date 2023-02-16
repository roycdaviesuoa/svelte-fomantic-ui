<script lang="ts">
    import { Button, Buttons, Content, Icon, Segment, Link, Divider } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/elements/Button.html">here</a></h3>

<h4>A standard Button</h4>
<Button ui>Follow</Button>

<h4>Emphasis</h4>
<Button ui style="primary">Primary</Button>
<Button ui style="secondary">Secondary</Button>

<h4>Animated</h4>
<Button ui style="animated">
    <Content style="visible">Next</Content>
    <Content style="hidden">
        <Icon style="right arrow"/>
    </Content>
</Button>
<Button ui style="vertical animated">
    <Content style="hidden">Shop</Content>
    <Content style="visible">
        <Icon style="shop"/>
    </Content>
</Button>
<Button ui style="animated fade">
    <Content style="visible">Sign-up for a Pro account</Content>
    <Content style="hidden">
        $12.99 a month
    </Content>
</Button>

<h4>Labeled</h4>
<Button ui style="labeled">
    <Button ui>
        <Icon style="heart"/> Like
    </Button>
    <Link ui style="basic label">
        2,048
    </Link>
</Button>
<Button ui style="left labeled">
    <Link ui style="basic right pointing label">
      2,048
    </Link>
    <Button ui>
      <Icon style="heart"/> Like
    </Button>
</Button>
<Button ui style="left labeled">
    <Link ui style="basic label">
      1,048
    </Link>
    <Button ui style="icon">
      <Icon style="fork"/>
    </Button>
</Button>

<h4>Icon</h4>
<Button ui style="icon">
  <Icon style="cloud"/>
</Button>

<h4>Labeled Icon</h4>
<Button ui style="labeled icon">
  <Icon style="pause"/>
  Pause
</Button>
<Button ui style="right labeled icon">
  <Icon style="right arrow"/>
  Next
</Button>
<Button ui style="labeled icon">
  <Icon style="loading spinner"/>
  Loading
</Button>

<h4>Basic</h4>
<Button ui style="basic">
  <Icon style="user"/>
  Add Friend
</Button>
<br/><br/>
<Button ui style="primary basic">Primary</Button>
<Button ui style="secondary basic">Secondary</Button>
<Button ui style="positive basic">Positive</Button>
<Button ui style="negative basic">Negative</Button>
<br/><br/>
<Button ui style="red basic">Red</Button>
<Button ui style="orange basic">Orange</Button>
<Button ui style="yellow basic">Yellow</Button>
<Button ui style="olive basic">Olive</Button>
<Button ui style="green basic">Green</Button>
<Button ui style="teal basic">Teal</Button>
<Button ui style="blue basic">Blue</Button>
<Button ui style="violet basic">Violet</Button>
<Button ui style="purple basic">Purple</Button>
<Button ui style="pink basic">Pink</Button>
<Button ui style="brown basic">Brown</Button>
<Button ui style="grey basic">Grey</Button>
<Button ui style="black basic">Black</Button>

<h4>Tertiary</h4>
<Button ui style="tertiary">
  Cancel Action
</Button>
<br/><br/>
<Button ui style="primary tertiary">Primary</Button>
<Button ui style="secondary tertiary">Secondary</Button>
<Button ui style="red tertiary">Red</Button>
<Button ui style="orange tertiary">Orange</Button>
<Button ui style="yellow tertiary">Yellow</Button>
<Button ui style="olive tertiary">Olive</Button>
<Button ui style="green tertiary">Green</Button>
<Button ui style="teal tertiary">Teal</Button>
<Button ui style="blue tertiary">Blue</Button>
<Button ui style="violet tertiary">Violet</Button>
<Button ui style="purple tertiary">Purple</Button>
<Button ui style="pink tertiary">Pink</Button>
<Button ui style="brown tertiary">Brown</Button>
<Button ui style="grey tertiary">Grey</Button>
<Button ui style="black tertiary">Black</Button>

<h4>Inverted</h4>
<Segment ui style="inverted">
  <Button ui style="inverted">Standard</Button>
  <Button ui style="inverted primary">Primary</Button>
  <Button ui style="inverted secondary">Secondary</Button>
  <Button ui style="inverted red">Red</Button>
  <Button ui style="inverted orange">Orange</Button>
  <Button ui style="inverted yellow">Yellow</Button>
  <Button ui style="inverted olive">Olive</Button>
  <Button ui style="inverted green">Green</Button>
  <Button ui style="inverted teal">Teal</Button>
  <Button ui style="inverted blue">Blue</Button>
  <Button ui style="inverted violet">Violet</Button>
  <Button ui style="inverted purple">Purple</Button>
  <Button ui style="inverted pink">Pink</Button>
  <Button ui style="inverted brown">Brown</Button>
  <Button ui style="inverted grey">Grey</Button>
  <Button ui style="inverted black">Black</Button>
</Segment>
<br/><br/>
<Segment ui style="inverted">
  <Button ui style="inverted basic">Basic</Button>
  <Button ui style="inverted primary basic">Primary</Button>
  <Button ui style="inverted secondary basic">Secondary</Button>
  <Button ui style="inverted red basic">Basic Red</Button>
  <Button ui style="inverted orange basic">Basic Orange</Button>
  <Button ui style="inverted yellow basic">Basic Yellow</Button>
  <Button ui style="inverted olive basic">Basic Olive</Button>
  <Button ui style="inverted green basic">Basic Green</Button>
  <Button ui style="inverted teal basic">Basic Teal</Button>
  <Button ui style="inverted blue basic">Basic Blue</Button>
  <Button ui style="inverted violet basic">Basic Violet</Button>
  <Button ui style="inverted purple basic">Basic Purple</Button>
  <Button ui style="inverted pink basic">Basic Pink</Button>
  <Button ui style="inverted brown basic">Basic Brown</Button>
  <Button ui style="inverted grey basic">Basic Grey</Button>
  <Button ui style="inverted black basic">Basic Black</Button>
</Segment>

<h4>Groups</h4>
<Buttons ui>
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
</Buttons>

<h4>Icon Buttons</h4>
<Buttons ui style="icon">
  <Button ui><Icon style="align left"/></Button>
  <Button ui><Icon style="align center"/></Button>
  <Button ui><Icon style="align right"/></Button>
  <Button ui><Icon style="align justify"/></Button>
</Buttons>
<Buttons ui style="icon">
  <Button ui><Icon style="bold"/></Button>
  <Button ui><Icon style="underline"/></Button>
  <Button ui><Icon style="text width"/></Button>
</Buttons>

<h4>Conditionals</h4>
<Buttons ui>
  <Button ui>Cancel</Button>
  <div class="or"></div>
  <Button ui style="positive">Save</Button>
</Buttons>

<h4>Active State</h4>
<Button ui style="active">
  <Icon style="user"/>
  Follow
</Button>

<h4>Disabled</h4>
<Button ui style="disabled">
  <Icon style="user"/>
  Followed
</Button>

<h4>Loading</h4>
<Button ui style="loading">Loading</Button>
<Button ui style="basic loading">Loading</Button>
<Button ui style="primary loading">Loading</Button>
<Button ui style="secondary loading">Loading</Button><br/><br/>
<Button ui style="double loading">Loading</Button>
<Button ui style="basic double loading">Loading</Button>
<Button ui style="primary double loading">Loading</Button>
<Button ui style="secondary double loading">Loading</Button><br/><br/>
<Button ui style="elastic loading">Loading</Button>
<Button ui style="basic elastic loading">Loading</Button>
<Button ui style="primary elastic loading">Loading</Button>
<Button ui style="secondary elastic loading">Loading</Button>

<h4>Social</h4>
<Button ui style="facebook">
  <Icon style="facebook"/>
  Facebook
</Button>
<Button ui style="twitter">
  <Icon style="twitter"/>
  Twitter
</Button>
<Button ui style="google plus">
  <Icon style="google plus"/>
  Google Plus
</Button>
<Button ui style="vk">
  <Icon style="vk"/>
  VK
</Button>
<Button ui style="linkedin">
  <Icon style="linkedin"/>
  LinkedIn
</Button>
<Button ui style="instagram">
  <Icon style="instagram"/>
  Instagram
</Button>
<Button ui style="youtube">
  <Icon style="youtube"/>
  YouTube
</Button>
<Button ui style="whatsapp">
  <Icon style="whatsapp"/>
  WhatsApp
</Button>
<Button ui style="telegram">
  <Icon style="telegram"/>
  Telegram
</Button>

<h4>Size</h4>
<Button ui style="mini">
  Mini
</Button>
<Button ui style="tiny">
  Tiny
</Button>
<Button ui style="small">
  Small
</Button>
<Button ui style="medium">
  Medium
</Button>
<Button ui style="large">
  Large
</Button>
<Button ui style="big">
  Big
</Button>
<Button ui style="huge">
  Huge
</Button>
<Button ui style="massive">
  Massive
</Button>

<h4>Floated</h4>
<Button ui style="right floated">Right Floated</Button>
<Button ui style="left floated">Left Floated</Button>
<br/>

<h4>Colored</h4>
<Button ui style="red">Red</Button>
<Button ui style="orange">Orange</Button>
<Button ui style="yellow">Yellow</Button>
<Button ui style="olive">Olive</Button>
<Button ui style="green">Green</Button>
<Button ui style="teal">Teal</Button>
<Button ui style="blue">Blue</Button>
<Button ui style="violet">Violet</Button>
<Button ui style="purple">Purple</Button>
<Button ui style="pink">Pink</Button>
<Button ui style="brown">Brown</Button>
<Button ui style="grey">Grey</Button>
<Button ui style="black">Black</Button>

<h4>Compact</h4>
<Button ui style="compact">
  Hold
</Button>
<Button ui style="compact icon">
  <Icon style="pause icon"/>
</Button>
<Button ui style="compact labeled icon">
  <Icon style="pause icon"/>
  Pause
</Button>


<h4>Toggle</h4>
<Button ui style="toggle" active={false} on_style="active" off_style="grey">
  <Content slot="on">Voted</Content>
  <Content slot="off">Vote</Content>
</Button>


<h4>Positive</h4>
<Button ui style="positive">Positive Button</Button>

<h4>Negative</h4>
<Button ui style="negative">Negative Button</Button>

<h4>Fluid</h4>
<Button ui style="fluid">Fits container</Button>

<h4>Circular</h4>
<Button ui style="circular icon">
  <Icon style="icon settings"/>
</Button>
<br/>
<Button ui style="circular facebook icon">
  <Icon style="facebook icon"/>
</Button>
<Button ui style="circular twitter icon">
  <Icon style="twitter icon"/>
</Button>
<Button ui style="circular linkedin icon">
  <Icon style="linkedin icon"/>
</Button>
<Button ui style="circular google plus icon">
  <Icon style="google plus icon"/>
</Button>

<h4>Vertically Attached</h4>
<Button ui style="top attached">Top</Button>
<Segment ui style="attached">
  <p>blah blah blah</p>
</Segment>
<Button ui style="bottom attached">Bottom</Button>
<br/>
<Buttons ui style="two top attached">
  <Button ui>One</Button>
  <Button ui>Two</Button>
</Buttons>
<Segment ui style="attached">
<p>Hello World</p>
</Segment>
<Buttons ui style="two bottom attached">
  <Button ui>One</Button>
  <Button ui>Two</Button>
</Buttons>

<h4>Horizontally Attached</h4>
<Button ui style="left attached">Left</Button>
<Button ui style="right attached">Right</Button>
  
<h4>Vertical Buttons</h4>
<Buttons ui style="vertical">
  <Button ui>Feed</Button>
  <Button ui>Messages</Button>
  <Button ui>Events</Button>
  <Button ui>Photos</Button>
</Buttons>

<h4>Stackable</h4>
<Buttons ui style="stackable">
  <Button ui>Feed</Button>
  <Button ui>Messages</Button>
  <Button ui>Events</Button>
  <Button ui>Photos</Button>
</Buttons>

<h4>Icon Buttons</h4>
<Buttons ui style="icon">
  <Button ui><Icon style="align left"/></Button>
  <Button ui><Icon style="align center"/></Button>
  <Button ui><Icon style="align right"/></Button>
  <Button ui><Icon style="align justify"/></Button>
</Buttons>
<Buttons ui style="icon">
  <Button ui><Icon style="bold"/></Button>
  <Button ui><Icon style="underline"/></Button>
  <Button ui><Icon style="text width"/></Button>
</Buttons>

<h4>Labeled Icon Buttons</h4>
<Buttons ui style="vertical labeled icon">
  <Button ui>
    <Icon style="pause"/>
    Pause
  </Button>
  <Button ui>
    <Icon style="play"/>
    Play
  </Button>
  <Button ui>
    <Icon style="shuffle"/>
    Shuffle
  </Button>
</Buttons>

<h4>Mixed Group</h4>
<Buttons ui>
  <Button ui style="labeled icon">
      <Icon style="left chevron"/>
      Back
  </Button>
  <Button ui>
      <Icon style="stop icon"/>
      Stop
  </Button>
  <Button ui style="right labeled icon">
      Forward
      <Icon style="right chevron icon"/>
  </Button>
</Buttons>

<h4>Equal Width</h4>
<Buttons ui style="five">
  <Button ui>Overview</Button>
  <Button ui>Specs</Button>
  <Button ui>Warranty</Button>
  <Button ui>Reviews</Button>
  <Button ui>Support</Button>
</Buttons>
<Buttons ui style="three">
  <Button ui>Overview</Button>
  <Button ui>Specs</Button>
  <Button ui>Support</Button>
</Buttons>

<h4>Colored Buttons</h4>
<Buttons ui style="blue">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
</Buttons>

<h4>Basic Buttons</h4>
<Buttons ui style="basic">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
</Buttons>
<Divider ui/>
<Buttons ui style="vertical basic">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
</Buttons>
<Divider ui/>
<Buttons ui>
  <Button ui style="red basic">One</Button>
  <Button ui style="blue basic">Two</Button>
  <Button ui style="green basic">Three</Button>
</Buttons>

<h4>Group Sizes</h4>
<Buttons ui style="large">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
</Buttons>
<br/><br/>
<Buttons ui style="small basic icon">
  <Button ui><Icon style="file"/></Button>
  <Button ui><Icon style="save"/></Button>
  <Button ui><Icon style="upload"/></Button>
  <Button ui><Icon style="download"/></Button>
</Buttons>
<br/><br/>
<Buttons ui>
  <Button ui>One</Button>
  <div class="or"></div>
  <Button ui>Two</Button>
</Buttons>

<h4>Wrapping Buttons</h4>
<Buttons ui style="wrapped wrapping">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
  <Button ui>Four</Button>
  <Button ui>Five</Button>
  <Button ui>Six</Button>
  <Button ui>Seven</Button>
  <Button ui>Eight</Button>
  <Button ui>Nine</Button>
  <Button ui>Ten</Button>
  <Button ui>Eleven</Button>
  <Button ui>Twelve</Button>
  <Button ui>Thirteen</Button>
  <Button ui>Fourteen</Button>
  <Button ui>Fifteen</Button>
  <Button ui>Sixteen</Button>
  <Button ui>Seventeen</Button>
  <Button ui>Eighteen</Button>
  <Button ui>Nineteen</Button>
  <Button ui>Twenty</Button>
</Buttons>

<h4>Spaced Buttons</h4>
<Buttons ui style="spaced wrapping">
  <Button ui>One</Button>
  <Button ui>Two</Button>
  <Button ui>Three</Button>
  <Button ui>Four</Button>
  <Button ui>Five</Button>
  <Button ui>Six</Button>
  <Button ui>Seven</Button>
  <Button ui>Eight</Button>
  <Button ui>Nine</Button>
  <Button ui>Ten</Button>
  <Button ui>Eleven</Button>
  <Button ui>Twelve</Button>
  <Button ui>Thirteen</Button>
  <Button ui>Fourteen</Button>
  <Button ui>Fifteen</Button>
  <Button ui>Sixteen</Button>
  <Button ui>Seventeen</Button>
  <Button ui>Eighteen</Button>
  <Button ui>Nineteen</Button>
  <Button ui>Twenty</Button>
</Buttons>
