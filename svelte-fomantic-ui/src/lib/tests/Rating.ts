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
    `
}

export default code;