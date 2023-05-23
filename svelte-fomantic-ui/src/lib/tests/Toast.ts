// ******************************************************************************************************************************************************
// * By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************


const code = {
    minimal : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'I am a toast, nice to meet you !'
}})}>Minimal</Button>
    `,
    titled : `
<Button ui _={randomColor()} on:click={() => { behavior( {type:"toast", settings:{
    title: 'Better ?',
    message: 'Hey look, I have a title !'
}})}}>Titled</Button>
    `,
    progress_bar : `
<Button ui grey on:click={() => behavior( {type:"toast", settings:{
    title: 'LOOK',
    message: 'See, how long I will last',
    showProgress: "bottom"
}})}>Progress Bar</Button>

<Button ui red on:click={() => behavior( {type:"toast", settings:{
    title: 'LOOK',
    message: 'See, how long I will last',
    showProgress: "bottom",
    classProgress: 'red'
}})}>Colored Progress Bar</Button>
    `,
    variations : `
<Button ui green on:click={() => behavior( {type:"toast", settings:{
    class: 'success',
    message: 'You're using the good framework !'
}})}>Success</Button>


<Button ui red on:click={() => behavior( {type:"toast", settings:{
    class: 'error',
    message: 'An error occurred !'
}})}>Error</Button>


<Button ui yellow on:click={() => behavior( {type:"toast", settings:{
    class: 'warning',
    message: 'Behind you !'
}})}>Warning</Button>
    `,
    position : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    position: 'bottom right',
    message: 'It\'s pretty cold down there...'
}})}>Bottom Right</Button>


<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    position: 'top left',
    message: 'Look, I\'m here !'
}})}>Top Left</Button>
    `,
    window_attached : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    position: 'top attached',
    title: 'Watch out!',
    message: 'I am a top attached toast'
}})}>Top Attached</Button>

<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    position: 'bottom attached',
    title: 'Watch out!',
    message: 'I am a bottom attached toast',
    newestOnTop: true
}})}>Bottom Attached</Button>
    `,
    direction : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    horizontal: true,
    position: 'top left',
    message: 'Next one will open to the right'
}})}>Directional</Button>
    `,
    center_aligned : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    title: 'Veronika has joined',
    message: 'Welcome to the Fomantic-UI community!',
    class: 'center aligned'
}})}>Center aligned</Button>
    `,
    duration : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    displayTime: 5000,
    message: 'You will see me for 5 seconds.'
}})}>Five seconds</Button>

<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    displayTime: 0,
    message: 'I\'ll stay here until you click on me !'
}})}>Click to remove</Button>

<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    displayTime: 'auto',
    showProgress: 'top',
    classProgress: 'blue',
    message: 'The display time of this toast is calculated by its amount of containing words.<br>You can adjust the calculation by modifying the default values for <span class="ui label">minDisplayTime</span> and <span class="ui label">wordsPerMinute</span>'
}})}>Automatic duration calculation</Button>
    `,
    message_style : `
<Button ui purple on:click={() => behavior( {type:"toast", settings:{
    title: 'Awesome',
    message: 'I got my style from the message class',
    class : 'purple',
    className: {
        toast: 'ui message'
    }
}})}>Styled toast message</Button>
    `,
    increasing_progress : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    title: 'LOOK',
    message: 'See, how long i will last',
    showProgress: 'top',
    progressUp: true
}})}>Increasing progress</Button>
    `,
    color : `
<Button ui _={colors[currentColor]} on:click={() => {
    behavior( {type:"toast", settings:{
        message: 'I am a colorful toast',
        class : colors[currentColor],   //cycle through all colors
        showProgress: 'bottom'
    }});
    currentColor = (currentColor + 1) % colors.length;
}}>Many colors</Button>
    `,
    inverted_color : `
<Button ui _={colors[currentColor]} on:click={() => {
    behavior( {type:"toast", settings:{
        message: 'I am an inverted colorful toast',
        class : 'inverted ' + colors[currentColor],   //cycle through all colors
        showProgress: 'bottom'
    }});
    currentColor = (currentColor + 1) % colors.length;
}}>Many inverted colors</Button>
    `,
    actions : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    actions:	[{
        text: 'Yes',
        icon: 'check',
        class: 'green',
        click: () => { behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}})}
    },{
        icon: 'ban',
        class: 'icon red'
    },{
        text: '?',
        class: 'blue',
        click: () => {
            behavior( {type:"toast", settings:{message:'Returning false from the click handler avoids closing the toast '}});
            return false;
        }
    }]
}})}>Actions</Button>
    `,
    basic : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    classActions: 'basic left',
    actions: [{
        text: 'Yes, really',
        class: 'yellow',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}});
        }
    }]
}})}>Basic</Button>
    `,
    centered : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    classActions: 'centered',
    actions: [{
        text: 'Yes, really',
        class: 'yellow',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}});
        }
    }]
}})}>Centered</Button>
    `,
    attached : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    classActions: 'top attached',
    actions: [{
        text: 'Yes, really',
        class: 'green',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}});
        }
    }, {
        text: 'Maybe later',
        class: 'red',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "maybe", toast closes by default'}});
        }
    }]
}})}>Attached</Button>
    `,
    vertical : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    classActions: 'vertical',
    actions: [{
        text: 'Yes, really',
        class: 'green',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}});
        }
    }, {
        text: 'Maybe later',
        class: 'red',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "maybe", toast closes by default'}});
        }
    }]
}})}>Vertical</Button>
    `,
    vertical_attached : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    class: 'black',
    classActions: 'left vertical attached',
    actions: [{
        text: 'Yes, really',
        class: 'green',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "yes", toast closes by default'}});
        }
    }, {
        text: 'Maybe later',
        class: 'red',
        click: () => {
            behavior( {type:"toast", settings:{message:'You clicked "maybe", toast closes by default'}});
        }
    }]
}})}>Vertical attached</Button>
    `,
    without_icon : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    class: 'warning',
    showIcon: false,
    message: 'Hey, where is my icon ?'
}})}>Without icon</Button>
    `,
    individual_icon : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    class: 'info',
    showIcon: 'microphone',
    message: 'Listen to me'
}})}>Individual icon</Button>
    `,
    image : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    showImage: '/images/veronika.jpg',
    classImage: 'avatar',
    message: 'Veronika has joined the Fomantic-UI community'
}})}>Avatar image</Button>

<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    showImage: '/images/veronika.jpg',
    class: 'image',
    classImage: 'tiny',
    message: 'Veronika has joined the Fomantic-UI community'
}})}>Image</Button>
    `,
    close_icon : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    class: 'info',
    displayTime: 0,
    closeIcon: true,
    message: 'Click on the X to close me'
}})}>Right close icon</Button>

<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    class: 'info',
    displayTime: 0,
    closeIcon: 'left',
    message: 'Click on the X to close me'
}})}>Left close icon</Button>
    `,
    transitions : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    class: 'success',
    message: 'Did you notice any difference ?',
    transition: {
        showMethod   : 'zoom',
        showDuration : 1000,
        hideMethod   : 'fade',
        hideDuration : 1000
    }
}})}>Transitions</Button>
    `,
    center_attached_actions : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    title: 'Centered top attached',
    message: 'I only support attached actions',
    displayTime: 0,
    position: 'top attached',
    class: 'centered',
    classActions: 'attached',
    actions:	[{
        text: 'Mark as read',
        class: 'grey'
    },{
        text: 'Delete',
        class: 'red'
    }]
}})}>Centered attached actions</Button>
    `,
    create_from_dom : `
<Toast ui blue id="domtoast">
    <Content>
        <Header ui>Notice</Header>
        A Toast can be generated out of existing DOM Nodes
    </Content>
</Toast>
<p></p>
<Button ui blue on:click={() => behavior( {type:"toast", id: "domtoast"} ) }>
    Create from DOM
</Button>
    `,
    reuse_template : `
<Toast ui pink id="domtemplate">
    <Image ui avatar/>
    <Content>
        <Header ui/>
        <Message/>
    </Content>
</Toast>
<p></p>
<Button ui pink on:click={() => behavior( {type: "toast", id: "domtemplate", settings: {
    title: 'Hello visitor #' + Math.random().toString(36).substr(2),
    message: 'Message ID: '+ Math.random().toString(36).substr(2),
    showImage: '/images/zoe.jpg'
}})}>Reuse template</Button>
    `,
    approve_deny_callbacks : `
<Toast ui blue id="domtoastactions">
    <Content>
        <Header ui>Notice</Header>
        Want to close this DOM toast?
    </Content>
    <Actions left basic>
        <Button ui positive>Yes</Button>
        <Button ui negative>No</Button>
    </Actions>
</Toast>
<p></p>
<Button ui _={randomColor()} on:click={() => behavior( {type: "toast", id: "domtoastactions", settings: {
    displayTime: 0,
    onDeny: () => {
        behavior({type: "toast", settings:{message:'Wait not yet!'}});
        return false;
    },
    onApprove : () => {
        behavior({type: "toast", settings:{message:'Approved'}});
    }
}})}>Approve / Deny callback</Button>
    `,
    message : `
<Message ui blue icon id="dommessage">
    <Icon github/>
    <Content>
        Download the source code at <br><br><a href="https://github.com/roycdaviesuoa/svelte-fomantic-ui"><b><span class="ui teal text">github</span></b></a>
    </Content>
</Message>
<Button ui _={randomColor()} on:click={() => behavior( {type: "toast", id: "dommessage" })}>Message</Button>
    `,
    card : `
<Card ui horizontal id="domcard">
    <Image>
        <Image src="/images/elyse.png"/>
    </Image>
    <Content>
        <Header>Fomantic-UI</Header>
        <Meta>
            <Category>2.8.0 Card Toast</Category>
        </Meta>
        <Description>
            <p></p>
        </Description>
    </Content>
</Card>
<Button ui _={randomColor()} on:click={() => behavior( {type: "toast", id: "domcard" })}>Card</Button>
    `,
    prevent_pausing : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'This toast does not pause when you hover on it',
    pauseOnHover: false,
    showProgress: 'top'
}})}>Prevent pausing</Button>
    `,
    prevent_closing : `
<Button ui _={randomColor()} on:click={() => behavior( {type:"toast", settings:{
    message: 'This toast does not close when you click on it',
    closeOnClick: false,
    showProgress: 'top'
}})}>Prevent closing</Button>
    `,
    access_created_toast : `
<script lang="ts">
    // Unless the variable myToast is set to null, any subsequent calls to myToast.toast() will reactivate it.
    // However, to set myToast to null, we have to pass in a function, but as per the problem of context brought about
    // by the way svelte encodes and passes props data, we have to use this workaround to ensure that the onHide function
    // can access the myToast variable that is in the context of the calling function.
    // Read more about this here: https://github.com/roycdaviesuoa/svelte-fomantic-ui/blob/main/svelte-fomantic-ui/Functions.md

    import { initialize, functionize, decommission, behavior } from "svelte-fomantic-ui";
    import { onDestroy } from "svelte";

    let id=Math.random().toString(36).substring(2, 6);

    let myToast: any;
    let callbacks = {
        onHide: {
            _: () => { myToast = null }
        }
    }

    const ID = initialize(id, callbacks);
    onDestroy(() => { decommission(ID, id, callbacks); });
</script>

<Button ui pink on:click={() => { myToast = behavior( {type:"toast", 
    settings: {
        displayTime: 120000, class: 'pink', showProgress: 'top',
        message: 'This pink toast stays for a long time. It is returned as object when created, so you can interact with it via Javascript',
        ...functionize(ID, id, callbacks)
    }, 
})}}>Open pink toast first</Button>

<Button ui on:click={() => {
    if (myToast) {
        behavior( {type:"toast", settings: {
            class: 'teal', showIcon: 'info',
            message: Math.round(myToast.toast('get remainingTime') / 1000).toString() + " seconds left"
        }}); 
    } else {
        behavior( {type:"toast", settings: {
            class: 'warning', showIcon: 'warning',
            message: "Please open the pink toast first!"
        }});
    }
}}>Remaining display time?</Button>

<Button ui on:click={() => {
    if (myToast) {
        let numToasts = myToast.toast('get toasts').length;
        behavior( {type:"toast", settings: {
            class: 'teal', showIcon: 'info',
            message: numToasts.toString() + " toast" + (numToasts>1?"s are ":" is ") + "currently shown (without this one!)"
        }}); 
    } else {
        behavior( {type:"toast", settings: {
            class: 'warning', showIcon: 'warning',
            message: "Please open the pink toast first!"
        }});
    }
}}>How many toasts displayed?</Button>

<Button ui on:click={() => {
    if (myToast) {
        myToast.toast('close');
    } else {
        behavior( {type:"toast", settings: {
            class: 'warning', showIcon: 'warning',
            message: "Please open the pink toast first!"
        }});
    }
}}>Close toast</Button>
    `
}

export default code;