<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { update, parameter, Dropdown, Input, Text, Menu, Icon, Item, Message, Header, Description, Button, Buttons, Divider, Segment, Select, Option, Flag, Image, Label, Content, Link, behavior } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Dropdown';
    import countries from './Countries';
    import states from './USStates';
    
    let changed = {test:false, test2:false};
    let test="male";
    let test2="female";

    let genders = {placeholder:"Gender", values:[{name:"Gender", type:"header"}, {name:"Male", value:"male"}, {name:"Female", value:"female"}, {name:"Not say", value:"notsay"}]};
    let species = {placeholder:"Species", values:[{name:"Species", type:"header"}, {name:"Cat", value:"cat"}, {name:"Dog", value:"dog"}, {name:"Horse", value:"horse"}]}

    function changeMenu (id:string) {
      if (changed[id]) {
        update(id, genders);
      }
      else {
        update(id, species);
      }
      changed[id]=!changed[id];
    }

    let animals = ["Cat", "Dog", "Bird", "Rabbit", "Squiral", "Horse", "Turtle", "Parrot"];

    let ex1value = "";
    let ex2value = "";
    let ex3value = "";
    let ex4value = "";
    let ex5value = "";
    let ex6value = "";
    let ex7value = "";
    let ex8value = "dutch,english,french";
    let ex9value = "";
    let ex10value = "";
    let ex11value = "";
    let ex12value = "";
    let ex13value = "";
    let ex14value = "";
    let ex15value = "";
    let ex16value = "";
    let ex17value = "";
    let ex18value = "";
    let ex19value = "";
    let ex20value = "";
    let ex21value = "";
    let ex22value = "";
    let ex23value = "";
    let ex24value = "";
    let ex25value = "";

</script>


<Examples
    title = "Dropdown examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/modules/dropdown.html'>here</a>"
    disclaimer = "This is very much still a work-in-progress."
    code = {Code}>

    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Dropdown" code = {Code.dropdown}>

        <Dropdown ui popup={{content: "Do something..."}} bind:value={ex1value}>
            <Text default>File</Text>
            <Icon dropdown/>
            <Menu>
                <Item value="new" popup={{content: "Create new file", position: "right center"}}>New</Item>
                <Item value="open" popup={{content: "Open file", position: "right center"}}>
                    <span class="description">ctrl + o</span>
                    Open...
                </Item>
                <Item value="save as" popup={{content: "Save file as", position: "right center"}}> 
                    <span class="description">ctrl + s</span>
                    Save as...
                </Item>
                <Item value="rename" popup={{content: "Rename file", position: "right center"}}>
                    <span class="description">ctrl + r</span>
                    Rename
                </Item>
                <Item value="copy" popup={{content: "Copy file", position: "right center"}}>Make a copy</Item>
                <Item value="move to folder" popup={{content: "Move to folder", position: "right center"}}>
                    <Icon folder/>
                    Move to folder
                </Item>
                <Item value="move to trash" popup={{content: "Move to trash", position: "right center"}}>
                    <Icon trash/>
                    Move to trash
                </Item>
                <Divider/>
                <Item value="download as" popup={{content: "Download file", position: "right center"}}>Download As...</Item>
                <Item>
                    <Icon dropdown/>
                    Publish To Web
                    <Menu>
                        <Item value="publish to google docs" popup={{content: "Publish to google docs", position: "right center"}}>Google Docs</Item>
                        <Item value="publish to google drive" popup={{content: "Publish to google drive", position: "right center"}}>Google Drive</Item>
                        <Item value="publish to dropbox" popup={{content: "Publish to dropbox", position: "right center"}}>Dropbox</Item>
                        <Item value="publish to adobe creative cloud" popup={{content: "Publish to adobe creative cloud", position: "right center"}}>Adobe Creative Cloud</Item>
                        <Item value="publish to private ftp" popup={{content: "Publish to private ftp", position: "right center"}}>Private FTP</Item>
                        <Item value="publish to another service" popup={{content: "Publish to another service", position: "right center"}}>Another Service...</Item>
                    </Menu>
                </Item>
                <Item value="email collaborators" popup={{content: "Send by email", position: "right center"}}>E-mail Collaborators</Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex1value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Selection" code = {Code.selection}>

        <Dropdown ui selection bind:value={ex2value}>
            <Icon dropdown/>
            <Text default>Pet</Text>
            <Menu scrollhint>
                {#each animals as animal, i}
                    <Item value={i}>{animal}</Item>
                {/each}
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex2value===""?"":animals[ex2value]}
        </Segment>

        <Select ui selection dropdown bind:value={ex3value}>
            <Option value="">Pet</Option>
            {#each animals as animal, i}
                <Option value={i}>{animal}</Option>
            {/each}
        </Select>
        <Segment ui basic>
            Menu option chosen: {ex3value===""?"":animals[ex3value]}
        </Segment>

        <Dropdown ui fluid selection bind:value={ex5value}>
            <Icon dropdown/>
            <Text default>Select Friend</Text>
            <Menu>
                <Item value="jenny">
                    <Image ui mini avatar src="/images/jenny.jpg"/>
                    Jenny Hess
                </Item>
                <Item value="elliot">
                    <Image ui mini avatar src="/images/elliot.jpg"/>
                    Elliot Fu
                </Item>
                <Item value="stevie">
                    <Image ui mini avatar src="/images/stevie.jpg"/>
                    Stevie Feliciano
                </Item>
                <Item value="christian">
                    <Image ui mini avatar src="/images/christian.jpg"/>
                    Christian
                </Item>
                <Item value="matt">
                    <Image ui mini avatar src="/images/matt.jpg"/>
                    Matt
                </Item>
                <Item value="justen">
                    <Image ui mini avatar src="/images/justen.jpg"/>
                    Justen Kitsune
                </Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex5value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Search selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Search selection" code = {Code.search_selection}>

        <Dropdown ui fluid search selection bind:selected={ex4value}>
            <Icon dropdown/>
            <Text default>Select Country</Text>
            <Menu>
                {#each Object.keys(countries) as key}
                    <Item value={key}><Flag _={key}/>{countries[key]}</Item>
                {/each}
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex4value===""?"":ex4value.toUpperCase()}{ex4value===""?"":" : " + countries[ex4value]}
        </Segment>

        <Select ui search dropdown bind:value={ex6value}>
            <Option value="">State</Option>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>
        <Segment ui basic>
            Menu option chosen: {ex6value}{ex6value===""?"":" : " + states[ex6value]}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Unfilterable search selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Unfilterable search selection" code = {Code.unfilterable_search_selection}>

        <Dropdown ui search selection bind:selected={ex9value}>
            <Icon dropdown/>
            <Text default>States</Text>
            <Menu>
              <Item unfilterable value="AL">Alabama (unfilterable)</Item>
              <Item value="AK">Alaska</Item>
              <Item unfilterable value="AZ">Arizona (unfilterable)</Item>
              <Item unfilterable value="AR">Arkansas (unfilterable)</Item>
              <Item value="CA">California</Item>
              <Item value="OH">Ohio</Item>
              <Item value="OK">Oklahoma</Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex9value}{ex9value===""?"":" : " + states[ex9value]}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Ignore diacritics -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Ignore diacritics" code = {Code.ignore_diacritics}>

        <Dropdown ui search selection settings={{ignoreDiacritics: true, sortSelect: true, fullTextSearch:'exact'}} bind:selected={ex7value}>
            <Icon dropdown/>
            <Text default>Search diacritics by only typing usual vowels</Text>
            <Menu>
                <Item value={"André"}>André</Item>
                <Item value={"Bokmål"}>Bokmål</Item>
                <Item value={"café"}>café</Item>
                <Item value={"cafetería"}>cafetería</Item>
                <Item value={"château"}>château</Item>
                <Item value={"décolleté"}>décolleté</Item>
                <Item value={"Élysée"}>Élysée</Item>
                <Item value={"Fräulein"}>Fräulein</Item>
                <Item value={"garçon"}>garçon</Item>
                <Item value={"háček"}>háček</Item>
                <Item value={"inrō"}>inrō</Item>
                <Item value={"jūjutsu"}>jūjutsu</Item>
                <Item value={"kroužek"}>kroužek</Item>
                <Item value={"Niña"}>La Niña</Item>
                <Item value={"Māori"}>Māori</Item>
                <Item value={"négligée"}>négligée</Item>
                <Item value={"pączki"}>pączki</Item>
                <Item value={"Québec"}>Québec</Item>
                <Item value={"ragoût"}>ragoût</Item>
                <Item value={"Škoda"}>Škoda</Item>
                <Item value={"takahē"}>takahē</Item>
                <Item value={"über"}>über</Item>
                <Item value={"voilà"}>voilà</Item>
                <Item value={"whekī"}>whekī</Item>
                <Item value={"Zoë"}>c Zoë</Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex7value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Clearable selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Clearable selection" code = {Code.clearable_selection}>

        <Dropdown ui clearable multiple selection bind:selected={ex8value}>
            <Input hidden bind:value={ex8value}/>
            <Icon dropdown/>
            <Text default>Select Languages</Text>
            <Menu>
                <Item value="arabic">Arabic</Item>
                <Item value="chinese">Chinese</Item>
                <Item value="danish">Danish</Item>
                <Item value="dutch">Dutch</Item>
                <Item value="english">English</Item>
                <Item value="french">French</Item>
                <Item value="german">German</Item>
                <Item value="greek">Greek</Item>
                <Item value="hungarian">Hungarian</Item>
                <Item value="italian">Italian</Item>
                <Item value="japanese">Japanese</Item>
                <Item value="korean">Korean</Item>
                <Item value="lithuanian">Lithuanian</Item>
                <Item value="persian">Persian</Item>
                <Item value="polish">Polish</Item>
                <Item value="portuguese">Portuguese</Item>
                <Item value="russian">Russian</Item>
                <Item value="spanish">Spanish</Item>
                <Item value="swedish">Swedish</Item>
                <Item value="turkish">Turkish</Item>
                <Item value="vietnamese">Vietnamese</Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu options chosen: {ex8value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
                


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Multiple selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Multiple selection" code = {Code.multiple_selection}>

        <Select ui fluid multiple dropdown bind:selected={ex10value}>
            <Input hidden bind:value={ex10value}/>
            <Option value="">Skills</Option>
            <Option value="angular">Angular</Option>
            <Option value="css">CSS</Option>
            <Option value="design">Graphic Design</Option>
            <Option value="ember">Ember</Option>
            <Option value="html">HTML</Option>
            <Option value="ia">Information Architecture</Option>
            <Option value="javascript">Javascript</Option>
            <Option value="mech">Mechanical Engineering</Option>
            <Option value="meteor">Meteor</Option>
            <Option value="node">NodeJS</Option>
            <Option value="plumbing">Plumbing</Option>
            <Option value="python">Python</Option>
            <Option value="rails">Rails</Option>
            <Option value="react">React</Option>
            <Option value="repair">Kitchen Repair</Option>
            <Option value="ruby">Ruby</Option>
            <Option value="ui">UI Design</Option>
            <Option value="ux">User Experience</Option>
        </Select>
        <Segment ui basic>
            Menu options chosen: {ex10value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Multiple search selection -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Multiple search selection" code = {Code.multiple_search_selection}>

        <Input hidden bind:value={ex11value}/>
        <Select ui fluid search dropdown multiple bind:selected={ex11value}>
            <Option value="">State</Option>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>
        <Segment ui basic>
            Menu options chosen: {ex11value}
        </Segment>

        <Dropdown ui fluid multiple search selection bind:selected={ex12value}>
            <Input hidden bind:value={ex12value}/>
            <Icon dropdown/>
            <Text default>Select Country</Text>
            <Menu>
                {#each Object.keys(countries) as key}
                    <Item value={key}><Flag _={key}/>{countries[key]}</Item>
                {/each}
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu options chosen: {ex12value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Search dropdown -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Search dropdown" code = {Code.search_dropdown}>

        <Dropdown ui floating labeled search icon button bind:selected={ex13value}>
            <Icon world/>
            <Text>Select Language</Text>
            <Menu>
                <Item value="Arabic">Arabic</Item>
                <Item value="Chinese">Chinese</Item>
                <Item value="Danish">Danish</Item>
                <Item value="Dutch">Dutch</Item>
                <Item value="English">English</Item>
                <Item value="French">French</Item>
                <Item value="German">German</Item>
                <Item value="Greek">Greek</Item>
                <Item value="Hungarian">Hungarian</Item>
                <Item value="Italian">Italian</Item>
                <Item value="Japanese">Japanese</Item>
                <Item value="Korean">Korean</Item>
                <Item value="Lithuanian">Lithuanian</Item>
                <Item value="Persian">Persian</Item>
                <Item value="Polish">Polish</Item>
                <Item value="Portuguese">Portuguese</Item>
                <Item value="Russian">Russian</Item>
                <Item value="Spanish">Spanish</Item>
                <Item value="Swedish">Swedish</Item>
                <Item value="Turkish">Turkish</Item>
                <Item value="Vietnamese">Vietnamese</Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex13value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Search in menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Search in menu" code = {Code.search_in_menu}>

        <Dropdown ui floating labeled icon button bind:selected={ex14value}>
            <Input hidden bind:value={ex14value}/>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Cannot Fix">
                        <Label ui black empty circular/>
                        Cannot Fix
                    </Item>
                    <Item value="News">
                        <Label ui purple empty circular/>
                        News
                    </Item>
                    <Item value="Enhancement">
                        <Label ui orange empty circular/>
                        Enhancement
                    </Item>
                    <Item value="Change Declined">
                        <Label ui empty circular/>
                        Change Declined
                    </Item>
                    <Item value="Off Topic">
                        <Label ui yellow empty circular/>
                        Off Topic
                    </Item>
                    <Item value="Interesting">
                        <Label ui pink empty circular/>
                        Interesting
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex14value}
        </Segment>

        <Dropdown ui multiple bind:selected={ex15value}>
            <Input hidden bind:value={ex15value}/>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Cannot Fix">
                        <Label ui black empty circular/>
                        Cannot Fix
                    </Item>
                    <Item value="News">
                        <Label ui purple empty circular/>
                        News
                    </Item>
                    <Item value="Enhancement">
                        <Label ui orange empty circular/>
                        Enhancement
                    </Item>
                    <Item value="Change Declined">
                        <Label ui empty circular/>
                        Change Declined
                    </Item>
                    <Item value="Off Topic">
                        <Label ui yellow empty circular/>
                        Off Topic
                    </Item>
                    <Item value="Interesting">
                        <Label ui pink empty circular/>
                        Interesting
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu options chosen: {ex15value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inline -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inline" code = {Code.inline}>

        Show me posts by 
        <Dropdown ui inline bind:value={ex16value}>
            <Icon dropdown/>
            <Text default>Select Friend</Text>
            <Menu>
                <Item value="jenny">
                    <Image ui mini avatar src="/images/jenny.jpg"/>
                    Jenny Hess
                </Item>
                <Item value="elliot">
                    <Image ui mini avatar src="/images/elliot.jpg"/>
                    Elliot Fu
                </Item>
                <Item value="stevie">
                    <Image ui mini avatar src="/images/stevie.jpg"/>
                    Stevie Feliciano
                </Item>
                <Item value="christian">
                    <Image ui mini avatar src="/images/christian.jpg"/>
                    Christian
                </Item>
                <Item value="matt">
                    <Image ui mini avatar src="/images/matt.jpg"/>
                    Matt
                </Item>
                <Item value="justen">
                    <Image ui mini avatar src="/images/justen.jpg"/>
                    Justen Kitsune
                </Item>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex16value}
        </Segment>

        <Header ui h4>
            <Icon trophy/>
            <Content>
              Trending repos
                <Dropdown ui inline bind:value={ex17value}>
                    <Text>today</Text>
                    <Icon dropdown/>
                    <Menu>
                        <Header>Adjust time span</Header>
                        <Item active value="today">Today</Item>
                        <Item value="this week">This Week</Item>
                        <Item value="this month">This Month</Item>
                    </Menu>
                </Dropdown>
            </Content>
          </Header>
          <Segment ui basic>
            Menu option chosen: {ex17value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Pointing -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Pointing" code = {Code.pointing} narrow>

        <p>Besides the pointing dropdown syntax, we show also here the addition of the 'values' property, which is not present in Fomantic UI.  If 'values' is used, only Items with a value return a value to the binding, otherwise the innerText will be returned if there is no specified value.</p>

        <p>Another trick to note is the using of <b>settings=&#123;&#123;"action":"select"&#125;&#125;</b> to ensure the dropdown top line doesn't change to the selected item.  In the Fomantic UI examples, this is not specified, but the default behavior is to change the top line to the selection.</p>
        <Menu ui values bind:selected={ex18value}>
            <Link item value="home">
                Home
            </Link>
            <Dropdown ui pointing link item settings={{"action":"select"}}>
                <Text ui>Shopping</Text>
                <Icon dropdown/>
                <Menu>
                    <Header>Categories</Header>
                    <Item>
                        <Icon dropdown/>
                        <Text>Clothing</Text>
                        <Menu>
                            <Header>Mens</Header>
                            <Item value="shirts">Shirts</Item>
                            <Item value="pants">Pants</Item>
                            <Item value="jeans">Jeans</Item>
                            <Item value="shoes">Shoes</Item>
                            <Divider/>
                            <Header>Womens</Header>
                            <Item value="dresses">Dresses</Item>
                            <Item value="womens shoes">Shoes</Item>
                            <Item value="bags">Bags</Item>
                        </Menu>
                    </Item>
                    <Item value="home goods">Home Goods</Item>
                    <Item value="bedroom">Bedroom</Item>
                    <Divider/>
                    <Header>Order</Header>
                    <Item value="status">Status</Item>
                    <Item value="cancellations">Cancellations</Item>
                </Menu>
            </Dropdown>
            <Item link value="forums">
                Forums
            </Item>
            <Item link value="contact us">
                Contact Us
            </Item>
        </Menu>
        <Segment ui basic>
            Menu option chosen: {ex18value}
        </Segment>

        <Menu ui vertical values bind:value={ex19value}>
            <Link item value="home">
              Home
            </Link>
            <Dropdown ui left pointing item link>
                <Icon dropdown/>
                Messages
                <Menu>
                    <Item value="inbox">Inbox</Item>
                    <Item value="starred">Starred</Item>
                    <Item value="send mail">Sent Mail</Item>
                    <Item value="drafts">Drafts (143)</Item>
                    <Divider/>
                    <Item value="spam">Spam (1009)</Item>
                    <Item value="trash">Trash</Item>
                </Menu>
            </Dropdown>
            <Item link value="browse">
                Browse
            </Item>
            <Item link value="help">
                Help
            </Item>
        </Menu>
        <Segment ui basic>
            Menu option chosen: {ex19value}
        </Segment>

        <Dropdown ui icon top left pointing button bind:value={ex20value}>
            <Icon wrench/>
            <Menu>
                <Header>Display Density</Header>
                <Item>Comfortable</Item>
                <Item>Cozy</Item>
                <Item>Compact</Item>
                <Divider ui/>
                <Item>Settings</Item>
                <Item>
                    <Icon dropdown/>
                    <Text>Upload Settings</Text>
                    <Menu>
                        <Item>
                            <Icon check />
                            Convert Uploaded Files to PDF
                        </Item>
                        <Item>
                            <Icon check />
                            Digitize Text from Uploaded Files
                        </Item>
                    </Menu>
                </Item>
                <Item>Manage Apps</Item>
                <Item>Keyboard Shortcuts</Item>
                <Item>Help</Item>
            </Menu>
        </Dropdown>

        <Dropdown ui icon bottom left pointing button bind:value={ex20value}>
            <Icon wrench/>
            <Menu>
                <Item>
                    <Icon dropdown/>
                    <Text>New</Text>
                    <Menu>
                        <Item>Document</Item>
                        <Item>Image</Item>
                    </Menu>
                </Item>
                <Item>Save As...</Item>
                <Item>Edit</Item>
            </Menu>
        </Dropdown>

        <Dropdown ui icon bottom right pointing button bind:value={ex20value}>
            <Icon wrench/>
            <Menu>
                <Item>
                    <Icon dropdown/>
                    <Text>New</Text>
                    <Menu>
                        <Item>Document</Item>
                        <Item>Image</Item>
                    </Menu>
                </Item>
                <Item>Save As...</Item>
                <Item>Edit</Item>
            </Menu>
        </Dropdown>

        <Segment ui basic>
            Menu option chosen: {ex20value}
        </Segment>

        <Dropdown ui labeled icon top left pointing button values bind:selected={ex21value} settings={{"action":"select"}}>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Cannot Fix">
                        <Label ui black empty circular/>
                        Cannot Fix
                    </Item>
                    <Item value="News">
                        <Label ui purple empty circular/>
                        News
                    </Item>
                    <Item value="Enhancement">
                        <Label ui orange empty circular/>
                        Enhancement
                    </Item>
                    <Item value="Change Declined">
                        <Label ui empty circular/>
                        Change Declined
                    </Item>
                    <Item value="Off Topic">
                        <Label ui yellow empty circular/>
                        Off Topic
                    </Item>
                    <Item value="Interesting">
                        <Label ui pink empty circular/>
                        Interesting
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>

        <Dropdown ui labeled icon top left pointing button values bind:selected={ex21value}>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Cannot Fix">
                        <Label ui black empty circular/>
                        Cannot Fix
                    </Item>
                    <Item value="News">
                        <Label ui purple empty circular/>
                        News
                    </Item>
                    <Item value="Enhancement">
                        <Label ui orange empty circular/>
                        Enhancement
                    </Item>
                    <Item value="Change Declined">
                        <Label ui empty circular/>
                        Change Declined
                    </Item>
                    <Item value="Off Topic">
                        <Label ui yellow empty circular/>
                        Off Topic
                    </Item>
                    <Item value="Interesting">
                        <Label ui pink empty circular/>
                        Interesting
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex21value}
        </Segment>

        <Dropdown ui labeled icon right pointing button values bind:selected={ex22value} settings={{"action":"select"}}>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>

        <Dropdown ui labeled icon left pointing button values bind:selected={ex22value} settings={{"action":"select"}}>
            <Icon filter/>
            <Text>Filter Posts</Text>
            <Menu>
                <Input ui icon search>
                    <Icon search/>
                    <Input text placeholder="Search tags..."/>
                </Input>
                <Divider/>
                <Header>
                    <Icon tags/>
                    Tag Label
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>
        <Segment ui basic>
            Menu option chosen: {ex22value}
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floating -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "floating" code = {Code.floating}>

        <Buttons ui teal>
            <Button ui on:click={() => ex24value = (ex23value === "" ? "Saving" : "Saving with " + ex23value)}>Save</Button>
            <Dropdown ui floating button icon bind:selected={ex23value} on:change={() => ex24value=""}>
                <Icon dropdown/>
                <Menu>
                    <Item active={ex23value==="Edit Post"}><Icon edit/> Edit Post</Item>
                    <Item active={ex23value==="Remove Post"}><Icon delete/> Remove Post</Item>
                    <Item active={ex23value==="Hide Post"}><Icon hide/> Hide Post</Item>
                </Menu>
            </Dropdown>
        </Buttons>
        <Segment ui basic>
            Menu option chosen: <b>{ex24value ? ex24value : ex23value ? ex23value : ""}</b>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- No javascript -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "No javascript" code = {Code.no_javascript}>

        <Menu ui compact>
            <Dropdown ui simple item>
                Dropdown
                <Icon dropdown/>
                <Menu>
                    <Item>Choice 1</Item>
                    <Item>Choice 2</Item>
                    <Item>Choice 3</Item>
                </Menu>
            </Dropdown>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Header -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Header" code = {Code.header}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Filter</Text>
            <Menu>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Item>
                    Important
                </Item>
                <Item>
                    Announcement
                </Item>
                <Item>
                    Discussion
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Divider -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Divider" code = {Code.divider}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Filter</Text>
            <Menu>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Divider/>
                <Item>
                    Important
                </Item>
                <Item>
                    Announcement
                </Item>
                <Item>
                    Discussion
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Icon -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Icon" code = {Code.icon}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Filter</Text>
            <Menu>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Divider/>
                <Item>
                    <Icon attention/>
                    Important
                </Item>
                <Item>
                    <Icon comment/>
                    Announcement
                </Item>
                <Item>
                    <Icon conversation/>
                    Discussion
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Description -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Description" code = {Code.description}>

        <Dropdown ui floating labeled icon button style={"width:200px"}>
            <Icon filter/>
            <Text>Filter Tags</Text>
            <Menu>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Divider/>
                <Item>
                    <Description>2 new</Description>
                    Important
                </Item>
                <Item>
                    <Description>10 new</Description>
                    Announcement
                </Item>
                <Item>
                    <Description>5 new</Description>
                    Discussion
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Label -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Label" code = {Code.label}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Filter</Text>
            <Menu>
                <Header>Search issues</Header>
                <Input ui left icon search>
                    <Icon search/>
                    <Input text placeholder="Search..."/>
                </Input>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Message -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Message" code = {Code.message}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Login</Text>
            <Menu>
                <Message ui error>
                    <Header>Error</Header>
                    <p>You must log-in to see all categories</p>
                </Message>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Floated -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Floated" code = {Code.floated}>

        <Dropdown ui fluid selection>
            <Icon dropdown/>
            <Text default>Select Type</Text>
            <Menu>
                <Item>
                    <Icon attention right floated/>
                    Important
                </Item>
                <Item>
                    <Icon comment right floated/>
                    Announcement
                </Item>
                <Item>
                    <Icon conversation right floated/>
                    Discussion
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Input -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Input" code = {Code.input}>

        <Dropdown ui floating labeled icon button>
            <Icon filter/>
            <Text>Filter</Text>
            <Menu>
                <Header>Search issues</Header>
                <Input ui left icon search>
                    <Icon search/>
                    <Input text placeholder="Search..."/>
                </Input>
                <Header>
                    <Icon tags/>
                    Filter by tag
                </Header>
                <Divider/>
                <Menu scrolling>
                    <Item value="Important">
                        <Label ui red empty circular/>
                        Important
                    </Item>
                    <Item value="Announcement">
                        <Label ui blue empty circular/>
                        Announcement
                    </Item>
                    <Item value="Discussion">
                        <Label ui green empty circular/>
                        Discussion
                    </Item>
                </Menu>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Image -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Image" code = {Code.image}>

        <Dropdown ui floating labeled icon button>
            <Icon add user/>
            <Text>Add User</Text>
            <Menu>
                <Header>
                    People You Might Know
                </Header>
                <Item>
                    <Image ui avatar src="/images/jenny.jpg"/>
                    Jenny Hess
                </Item>
                <Item>
                    <Image ui avatar src="/images/elliot.jpg"/>
                    Elliot Fu
                </Item>
                <Item>
                    <Image ui avatar src="/images/stevie.jpg"/>
                    Stevie Feliciano
                </Item>
                <Header>
                    Your Friends' Friends
                </Header>
                <Item>
                    <Image ui avatar src="/images/christian.jpg"/>
                    Christian
                </Item>
                <Item>
                    <Image ui avatar src="/images/matt.jpg"/>
                    Matt
                </Item>
                <Item>
                    <Image ui avatar src="/images/justen.jpg"/>
                    Justen Kitsune
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Actionable -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Actionable" code = {Code.actionable}>

        <Dropdown ui selection settings={{collapseOnActionable: false}} callbacks={{
            onActionable: {
                value: parameter,
                text: parameter,
                $selected: parameter,

                _: (data) => {
                    let type = data["text"].split(":")[0];
                    behavior({type:"toast", settings: {title: type + " Reveal", message: "You need to know: " + data["value"]}})
                }
            }
        }}>
            <Input hidden/>
            <Icon dropdown/>
            <Text default>Open me and select actionable items</Text>
            <Menu>
                <Item actionable data-value="abcdef">SECRET: Select me</Item>
                <Item actionable data-value="21">TRUTH: Select me</Item>
                <Item actionable data-value="0==1">LIE: Select me</Item>
                <Item>I am a selectable entry only</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Error -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Error" code = {Code.error}>

        <Dropdown ui floating dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item>Choice 2</Item>
                <Item>Choice 3</Item>
            </Menu>
        </Dropdown>

        <Dropdown ui selection dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item>Choice 2</Item>
                <Item>Choice 3</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Active -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Active" code = {Code.active}>

        <Dropdown ui simple active dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item>Choice 2</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Disabled -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Disabled" code = {Code.disabled}>

        <Dropdown ui disabled dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item>Choice 2</Item>
                <Item>Choice 3</Item>
            </Menu>
        </Dropdown>

        <Dropdown ui dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item disabled>Choice 2</Item>
                <Item>Choice 3</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Read only -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Read only" code = {Code.read_only}>

        <Dropdown ui read-only dropdown>
            Dropdown <Icon dropdown/>
            <Menu>
                <Item>Choice 1</Item>
                <Item>Choice 2</Item>
                <Item>Choice 3</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Size -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Size" code = {Code.size}>

        {#each ["mini", "tiny", "small", "medium", "large"] as size}
            <Dropdown ui _={size} selection>
                <Input hidden name="gender"/>
                <Icon dropdown/>
                <Text default>{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
                <Menu>
                    <Item data-value="1">Male</Item>
                    <Item data-value="0">Female</Item>
                </Menu>
            </Dropdown>
        {/each}

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Scrolling -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Scrolling" code = {Code.scrolling}>

        <Dropdown ui scrolling>
            <Text default>Select choice</Text>
            <Icon dropdown/>
            <Menu>
                {#each Array.from({length: 15}, (_, i) => i + 1) as choice}
                    <Item>Choice {choice}</Item>
                {/each}
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Inverted -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Inverted" code = {Code.inverted}>

        <Segment ui inverted>
            <Dropdown ui selection inverted>
                <Text default>Select choice</Text>
                <Icon dropdown/>
                <Menu>
                    {#each Array.from({length: 9}, (_, i) => i + 1) as choice}
                        <Item>Choice {choice}</Item>
                    {/each}
                </Menu>
            </Dropdown>
        </Segment>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Fluid -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Fluid" code = {Code.fluid}>

        <Menu ui vertical>
            <Link item>Link 1</Link>
            <Link item>Link 2</Link>
            <Header item>All Sections</Header>
            <Item ui>
                <Dropdown ui fluid selection>
                    <Text>More</Text>
                    <Icon dropdown/>
                    <Menu>
                        <Item>Choice 1</Item>
                        <Item>Choice 2</Item>
                        <Item>Choice 3</Item>
                    </Menu>
                </Dropdown>
            </Item>
        </Menu>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Height -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Height" code = {Code.height}>

        <Select ui search long dropdown multiple>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>

        <Select ui search very long dropdown multiple>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Direction -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Direction" code = {Code.direction}>

        <Dropdown ui floating labeled icon button>
            <Icon dropdown/>
            <Text>Menu</Text>
            <Menu>
                <Item>
                    <Icon left dropdown/>
                    <Text>Left</Text>
                    <Menu left>
                        <Item>1</Item>
                        <Item>2</Item>
                        <Item>3</Item>
                    </Menu>
                </Item>
                <Item>
                    <Icon dropdown/>
                    <Text>Right</Text>
                    <Menu right>
                        <Item>1</Item>
                        <Item>2</Item>
                        <Item>3</Item>
                    </Menu>
                </Item>
            </Menu>
        </Dropdown>

        <Dropdown ui floating labeled icon button>
            <Icon dropdown/>
            <Text>Menu</Text>
            <Menu left>
                <Item>
                    <Icon dropdown/>
                    <Text>Left</Text>
                    <Menu>
                        <Item>
                            <Icon dropdown/>
                            <Text>Still Left</Text>
                            <Menu>
                                <Item>1</Item>
                                <Item>2</Item>
                                <Item>3</Item>
                            </Menu>
                        </Item>
                        <Item>2</Item>
                        <Item>3</Item>
                    </Menu>
                </Item>
                <Item>
                    <Icon dropdown/>
                    <Text>Left 2</Text>
                    <Menu>
                        <Item>1</Item>
                        <Item>2</Item>
                        <Item>3</Item>
                    </Menu>
                </Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Columnar menu -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Columnar menu" code = {Code.columnar_menu}>

        <Select ui fluid two column dropdown multiple>
            <Option value="1">one</Option>
            <Option value="2">two</Option>
            <Option value="3">three</Option>
            <Option value="4">four</Option>
            <Option value="5">five</Option>
            <Option value="6">six</Option>
            <Option value="7">seven</Option>
            <Option value="8">eight</Option>
            <Option value="9">nine</Option>
            <Option value="10">ten</Option>
            <Option value="0">zero</Option>
        </Select>

        <Select ui fluid search three column dropdown multiple>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>

        <Select ui fluid search four column dropdown multiple>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>

        <Select ui fluid search five column dropdown multiple>
            {#each Object.keys(states) as key}
                <Option value={key}>{states[key]}</Option>
            {/each}
        </Select>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
        


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Simple -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Simple" code = {Code.simple}>

        <Dropdown ui >
            <Input type="hidden" id="gender"/>
            <Icon dropdown/>
            <Text default>Gender</Text>
            <Menu>
                <Item value="male">Male</Item>
                <Item value="female">Female</Item>
            </Menu>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Dropdown using settings -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Settings" code = {Code.settings}>

        <Dropdown ui settings={{
                values: [
                    { name: 'Male', value: 'male' },
                    { name: 'Female', value: 'female', selected : true }
                ]
            }}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Changing settings after initialisation -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Change after initialisation" code = {Code.change_after_initialisation}>

        <Button ui on:click={()=>changeMenu("test")}>Click to change</Button>
        <Dropdown ui bind:selected={test} id="test" settings={genders}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test}</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Change with formatting" code = {Code.change_with_formatting}>

        <Button ui on:click={()=>changeMenu("test2")}>Click to change</Button>

        <Dropdown ui bind:selected={test2} fluid selection id="test2" settings={genders}>
            <Text/>
            <Icon dropdown/>
        </Dropdown>
        <Header>{test2}</Header>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>

</Examples>