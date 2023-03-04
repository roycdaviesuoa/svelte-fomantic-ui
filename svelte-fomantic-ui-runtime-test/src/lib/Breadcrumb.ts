const code = {
    standard : `
<Breadcrumb ui>
    <Link section>Home</Link>
    <Divider>/</Divider>
    <Link section>Store</Link>
    <Divider>/</Divider>
    <Section active>T-shirt</Section>
</Breadcrumb>

<Breadcrumb ui>
    <Link section>Home</Link>
    <Icon right angle divider/>
    <Link section>Store</Link>
    <Icon right angle divider/>
    <Section active>T-shirt</Section>
</Breadcrumb>
    `,
    content : `
<Breadcrumb ui>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>
    `,
    link : `
<Breadcrumb ui>
    <Link section>Home</Link>
    <Divider>/</Divider>
    <Section active>Search for: <Link href="#">paper towels</Link></Section>
</Breadcrumb>
    `,
    inverted : `
<Segment ui inverted>
    <Breadcrumb ui inverted>
        <Link section>Home</Link>
        <Icon right chevron divider/>
        <Link section>Registration</Link>
        <Icon right chevron divider/>
        <Section active>Personal Information</Section>
    </Breadcrumb>

    <Breadcrumb ui inverted>
        <Section>Home</Section>
        <Icon right chevron divider/>
        <Section>Registration</Section>
        <Icon right chevron divider/>
        <Section active>Personal Information</Section>
    </Breadcrumb>
</Segment>
    `,
    size : `
<Breadcrumb ui mini>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui tiny>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui small>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui large>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui big>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui huge>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>

<Breadcrumb ui massive>
    <Link section>Home</Link>
    <Icon right chevron divider/>
    <Link section>Registration</Link>
    <Icon right chevron divider/>
    <Section active>Personal Information</Section>
</Breadcrumb>
    `
}

export default code;