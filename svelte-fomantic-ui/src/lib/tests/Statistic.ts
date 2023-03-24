// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    statistic : `
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
    `,
    statistic_group : `
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
    `,
    content : `
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
    `,
    label : `
<Statistic ui>
    <Value>
        2,204
    </Value>
    <Label>
        Views
    </Label>
</Statistic>
    `,
    horizontal : `
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
    `,
    colored : `
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
    `,
    inverted : `
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
    `,
    stackable : `
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
    `,
    evenly_divided : `
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
    `,
    fluid : `
<Statistic ui fluid>
    <Value>
        2,204
    </Value>
    <Label>
        Views
    </Label>
</Statistic>
    `,
    floated : `
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
    `,
    size : `
{#each ["mini", "tiny", "", "small", "large", "huge"] as size}
    <div class="ui _={size} statistic">
        <div class="value">
        2,204
        </div>
        <div class="label">
        Views
        </div>
    </div>
{/each}

{#each ["mini", "tiny", "", "small", "large", "huge"] as size}
    <div class="ui _={size} horizontal statistic">
        <div class="value">
        2,204
        </div>
        <div class="label">
        Views
        </div>
    </div>
{/each}
    `
}

export default code;