<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Statistic, Statistics, Value, Label, Segment, Icon, Image } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Statistic';
</script>


<Examples
    title = "Statistic examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/views/statistic.html'>here</a>"
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Statistic -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Statistic" code = {Code.statistic}>

        <Statistic ui>
            <Value>
                5,550
            </Value>
            <Label>
                Downloads
            </Label>
        </Statistic>

        <Statistic ui>
            <Label>
                Views
            </Label>
            <Value>
                40,509
            </Value>
        </Statistic>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Statistic group -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Statistic group" code = {Code.statistic_group}>

        <Statistics ui>
            <Statistic>
                <Value>
                    22
                </Value>
                <Label>
                    Faves
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    31,200
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    22
                </Value>
                <Label>
                    Members
                </Label>
            </Statistic>
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Content -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Content" code = {Code.content}>

        <Statistics ui>
            <Statistic>
                <Value>
                    22
                </Value>
                <Label>
                    Saves
                </Label>
            </Statistic>
            <Statistic>
                <Value text>
                    Three<br>
                    Thousand
                </Value>
                <Label>
                    Signups
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    <Icon plane/> 5
                </Value>
                <Label>
                    Flights
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    <Image ui circular inline src="/images/joe.jpg" />
                    42
                </Value>
                <Label>
                    Team Members
                </Label>
            </Statistic>
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Label -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Label" code = {Code.label}>

        <Statistic ui>
            <Value>
                2,204
            </Value>
            <Label>
                Views
            </Label>
        </Statistic>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Horizontal -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Horizontal" code = {Code.horizontal}>

        <Statistics ui horizontal>
            <Value>
                2,204
            </Value>
            <Label>
                Views
            </Label>
        </Statistics>

        <Statistics ui horizontal>
            <Statistic>
                <Value>
                    2,204
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    3,322
                </Value>
                <Label>
                    Downloads
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    22
                </Value>
                <Label>
                    Tasks
                </Label>
            </Statistic>
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Colored -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Colored" code = {Code.colored}>

        <Statistics ui>
            {#each [{n:"Red", v:27}, {n:"Orange", v:8}, {n:"Yellow", v:28}, {n:"Olive", v:7}, {n:"Green", v:14}, {n:"Teal", v:82}, {n:"Blue", v:1}, {n:"Violet", v:22}, {n:"Purple", v:23}, {n:"Pink", v:15}, {n:"Brown", v:36}, {n:"Grey", v:49}] as stat}
                <Statistic _={stat.n.toLowerCase()}>
                    <Value>
                        {stat.v}
                    </Value>
                    <Label>
                        {stat.n}
                    </Label>
                </Statistic>
            {/each}
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            {#each [{n:"Inverted", v:54}, {n:"Red", v:27}, {n:"Orange", v:8}, {n:"Yellow", v:28}, {n:"Olive", v:7}, {n:"Green", v:14}, {n:"Teal", v:82}, {n:"Blue", v:1}, {n:"Violet", v:22}, {n:"Purple", v:23}, {n:"Pink", v:15}, {n:"Brown", v:36}, {n:"Grey", v:49}] as stat}
                <Statistic ui inverted _={stat.n.toLowerCase()}>
                    <Value>
                        {stat.v}
                    </Value>
                    <Label>
                        {stat.n}
                    </Label>
                </Statistic>
            {/each}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Stackable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Stackable" code = {Code.stackable}>

        <Statistics ui stackable>
            {#each [{n:"Red", v:27}, {n:"Orange", v:8}, {n:"Yellow", v:28}, {n:"Olive", v:7}, {n:"Green", v:14}, {n:"Teal", v:82}, {n:"Blue", v:1}, {n:"Violet", v:22}, {n:"Purple", v:23}, {n:"Pink", v:15}, {n:"Brown", v:36}, {n:"Grey", v:49}] as stat}
                <Statistic _={stat.n.toLowerCase()}>
                    <Value>
                        {stat.v}
                    </Value>
                    <Label>
                        {stat.n}
                    </Label>
                </Statistic>
            {/each}
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Evenly Divided -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Evenly Divided" code = {Code.evenly_divided}>

        <Statistics ui four>
            <Statistic>
                <Value>
                    22
                </Value>
                <Label>
                    Saves
                </Label>
            </Statistic>
            <Statistic>
                <Value text>
                    Three<br>
                    Thousand
                </Value>
                <Label>
                    Signups
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    <Icon plane/> 5
                </Value>
                <Label>
                    Flights
                </Label>
            </Statistic>
            <Statistic>
                <Value>
                    <Image ui circular inline src="/images/joe.jpg"/>
                    42
                </Value>
                <Label>
                    Team Members
                </Label>
            </Statistic>
        </Statistics>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Statistic ui fluid>
            <Value>
                2,204
            </Value>
            <Label>
                Views
            </Label>
        </Statistic>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    
    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floated" code = {Code.floated}>

        <Segment ui>
            <Statistic ui right floated>
                <Value>
                    2,204
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
            <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
            <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
            <Statistic ui left floated>
                <Value>
                    2,204
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
            <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
            <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each ["mini", "tiny", "", "small", "large", "huge"] as size}
            <Statistic ui _={size}>
                <Value>
                    2,204
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
        {/each}
        <br/><br/>
        {#each ["mini", "tiny", "", "small", "large", "huge"] as size}
            <Statistic ui _={size} horizontal>
                <Value>
                    2,204
                </Value>
                <Label>
                    Views
                </Label>
            </Statistic>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>