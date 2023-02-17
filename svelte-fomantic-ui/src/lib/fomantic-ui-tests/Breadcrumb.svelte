<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Icon, Segment } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/breadcrumb.html">here</a></h3>

<h4>A standard breadcrumb</h4>
<Breadcrumb ui>
  <Link section>Home</Link>
  <Divider>/</Divider>
  <Link section>Store</Link>
  <Divider>/</Divider>
  <Section active>T-shirt</Section>
</Breadcrumb>

<br/><br/>
<Breadcrumb ui>
  <Link section>Home</Link>
  <Icon right angle divider/>
  <Link section>Store</Link>
  <Icon right angle divider/>
  <Section active>T-shirt</Section>
</Breadcrumb>

<h4>Content</h4>
<Breadcrumb ui>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>

<h4>Link</h4>
<Breadcrumb ui>
  <Link section>Home</Link>
  <Divider>/</Divider>
  <Section active>Search for: <Link href="#">paper towels</Link></Section>
</Breadcrumb>

<h4>Inverted</h4>
<Segment ui inverted>
  <Breadcrumb ui inverted>
      <Link section>Home</Link>
      <Icon right chevron divider/>
      <Link section>Registration</Link>
      <Icon right chevron divider/>
      <Section active>Personal Information</Section>
  </Breadcrumb>
  <p></p>
  <Breadcrumb ui inverted>
      <Section>Home</Section>
      <Icon right chevron divider/>
      <Section>Registration</Section>
      <Icon right chevron divider/>
      <Section active>Personal Information</Section>
  </Breadcrumb>
</Segment>

<h4>Size</h4>
<Breadcrumb ui mini>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui tiny>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui small>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui large>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui big>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui huge>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui massive>
  <Link section>Home</Link>
  <Icon right chevron divider/>
  <Link section>Registration</Link>
  <Icon right chevron divider/>
  <Section active>Personal Information</Section>
</Breadcrumb>