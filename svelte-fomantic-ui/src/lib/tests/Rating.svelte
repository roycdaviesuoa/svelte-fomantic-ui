<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, May 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { behavior, Text, Rating, Icon, Button } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Rating';

    let rating2settings = [{color: "yellow", icon: "star"}, {color: "red", icon: "Icon heart"}, {color: "purple", icon: "female"}, {color: "blue", icon: "male"}, {color: "grey", icon: "cloud"}, {color: "pink", icon: "cat"}, {color: "orange", icon: "circle"}];
    let colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
    let rating1value: any = 0;
    let rating2values: any = {};
    let rating3values: any = {};
    let rating4value: any = 0;
    let rating5value: any = 0;

    rating2settings.forEach((setting) => { rating2values[setting.color + "_" + setting.icon] = 2; });
    colors.forEach((_, index) => { rating3values[index] = index<6?index+1:13-index; });
</script>


<Examples
    title = "Rating examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/rating.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Rating -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Rating" code = {Code.rating}>

        <Rating ui data-max-rating="1" callbacks={{ onRate: { rating: null, _: (data:any) => { rating1value = data.rating; } } }}/>
        <Text>Rating value = {rating1value}</Text>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        {#each rating2settings as setting, i} 
            <Rating ui id="iconrating" _={setting.color} data-icon={setting.icon} data-rating = 2 
                callbacks={{
                    onRate: {
                        rating: null,
                        name: setting.color + "_" + setting.icon,

                        _: (data:any) => { rating2values[data.name] = data.rating; }
                    }
                }}/>
            <Text>Rating value = {rating2values[setting.color + "_" + setting.icon]}</Text><br/>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Color -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Color" code = {Code.color}>

        {#each colors as color, count}
            <Rating ui _={color} data={{icon:"star", "max-rating": 7, rating: rating3values[count]}}
            callbacks={{
                onRate: {
                    rating: null,
                    index: count,

                    _: (data:any) => { rating3values[data.index] = data.rating; }
                }
            }}/>
            <Text>Rating value = {rating3values[count]}</Text><br/>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Partial -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Partial" code = {Code.partial}>

        <Rating ui black data-rating="0.5" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui pink data-rating="1.25" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui red data-rating="1.775" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui yellow data-rating="2.5" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui green data-rating="3.225" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui purple data-rating="3.65" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui blue data-rating="4.375" data-max-rating="5"/>
        <p></p><p></p>
        <Rating ui brown data-rating="4.75" data-max-rating="5"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Rating ui yellow disabled data={{rating: "3", "max-rating": "5"}}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each ["mini", "tiny", "small", "", "large", "huge", "massive"] as size}
            <Rating ui yellow _={size} data-rating = 3/>
            <p></p><p></p>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Metadata -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Metadata" code = {Code.metadata}>

        <Rating ui data-icon="circle" data-rating="3" data-max-rating="5"/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

    

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Javascript" code = {Code.javascript}>

        <Rating ui settings={{icon: "circle", initialRating: 3, maxRating: 5}}/>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Functions -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Functions" code = {Code.callbacks}>

        <Rating ui settings={{icon: "circle", initialRating: rating4value, maxRating: 5}} callbacks={{ onRate: { rating: null, _: (data:any) => { rating4value = data.rating; } } }}/>
        <Text>Rating value = {rating4value}</Text>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Without javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Without javascript" code = {Code.without_javascript}>

        <Rating ui red disabled>
            <Icon heart active/>
            <Icon heart active/>
            <Icon heart active/>
            <Icon heart/>
            <Icon heart/>
        </Rating>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Behaviors -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Behaviors" code = {Code.behaviors}>

        <Rating ui blue id="rating5" settings={{icon: "heart", initialRating: rating5value, maxRating: 5}}/>
        <Button ui on:click={() => {rating5value = behavior("rating5", "get rating")}}>Get Rating</Button>
        <Text>Rating value = {rating5value}</Text>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>