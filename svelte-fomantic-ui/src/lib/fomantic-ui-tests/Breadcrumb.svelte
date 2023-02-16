<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Icon, Segment } from "../fomantic-ui/Core.svelte";
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/breadcrumb.html">here</a></h3>

<h4>A standard breadcrumb</h4>
<Breadcrumb ui>
  <Link style="section">Home</Link>
  <Divider>/</Divider>
  <Link style="section">Store</Link>
  <Divider>/</Divider>
  <Section style="active">T-shirt</Section>
</Breadcrumb>

<br/><br/>
<Breadcrumb ui>
  <Link style="section">Home</Link>
  <Icon style="right angle divider"/>
  <Link style="section">Store</Link>
  <Icon style="right angle divider"/>
  <Section style="active">T-shirt</Section>
</Breadcrumb>

<h4>Content</h4>
<Breadcrumb ui>
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right arrow divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>

<h4>Link</h4>
<Breadcrumb ui>
  <Link style="section">Home</Link>
  <Divider>/</Divider>
  <Section style="active">Search for: <Link href="#">paper towels</Link></Section>
</Breadcrumb>

<h4>Inverted</h4>
<Segment ui style="inverted">
  <Breadcrumb ui style="inverted">
      <Link style="section">Home</Link>
      <Icon style="right chevron divider"/>
      <Link style="section">Registration</Link>
      <Icon style="right chevron divider"/>
      <Section style="active">Personal Information</Section>
  </Breadcrumb>
  <p></p>
  <Breadcrumb ui style="inverted">
      <Section>Home</Section>
      <Icon style="right chevron divider"/>
      <Section>Registration</Section>
      <Icon style="right chevron divider"/>
      <Section style="active">Personal Information</Section>
  </Breadcrumb>
</Segment>

<h4>Size</h4>
<Breadcrumb ui style="mini">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="tiny">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="small">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="large">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="big">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="huge">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>
<p></p>
<Breadcrumb ui style="massive">
  <Link style="section">Home</Link>
  <Icon style="right chevron divider"/>
  <Link style="section">Registration</Link>
  <Icon style="right chevron divider"/>
  <Section style="active">Personal Information</Section>
</Breadcrumb>