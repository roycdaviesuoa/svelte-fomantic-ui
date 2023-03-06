// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    image : `
<Image ui small src="/images/image.png"/>
    `,
    image_link : `
<Link ui medium image href="https://google.com">
    <Image src="/images/image-text.png"/>
</Link>
    `,
    hidden : `
<script>
    import { Image, Button, Content } from "svelte-fomantic-ui";
    let imageHidden: boolean = true;
</script>

<Button ui toggle bind:active={imageHidden} on_style="green" off_style="blue">
    <Content slot="on">Show</Content>
    <Content slot="off">Hide</Content>
</Button>
<Image ui small hidden={imageHidden} src="/images/image.png"/>
    `,
    disabled : `
<Image disabled medium ui src="/images/image.png"/>
    `,
    avatar : `
<Image ui avatar src="/images/square-image.png"/>
<span>Username</span>
    `,
    bordered : `
<Image ui medium bordered src="/images/white-image.png"/>
    `,
    fluid : `
<Image ui fluid src="/images/image.png"/>
    `,
    rounded : `
<Image ui medium rounded src="/images/square-image.png"/>
    `,
    circular : `
<Image ui medium circular src="/images/square-image.png"/>
    `,
    vertically_aligned : `
<Image ui top aligned tiny src="/images/square-image.png"/>
<span>Top Aligned</span>
<Divider ui/>
<Image ui middle aligned tiny src="/images/square-image.png"/>
<span>Middle Aligned</span>
<Divider ui/>
<Image ui bottom aligned tiny src="/images/square-image.png"/>
<span>Bottom Aligned</span>
    `,
    centered : `
<Segment ui>
    <Image ui centered medium src="/images/image.png"/>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <Image ui small centered src="/images/text-image.png"/>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>
    `,
    spaced : `
<Segment ui>
    <p>Te eum doming eirmod, nominati pertinacia <Image ui mini spaced src="/images/image.png"/> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</Segment>
    `,
    floated : `
<Segment ui>
    <Image ui small left floated src="/images/text-image.png"/>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <Image ui small right floated src="/images/text-image.png"/>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>
    `,
    size : `
<Image ui mini src="/images/image.png"/><br/>
<Image ui tiny src="/images/image.png"/><br/>
<Image ui small src="/images/image.png"/><br/>
<Image ui medium src="/images/image.png"/><br/>
<Image ui large src="/images/image.png"/><br/>
<Image ui big src="/images/image.png"/><br/>
<Image ui huge src="/images/image.png"/><br/>
<Image ui massive src="/images/image.png"/>
    `,
    grouped_size : `
<Images ui tiny>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
</Images>
<Images ui small>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
    <Image src="/images/image.png"/>
</Images>
    `
}

export default code;