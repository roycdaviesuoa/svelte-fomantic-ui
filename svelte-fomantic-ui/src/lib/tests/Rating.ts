// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    rating : `
<Rating ui data-max-rating="1" functions={{ onRate: { rating: null, _: (data) => { rating1value = data.rating; } } }}/>
<Text>Rating value = {rating1value}</Text>
    `,
    icon : `
{#each rating2settings as setting, i} 
    <Rating ui id="iconrating" _={setting.color} data-icon={setting.icon} data-rating=2 
        functions={{
            onRate: {
                rating: null,
                name: setting.color + "_" + setting.icon,

                _: (data) => { rating2values[data.name] = data.rating; }
            }
        }}/>
    <Text>Rating value = {rating2values[setting.color + "_" + setting.icon]}</Text><br/>
{/each}

where

rating2settings = [{color: "yellow", icon: "star"}, {color: "red", icon: "heart"}, {color: "purple", icon: "female"}, {color: "blue", icon: "male"}, {color: "grey", icon: "cloud"}, {color: "pink", icon: "cat"}, {color: "orange", icon: "circle"}];
    `,
    color : `
{#each colors as color, count}
    <Rating ui _={color} data={{icon:"star", "max-rating": 7, rating: rating3values[count]}}
    functions={{
        onRate: {
            rating: null,
            index: count,

            _: (data) => { rating3values[data.index] = data.rating; }
        }
    }}/>
    <Text>Rating value = {rating3values[count]}</Text><br/>
{/each}
    `,
    partial : `
<Rating ui black data-rating="0.5" data-max-rating="5"/>
<p/><p/>
<Rating ui pink data-rating="1.25" data-max-rating="5"/>
<p/><p/>
<Rating ui red data-rating="1.775" data-max-rating="5"/>
<p/><p/>
<Rating ui yellow data-rating="2.5" data-max-rating="5"/>
<p/><p/>
<Rating ui green data-rating="3.225" data-max-rating="5"/>
<p/><p/>
<Rating ui purple data-rating="3.65" data-max-rating="5"/>
<p/><p/>
<Rating ui blue data-rating="4.375" data-max-rating="5"/>
<p/><p/>
<Rating ui brown data-rating="4.75" data-max-rating="5"/>
    `,
    disabled : `
<Rating ui yellow disabled data={{rating: "3", "max-rating": "5"}}/>
    `,
    size : `
{#each ["mini", "tiny", "small", "", "large", "huge", "massive"] as size}
    <Rating ui yellow _={size} data-rating = 3/>
    <p/><p/>
{/each}
    `,
    metadata : `
<Rating ui data-icon="circle" data-rating="3" data-max-rating="5"/>
    `,
    javascript : `
<Rating ui settings={{icon: "circle", initialRating: 3, maxRating: 5}}/>
    `,
    functions : `
<Rating ui settings={{icon: "circle", initialRating: rating4value, maxRating: 5}} functions={{ onRate: { rating: null, _: (data) => { rating4value = data.rating; } } }}/>
<Text>Rating value = {rating4value}</Text>
    `,
    without_javascript : `
<Rating ui red disabled>
    <Icon heart active/>
    <Icon heart active/>
    <Icon heart active/>
    <Icon heart/>
    <Icon heart/>
</Rating>
    `,
    behaviors : `
<Rating ui blue id="rating5" settings={{icon: "heart", initialRating: rating5value, maxRating: 5}}/>
<Button ui on:click={() => {rating5value = behavior("rating5", "get rating")}}>Get Rating</Button>
<Text>Rating value = {rating5value}</Text>
    `
}

export default code;