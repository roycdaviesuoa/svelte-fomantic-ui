<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Ad } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Ad';
</script>


<Examples
    title = "Advertisement examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/views/advertisement.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Advertisement -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Advertisement" code = {Code.advertisement}>

        <Ad ui medium rectangle style="display: none !important; min-height: 0px !important; height: 0px !important;" hidden>
                <!-- Ad Code Goes Here
                <ins class="adsbygoogle"
                    style="display:inline-block;width:300px;height:250px"
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                    data-ad-slot="XXXXXXXXXX"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                !-->
          </Ad>
          <Ad ui leaderboard style="display: none !important; min-height: 0px !important; height: 0px !important;" hidden>
            <!-- Leaderboard
            <ins class="adsbygoogle"
                style="display:inline-block;width:728px;height:90px"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXXXXXXXX"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            !-->
          </Ad>
          <Ad ui banner style="display: none !important; min-height: 0px !important; height: 0px !important;" hidden>
            <!-- Banner
            <ins class="adsbygoogle"
                style="display:inline-block;width:468px;height:60px"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXXXXXXXX"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            !-->
        </Ad>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>