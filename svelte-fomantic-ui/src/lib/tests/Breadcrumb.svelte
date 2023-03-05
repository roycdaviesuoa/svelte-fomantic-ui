<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Breadcrumb, Link, Divider, Section, Icon, Segment } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Breadcrumb';
</script>

<Examples
    title = "Breadcrumb examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/breadcrumb.html'>here</a>">


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- A standard breadcrumb -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "A standard breadcrumb" code = {Code.standard}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content" code = {Code.content}>

        <Breadcrumb ui>
            <Link section>Home</Link>
            <Icon right chevron divider/>
            <Link section>Registration</Link>
            <Icon right chevron divider/>
            <Section active>Personal Information</Section>
        </Breadcrumb>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Link -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Link" code = {Code.link}>

        <Breadcrumb ui>
            <Link section>Home</Link>
            <Divider>/</Divider>
            <Section active>Search for: <Link href="#">paper towels</Link></Section>
        </Breadcrumb>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

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

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>