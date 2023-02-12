<script lang="ts">
  import { Container, Emoji, Image, Content, Flag, Header, Divider, Button, Buttons, Icon } from './lib/fomantic/Core.svelte';

  let doSomething = (e) =>
  {
    console.log(e);
  }
</script>

<main>
  <Header style="large icon">
    <Icon style="align center"/>
    <Content>Hello World</Content>
  </Header>
  <Divider style="horizontal">OR</Divider>

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
  </Container>
</main>

<style>

</style>