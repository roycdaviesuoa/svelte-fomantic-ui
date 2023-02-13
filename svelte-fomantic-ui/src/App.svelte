<script lang="ts">
    import { construct_svelte_component } from 'svelte/internal';
  import { Container, Emoji, Input, Label, Image, Content, Flag, Header, Divider, Button, Buttons, Icon } from './lib/fomantic-ui/Core.svelte';
  import { List, Item, Description, Segment, Dimmer, Loader, Placeholder, Line, Paragraph, Reveal, Breadcrumb, Link, Section } from './lib/fomantic-ui/Core.svelte';
  import { Form, Field, Fields, Checkbox, Textarea, Radio, Dropdown, Option} from './lib/fomantic-ui/Core.svelte';

  let doSomething = (e) =>
  {
    console.log(e);
  }

  let processForm = (e) =>
  {
    console.log(data);
    console.log(e);
  }

  let processInput = (e) =>
  {
    console.log(e);
  }

  let data = {
    firstname : "",
    surname: "",
    agree: true,
    description: "",
    fruit: "apples",
    gender: "female"
  }
</script>


  <main>
  <Breadcrumb style="mini">
    <Link name="home" on:click={doSomething} style="section">Home</Link>
    <Icon style="right chevron divider"/>
    <Link name="registration" on:click={doSomething} style="section">Registration</Link>
    <Icon style="right chevron divider"/>
    <Section style="active">Person Information</Section>
  </Breadcrumb>

    <Form>
      <Fields>
        <Field>
          <Label>First Name</Label>
          <Input name="first-name" placeholder="First Name" bind:value={data.firstname}/>
        </Field>
        <Field>
          <Label>Last Name</Label>
          <Input name="first-name" placeholder="First Name" bind:value={data.surname}/>
        </Field>
        <Field>
          <Label>Description</Label>
          <Textarea bind:value={data.description}></Textarea>
        </Field>
        <Field>
          <Checkbox style="" single bind:checked={data.agree}>
            <Label>
              I agree to the Terms and Conditions
            </Label>
          </Checkbox>
        </Field>
      </Fields>

      <Fields style="inline multiple">
        <Label _for="fruit">Select your favorite fruit:</Label>
        <Field>
          <Checkbox name="fruit" bind:group={data.fruit} value="oranges">
            <Label>Oranges</Label>
          </Checkbox>
        </Field>
        <Field>
          <Checkbox name="fruit" bind:group={data.fruit} value="apples">
            <Label>Apples</Label>
          </Checkbox>
        </Field>
        <Field>
          <Checkbox name="fruit" bind:group={data.fruit} value="bananas">
            <Label>Bananas</Label>
          </Checkbox>
        </Field>
      </Fields>

      <Field>
        <Dropdown bind:value={data.gender}>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Dropdown>
      </Field>

      <Button name={"submit"} on:click={processForm} type="submit">Submit</Button>
    </Form>



  <!-- <Breadcrumb style="mini">
    <Link name="home" on:click={doSomething} style="section">Home</Link>
    <Icon style="right chevron divider"/>
    <Link name="registration" on:click={doSomething} style="section">Registration</Link>
    <Icon style="right chevron divider"/>
    <Section style="active">Person Information</Section>
  </Breadcrumb>
<br/>
  <div class="ui mini breadcrumb">
    <a class="section">Home</a>
    <i class="right chevron icon divider"></i>
    <a class="section">Registration</a>
    <i class="right chevron icon divider"></i>
    <div class="active section">Personal Information</div> -->
  <!-- </div> -->

  <!-- <Segment style="raised">
    <p></p>
    <Dimmer style="active">
      <Loader/>
    </Dimmer>
  </Segment>

  <Segment style="raied red">
    <Placeholder style="fluid">
      <Image style="header">
        <Line style="very long"/>
        <Line/>
      </Image>
      <Paragraph>
        <Line/>
        <Line/>
      </Paragraph>
    </Placeholder>
  </Segment>

  <Reveal style="small circular move right image">
    <Image style="visible content" src="/images/image.png"/>
    <Image style="hidden content" src="/images/rachel.png"/>
  </Reveal> -->


  <!-- <Segment style="inverted">
    <List style="inverted">
      <Item>
        <Image style="avatar" src="/images/rachel.png"/>
        <Content>
          <Header>Rachel</Header>
          <Description>
            Hello World
          </Description>
        </Content>
      </Item>
      <Item>
        <Image style="avatar" src="/images/rachel.png"/>
        <Content>
          <Header>Rachel</Header>
          <Description>
            Hello World
          </Description>
        </Content>
      </Item>
    </List>
  </Segment>
  <Header style="large icon">
    <Icon style="align center"/>
    <Content>Hello World</Content>
  </Header>
  <Divider style="horizontal">OR</Divider>

  <Input style="labeled" placeholder="Search...">
    <Label>http:...</Label>
  </Input>

  <Button name="test" style="labeled icon" on:click={doSomething}>
    <Icon style="cloud"/> Hello World
  </Button>

  <Button style="animated" >
    <div class="visible content">Next</div>
    <div class="hidden content">
      <Icon style="right arrow"></Icon>
    </div>
  </Button>

  <Emoji style="large loading link" dataEmoji="angel"/>

  <Image style="small" src="/images/image.png"/>

  <Flag style="medium se"/>
  <Buttons name="Buttons" on:click={doSomething} style="icon">
    <Button name="Left" on:click={doSomething}><Icon style="align left"/></Button>
    <Button name="Center"><Icon style="align center"/></Button>
    <Button name="Right"><Icon style="align right"/></Button>
    <Button name="Justify"><Icon style="align justify"/></Button>
  </Buttons>
  <Divider style="horizontal">OR</Divider>
  <Container style="left aligned scrolling text">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.

    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
  </Container> -->
</main>

<style>

</style>