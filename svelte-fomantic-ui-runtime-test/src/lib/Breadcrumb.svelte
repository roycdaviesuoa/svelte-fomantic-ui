<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Icon, Segment } from "svelte-fomantic-ui";
    import "./examplestyles.css";
    import "./prism.css";
    import SourceCode from 'svelte-prism';
    import Code from './Breadcrumb'
</script>

<div class="example-document">
    <h3 class="document-header">Breadcrumb examples and tests</h3>
    <div class="document-description">To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/breadcrumb.html">here</a></div>


<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- A standard breadcrumb -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">A standard breadcrumb</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
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
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.standard}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Content -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Content</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Breadcrumb ui>
        <Link section>Home</Link>
        <Icon right chevron divider/>
        <Link section>Registration</Link>
        <Icon right chevron divider/>
        <Section active>Personal Information</Section>
    </Breadcrumb>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.content}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Link -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Link</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
    <Breadcrumb ui>
        <Link section>Home</Link>
        <Divider>/</Divider>
        <Section active>Search for: <Link href="#">paper towels</Link></Section>
    </Breadcrumb>
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.link}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Inverted -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Inverted</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
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
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.inverted}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->



<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Size -->
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="example">
    <h4 class="example-header">Size</h4>

    <!------------------------------------------------------------------------------------------------------------------------------------------------------>
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
    <!------------------------------------------------------------------------------------------------------------------------------------------------------>

    <SourceCode language = "svelte" source = {Code.size}/>
</div>
<!---------------------------------------------------------------------------------------------------------------------------------------------------------->


</div>