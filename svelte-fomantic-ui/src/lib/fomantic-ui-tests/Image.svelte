<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Image, Images, Link, Button, Content, Divider, Segment } from "../fomantic-ui/Core.svelte";

    let imageHidden: boolean = true;
</script>

<h3>To check these are correct, compare with standard FomanticUI, <a href="https://fomantic-ui.com/collections/image.html">here</a></h3>

<h4>Image</h4>
<Image ui small src="/images/image.png"/>

<h4>Image Link</h4>
<Link ui medium image href="https://google.com">
    <Image src="/images/image-text.png"/>
</Link>

<h4>Hidden</h4>
<Button ui toggle bind:active={imageHidden} on_style="green" off_style="blue">
    <Content slot="on">Show</Content>
    <Content slot="off">Hide</Content>
</Button>
<Image ui small _={imageHidden?"hidden":""} src="/images/image.png"/>

<h4>Disabled</h4>
<Image disabled medium ui src="/images/image.png"/>

<h4>Avatar</h4>
<Image ui avatar src="/images/square-image.png"/>
<span>Username</span>

<h4>Bordered</h4>
<Image ui medium bordered src="/images/white-image.png"/>

<h4>Fluid</h4>
<Image ui fluid src="/images/image.png"/>

<h4>Rounded</h4>
<Image ui medium rounded src="/images/square-image.png"/>

<h4>Circular</h4>
<Image ui medium circular src="/images/square-image.png"/>

<h4>Vertically Aligned</h4>
<Image ui top aligned tiny src="/images/square-image.png"/>
<span>Top Aligned</span>
<Divider ui/>
<Image ui middle aligned tiny src="/images/square-image.png"/>
<span>Middle Aligned</span>
<Divider ui/>
<Image ui bottom aligned tiny src="/images/square-image.png"/>
<span>Bottom Aligned</span>

<h4>Centered</h4>
<Segment ui>
    <Image ui centered medium src="/images/image.png"/>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <Image ui small centered src="/images/text-image.png"/>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>

<h4>Spaced</h4>
<Segment ui>
    <p>Te eum doming eirmod, nominati pertinacia <Image ui mini spaced src="/images/image.png"/> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</Segment>

<h4>Floated</h4>
<Segment ui>
    <Image ui small left floated src="/images/text-image.png"/>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <Image ui small right floated src="/images/text-image.png"/>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
     <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</Segment>

<h4>Size</h4>
<Image ui mini src="/images/image.png"/><br/>
<Image ui tiny src="/images/image.png"/><br/>
<Image ui small src="/images/image.png"/><br/>
<Image ui medium src="/images/image.png"/><br/>
<Image ui large src="/images/image.png"/><br/>
<Image ui big src="/images/image.png"/><br/>
<Image ui huge src="/images/image.png"/><br/>
<Image ui massive src="/images/image.png"/>

<h4>Group Size</h4>
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
