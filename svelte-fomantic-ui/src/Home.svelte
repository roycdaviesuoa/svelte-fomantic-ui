<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->
<script lang="ts">
    import SourceCode from "svelte-prism";
    import Code from "./Home";
    import Examples from "./lib/tests/Examples.svelte";
</script>

<Examples
    title="Svelte Fomantic UI"
    description="A Svelte wrapper for Fomantic UI.  If you are interested in the project, feel free to download, assess, and give me frank feedback..."
    disclaimer="This is very much a work in progress, and is not yet suitable yet for using in any project as fundamental changes will occur..."
>
    <div class="example">
        <p />
        <h4>Latest update (24 Mar, 2023)</h4>
        <p>
            This is getting close to being functionally complete - a few more
            modules, and there will be enough for most projects and I will move
            this to Release Candidate 1. Another few days...
        </p>
        <h4>Fomantic UI</h4>
        <p>
            To learn about Fomantic UI, see here: <a
                href="https://fomantic-ui.com">https://fomantic-ui.com</a
            >
        </p>
        <h4 id="progress">Progress</h4>
        <p>
            I am working on this daily, so check back often. However, my day job
            and family do sometimes get in the way of progress...
        </p>
        <h4 id="examples-and-testing">Examples and testing</h4>
        <p>This project contains examples and tests.</p>
        <ol>
            <li>
                Clone the repository from <a
                    href="https://github.com/roycdaviesuoa/svelte-fomantic-ui"
                    >Github</a
                >.
            </li>
            <li>
                Change into the <code>svelte-fomantic-ui</code> sub directory.
            </li>
            <li>Run the <code>yarn</code> command to download dependencies.</li>
            <li>Run <code>yarn dev</code> to start development web server.</li>
            <li>
                Open the link in a browser to see the dev / test website
                (usually <code>http://localhost:5173</code>)
            </li>
        </ol>
        <p>
            If you are looking for code examples, check in the <code
                >svelte-fomantic-ui/src/lib/tests</code
            >
            folder where the examples from the Fomantic UI website have been replicated
            for testing and documentation purposes. Even if you don&#39;t wish to
            run the dev server as above, you can still see the worked code. These
            are also linked to in the
            <a href="https://github.com/roycdaviesuoa/svelte-fomantic-ui"
                >progress README</a
            >
            in the <code>Example Code</code> column
        </p>
        <h4 id="overview">Overview</h4>
        <p>
            The majority of the elements, collections, views and modules are
            wrapped in a single layer, with props used to represent the primary
            fomantic-ui element. For example:
        </p>
        <SourceCode language="svelte" source={Code.button1} />
        <p>Would be written as:</p>
        <SourceCode language="svelte" source={Code.button2} />
        <p>
            As can be seem from the example, the props contain the classes that
            would be used by fomantic-ui, except the main class, in this case <code
                >button</code
            >.
        </p>
        <p>More complex structures are similarly translated, for example:</p>
        <SourceCode language="svelte" source={Code.complex1} />

        <p>becomes:</p>
        <SourceCode language="svelte" source={Code.complex2} />

        <p>
            Sometimes, you might want to send some Fomantic UI classes as text,
            in which case use the underscore prop, for example:
        </p>
        <SourceCode language="svelte" source={Code.buttons} />

        <p>where</p>
        <SourceCode language="javascript" source={Code.items} />
        <p>
            Interaction with an element and variables are achieved in the
            standard svelte way, using binding. For example:
        </p>
        <SourceCode language="svelte" source={Code.binding} />

        <p>
            binds the click event to the function <code>processForm</code> in
            the
            <code>script</code> section such as:
        </p>
        <SourceCode language="javascript" source={Code.processform} />

        <p>
            where <code>e</code> is the event and <code>e.detail</code> contains
            information about the event that has occurred in the form of:
        </p>
        <SourceCode language="svelte" source={Code.event} />
        <p>
            Similarly, to get data from an input field, the following may be
            used:
        </p>
        <SourceCode language="svelte" source={Code.inputfield} />

        <p>
            which binds the value of the input to the variable <code
                >firstname</code
            >. This means also that the default value shown in the input can be
            set by setting firstname to a default value.
        </p>
        <p>
            Note that the &#39;svelte-ised&#39; versions can be mixed with the
            Fomantic UI class versions without problem, for example:
        </p>
        <SourceCode language="svelte" source={Code.combined} />

        <p>
            It does make sense, however, to use the Svelte versions where events
            and variable binding are required as this is taken care of in the
            module.
        </p>
        <h4 id="sending-data">Sending data</h4>
        <p>
            Oftentimes, a module will require some data to be sent, where each
            variable name is preceded by <code>data-</code>. For convenience,
            these can be collected into one JSON object and sent as a data
            property. For example:
        </p>
        <SourceCode language="svelte" source={Code.sending1} />

        <p>is equivalent to:</p>
        <SourceCode language="svelte" source={Code.sending2} />

        <h4 id="installation">Installation</h4>
        <p>
            This has been packaged for installation with <code>yarn</code>, but
            should also work with <code>npm</code> (testing yet to be conducted).
            Presently, you can install in the following way:
        </p>
        <ol>
            <li>
                Install the svelte fomantic UI with <code
                    >yarn add svelte-fomantic-ui</code
                >
            </li>
            <li>Add the following lines to your index.html head section:</li>
        </ol>
        <SourceCode language="html" source={Code.html} />

        <p>
            Notice that JQuery is being included in this project as fomantic UI
            depends on it.
        </p>
        <h4 id="usage">Usage</h4>
        <p>
            To use fomantic UI in your project, import the required elements in
            the script section, and then use them in the html section below, for
            example:
        </p>
        <SourceCode language="svelte" source={Code.usage} />

        <h4 id="modules">Modules</h4>
        <p>
            Many of the Fomantic UI modules rely on javascript to work, and this
            in turn relies on JQuery, as mentioned above. The sveltised versions
            wrap this in a simple format that removes the need to use JQuery in
            your Svelte code. These modules, if used in ordinary Javascript,
            need to be initialised before they will work. This is done
            automatically for you. <strong
                >These won&#39;t work without the two lines above being included
                in your index.html head section.</strong
            >
        </p>
        <h5 id="the-update-function">The <code>update</code> function</h5>
        <p>
            Two functions are supplied that enable the sending of behaviors and
            data to a module, and are imported from <code
                >svelte-fomantic-ui</code
            >. The first is the <code>update</code> function:
        </p>
        <SourceCode language="svelte" source={Code.update} />

        <p>The update function above would be equivalent to using:</p>
        <SourceCode language="javascript" source={Code.update2} />

        <p>with the HTML:</p>
        <SourceCode language="svelte" source={Code.embed} />

        <p>
            Note that above we used the contraction of the <code>data</code> properties
            supplied as syntactic sugar. The following are the same:
        </p>
        <SourceCode language="svelte" source={Code.embed2} />

        <p>
            Which is also equivalent to using the update function with some
            settings:
        </p>
        <SourceCode language="svelte" source={Code.embed3} />

        <h5 id="the-behavior-function">The <code>behavior</code> function</h5>
        <p>
            The second function is <code>behavior</code>, which can be used to
            both send behavior commands and data, and receive return values.
        </p>
        <SourceCode language="svelte" source={Code.behavior} />

        <p>
            Both the <code>update</code> and <code>behavior</code> functions
            take one or more parameters, where the first parameter is always the
            <code>id</code>
            of the module. The second parameter, if required, is usually the behavior,
            and subsequent parameters are the parameters of that behavior. For example
            <code
                >behavior(&quot;example1&quot;, &quot;set percent&quot;, 30)</code
            >.
        </p>
        <p>
            Sometimes, the module can be sent settings on initialisation, for
            example - see the <code>Progress</code> module html below. Settings
            are sent via the <code>settings</code> prop. Similarly, some modules
            allow JSON settings to be sent when being updated, so the
            <code>update</code> function allows that possibility as well.
        </p>
        <SourceCode language="svelte" source={Code.initialise} />

        <h5>The <code>reload</code> function</h5>
        <p>
            The third function is <code>reload</code>, which is useful when you
            need to re-initialise the javascript modules on a page, for example
            when changing a part of a page that is a svelte element which
            contains fomantic-ui modules:
        </p>
        <SourceCode language="svelte" source={Code.reload} />
    </div>
</Examples>

<style>
</style>
