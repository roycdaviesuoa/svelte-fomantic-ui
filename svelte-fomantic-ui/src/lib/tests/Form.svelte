<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, March 2023, roy.c.davies@ieee.org
******************************************************************************************************************************************************
-->

<script lang="ts">
    import { Form, Field, Fields, Input, Label, Checkbox, Button, Header, Select, Option, Menu, Item, Flag, Dropdown, Icon, Text, Image, Segment, Message } from "../svelte-fomantic-ui.svelte";
    import Example from "./Example.svelte";
    import Examples from "./Examples.svelte";
    import Code from './Form';

    let form1 = {
        firstname: "",
        lastname: "",
        t_and_c: false
    }
    let form2 = {
        shipping: {
            firstname: "",
            lastname: "",
        },
        billing: {
            address: "",
            address2: "",
            state: "",
            country: ""
        },
        information: {
            cardtype: "",
            number: "",
            cvc: "",
            expiration: {
                month: "",
                year: ""
            }
        },
        receipt: {
            sendto: [],
            noreceipt: false
        }
    }
</script>


<Examples
    title = "Form examples and tests"
    description = "To check these are correct, compare with standard FomanticUI, <a href='https://fomantic-ui.com/collections/form.html'>here</a>"
    code = {Code}>


    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- Form -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "Form" code = {Code.form}>

        <Form ui popup={{content: "Please fill in this form", position: "top center", variation: "basic"}}>
            <Field>
                <Label input>First Name</Label>
                <Input text name="first-name" placeholder="First Name" bind:value={form1.firstname}/>
            </Field>
            <Field>
                <Label input>Last Name</Label>
                <Input text name="last-name" placeholder="Last Name" bind:value={form1.lastname}/>
            </Field>
            <Field>
                <Checkbox ui bind:checked={form1.t_and_c}>
                    <Label checkbox>I agree to the Terms and Conditions</Label>
                </Checkbox>
            </Field>
            <Button ui type="submit">Submit</Button>
        </Form>
        <Message ui><Text h4 ui>Form Values: </Text>{JSON.stringify(form1)}</Message>

        <Form ui>
            <Header h4 ui dividing>Shipping Information</Header>
            <Field>
                <Label input>Name</Label>
                <Fields two>
                    <Field>
                        <Input text name="shipping[first-name]" placeholder="First Name" bind:value={form2.shipping.firstname}/>
                    </Field>
                    <Field>
                        <Input text name="shipping[last-name]" placeholder="Last Name" bind:value={form2.shipping.lastname}/>
                    </Field>
                </Fields>
            </Field>
            <Field>
                <Label input>Billing Address</Label>
                <Fields>
                    <Field twelve wide>
                        <Input text name="shipping[address]" placeholder="Street Address" bind:value={form2.billing.address}/>
                    </Field>
                    <Field four wide>
                        <Input text name="shipping[address-2]" placeholder="Apt #" bind:value={form2.billing.address2}/>
                    </Field>
                </Fields>
            </Field>
            <Fields two>
                <Field>
                    <Label input>State</Label>
                    <Select ui fluid dropdown bind:value={form2.billing.state}>
                        <Option value="">State</Option>
                        <Option value="AL">Alabama</Option>
                        <Option value="AK">Alaska</Option>
                        <Option value="AZ">Arizona</Option>
                        <Option value="AR">Arkansas</Option>
                        <Option value="CA">California</Option>
                        <Option value="CO">Colorado</Option>
                        <Option value="CT">Connecticut</Option>
                        <Option value="DE">Delaware</Option>
                        <Option value="DC">District Of Columbia</Option>
                        <Option value="FL">Florida</Option>
                        <Option value="GA">Georgia</Option>
                        <Option value="HI">Hawaii</Option>
                        <Option value="ID">Idaho</Option>
                        <Option value="IL">Illinois</Option>
                        <Option value="IN">Indiana</Option>
                        <Option value="IA">Iowa</Option>
                        <Option value="KS">Kansas</Option>
                        <Option value="KY">Kentucky</Option>
                        <Option value="LA">Louisiana</Option>
                        <Option value="ME">Maine</Option>
                        <Option value="MD">Maryland</Option>
                        <Option value="MA">Massachusetts</Option>
                        <Option value="MI">Michigan</Option>
                        <Option value="MN">Minnesota</Option>
                        <Option value="MS">Mississippi</Option>
                        <Option value="MO">Missouri</Option>
                        <Option value="MT">Montana</Option>
                        <Option value="NE">Nebraska</Option>
                        <Option value="NV">Nevada</Option>
                        <Option value="NH">New Hampshire</Option>
                        <Option value="NJ">New Jersey</Option>
                        <Option value="NM">New Mexico</Option>
                        <Option value="NY">New York</Option>
                        <Option value="NC">North Carolina</Option>
                        <Option value="ND">North Dakota</Option>
                        <Option value="OH">Ohio</Option>
                        <Option value="OK">Oklahoma</Option>
                        <Option value="OR">Oregon</Option>
                        <Option value="PA">Pennsylvania</Option>
                        <Option value="RI">Rhode Island</Option>
                        <Option value="SC">South Carolina</Option>
                        <Option value="SD">South Dakota</Option>
                        <Option value="TN">Tennessee</Option>
                        <Option value="TX">Texas</Option>
                        <Option value="UT">Utah</Option>
                        <Option value="VT">Vermont</Option>
                        <Option value="VA">Virginia</Option>
                        <Option value="WA">Washington</Option>
                        <Option value="WV">West Virginia</Option>
                        <Option value="WI">Wisconsin</Option>
                        <Option value="WY">Wyoming</Option>
                    </Select>
                </Field>
                <Field>
                    <Label input>Country</Label>
                    <Dropdown ui fluid search selection bind:selected={form2.billing.country}>
                        <Input hidden name="country"/>
                        <Icon dropdown/>
                        <Text default>Select Country</Text>
                        <Menu>
                            <Item data-value="af"><Flag af/>Afghanistan</Item>
                            <Item data-value="ax"><Flag ax/>Aland Islands</Item>
                            <Item data-value="al"><Flag al/>Albania</Item>
                            <Item data-value="dz"><Flag dz/>Algeria</Item>
                            <Item data-value="as"><Flag as/>American Samoa</Item>
                            <Item data-value="ad"><Flag ad/>Andorra</Item>
                            <Item data-value="ao"><Flag ao/>Angola</Item>
                            <Item data-value="ai"><Flag ai/>Anguilla</Item>
                            <Item data-value="ag"><Flag ag/>Antigua</Item>
                            <Item data-value="ar"><Flag ar/>Argentina</Item>
                            <Item data-value="am"><Flag am/>Armenia</Item>
                            <Item data-value="aw"><Flag aw/>Aruba</Item>
                            <Item data-value="au"><Flag au/>Australia</Item>
                            <Item data-value="at"><Flag at/>Austria</Item>
                            <Item data-value="az"><Flag az/>Azerbaijan</Item>
                            <Item data-value="bs"><Flag bs/>Bahamas</Item>
                            <Item data-value="bh"><Flag bh/>Bahrain</Item>
                            <Item data-value="bd"><Flag bd/>Bangladesh</Item>
                            <Item data-value="bb"><Flag bb/>Barbados</Item>
                            <Item data-value="by"><Flag by/>Belarus</Item>
                            <Item data-value="be"><Flag be/>Belgium</Item>
                            <Item data-value="bz"><Flag bz/>Belize</Item>
                            <Item data-value="bj"><Flag bj/>Benin</Item>
                            <Item data-value="bm"><Flag bm/>Bermuda</Item>
                            <Item data-value="bt"><Flag bt/>Bhutan</Item>
                            <Item data-value="bo"><Flag bo/>Bolivia</Item>
                            <Item data-value="ba"><Flag ba/>Bosnia</Item>
                            <Item data-value="bw"><Flag bw/>Botswana</Item>
                            <Item data-value="bv"><Flag bv/>Bouvet Island</Item>
                            <Item data-value="br"><Flag br/>Brazil</Item>
                            <Item data-value="vg"><Flag vg/>British Virgin Islands</Item>
                            <Item data-value="bn"><Flag bn/>Brunei</Item>
                            <Item data-value="bg"><Flag bg/>Bulgaria</Item>
                            <Item data-value="bf"><Flag bf/>Burkina Faso</Item>
                            <Item data-value="mm"><Flag mm/>Burma</Item>
                            <Item data-value="bi"><Flag bi/>Burundi</Item>
                            <Item data-value="tc"><Flag tc/>Caicos Islands</Item>
                            <Item data-value="kh"><Flag kh/>Cambodia</Item>
                            <Item data-value="cm"><Flag cm/>Cameroon</Item>
                            <Item data-value="ca"><Flag ca/>Canada</Item>
                            <Item data-value="cv"><Flag cv/>Cape Verde</Item>
                            <Item data-value="ky"><Flag ky/>Cayman Islands</Item>
                            <Item data-value="cf"><Flag cf/>Central African Republic</Item>
                            <Item data-value="td"><Flag td/>Chad</Item>
                            <Item data-value="cl"><Flag cl/>Chile</Item>
                            <Item data-value="cn"><Flag cn/>China</Item>
                            <Item data-value="cx"><Flag cx/>Christmas Island</Item>
                            <Item data-value="cc"><Flag cc/>Cocos Islands</Item>
                            <Item data-value="co"><Flag co/>Colombia</Item>
                            <Item data-value="km"><Flag km/>Comoros</Item>
                            <Item data-value="cg"><Flag cg/>Congo Brazzaville</Item>
                            <Item data-value="cd"><Flag cd/>Congo</Item>
                            <Item data-value="ck"><Flag ck/>Cook Islands</Item>
                            <Item data-value="cr"><Flag cr/>Costa Rica</Item>
                            <Item data-value="ci"><Flag ci/>Cote Divoire</Item>
                            <Item data-value="hr"><Flag hr/>Croatia</Item>
                            <Item data-value="cu"><Flag cu/>Cuba</Item>
                            <Item data-value="cy"><Flag cy/>Cyprus</Item>
                            <Item data-value="cz"><Flag cz/>Czech Republic</Item>
                            <Item data-value="dk"><Flag dk/>Denmark</Item>
                            <Item data-value="dj"><Flag dj/>Djibouti</Item>
                            <Item data-value="dm"><Flag dm/>Dominica</Item>
                            <Item data-value="do"><Flag do/>Dominican Republic</Item>
                            <Item data-value="ec"><Flag ec/>Ecuador</Item>
                            <Item data-value="eg"><Flag eg/>Egypt</Item>
                            <Item data-value="sv"><Flag sv/>El Salvador</Item>
                            <Item data-value="gb"><Flag gb/>England</Item>
                            <Item data-value="gq"><Flag gq/>Equatorial Guinea</Item>
                            <Item data-value="er"><Flag er/>Eritrea</Item>
                            <Item data-value="ee"><Flag ee/>Estonia</Item>
                            <Item data-value="et"><Flag et/>Ethiopia</Item>
                            <Item data-value="eu"><Flag eu/>European Union</Item>
                            <Item data-value="fk"><Flag fk/>Falkland Islands</Item>
                            <Item data-value="fo"><Flag fo/>Faroe Islands</Item>
                            <Item data-value="fj"><Flag fj/>Fiji</Item>
                            <Item data-value="fi"><Flag fi/>Finland</Item>
                            <Item data-value="fr"><Flag fr/>France</Item>
                            <Item data-value="gf"><Flag gf/>French Guiana</Item>
                            <Item data-value="pf"><Flag pf/>French Polynesia</Item>
                            <Item data-value="tf"><Flag tf/>French Territories</Item>
                            <Item data-value="ga"><Flag ga/>Gabon</Item>
                            <Item data-value="gm"><Flag gm/>Gambia</Item>
                            <Item data-value="ge"><Flag ge/>Georgia</Item>
                            <Item data-value="de"><Flag de/>Germany</Item>
                            <Item data-value="gh"><Flag gh/>Ghana</Item>
                            <Item data-value="gi"><Flag gi/>Gibraltar</Item>
                            <Item data-value="gr"><Flag gr/>Greece</Item>
                            <Item data-value="gl"><Flag gl/>Greenland</Item>
                            <Item data-value="gd"><Flag gd/>Grenada</Item>
                            <Item data-value="gp"><Flag gp/>Guadeloupe</Item>
                            <Item data-value="gu"><Flag gu/>Guam</Item>
                            <Item data-value="gt"><Flag gt/>Guatemala</Item>
                            <Item data-value="gw"><Flag gw/>Guinea-Bissau</Item>
                            <Item data-value="gn"><Flag gn/>Guinea</Item>
                            <Item data-value="gy"><Flag gy/>Guyana</Item>
                            <Item data-value="ht"><Flag ht/>Haiti</Item>
                            <Item data-value="hm"><Flag hm/>Heard Island</Item>
                            <Item data-value="hn"><Flag hn/>Honduras</Item>
                            <Item data-value="hk"><Flag hk/>Hong Kong</Item>
                            <Item data-value="hu"><Flag hu/>Hungary</Item>
                            <Item data-value="is"><Flag is/>Iceland</Item>
                            <Item data-value="in"><Flag in/>India</Item>
                            <Item data-value="io"><Flag io/>Indian Ocean Territory</Item>
                            <Item data-value="id"><Flag id/>Indonesia</Item>
                            <Item data-value="ir"><Flag ir/>Iran</Item>
                            <Item data-value="iq"><Flag iq/>Iraq</Item>
                            <Item data-value="ie"><Flag ie/>Ireland</Item>
                            <Item data-value="il"><Flag il/>Israel</Item>
                            <Item data-value="it"><Flag it/>Italy</Item>
                            <Item data-value="jm"><Flag jm/>Jamaica</Item>
                            <Item data-value="jp"><Flag jp/>Japan</Item>
                            <Item data-value="jo"><Flag jo/>Jordan</Item>
                            <Item data-value="kz"><Flag kz/>Kazakhstan</Item>
                            <Item data-value="ke"><Flag ke/>Kenya</Item>
                            <Item data-value="ki"><Flag ki/>Kiribati</Item>
                            <Item data-value="kw"><Flag kw/>Kuwait</Item>
                            <Item data-value="kg"><Flag kg/>Kyrgyzstan</Item>
                            <Item data-value="la"><Flag la/>Laos</Item>
                            <Item data-value="lv"><Flag lv/>Latvia</Item>
                            <Item data-value="lb"><Flag lb/>Lebanon</Item>
                            <Item data-value="ls"><Flag ls/>Lesotho</Item>
                            <Item data-value="lr"><Flag lr/>Liberia</Item>
                            <Item data-value="ly"><Flag ly/>Libya</Item>
                            <Item data-value="li"><Flag li/>Liechtenstein</Item>
                            <Item data-value="lt"><Flag lt/>Lithuania</Item>
                            <Item data-value="lu"><Flag lu/>Luxembourg</Item>
                            <Item data-value="mo"><Flag mo/>Macau</Item>
                            <Item data-value="mk"><Flag mk/>Macedonia</Item>
                            <Item data-value="mg"><Flag mg/>Madagascar</Item>
                            <Item data-value="mw"><Flag mw/>Malawi</Item>
                            <Item data-value="my"><Flag my/>Malaysia</Item>
                            <Item data-value="mv"><Flag mv/>Maldives</Item>
                            <Item data-value="ml"><Flag ml/>Mali</Item>
                            <Item data-value="mt"><Flag mt/>Malta</Item>
                            <Item data-value="mh"><Flag mh/>Marshall Islands</Item>
                            <Item data-value="mq"><Flag mq/>Martinique</Item>
                            <Item data-value="mr"><Flag mr/>Mauritania</Item>
                            <Item data-value="mu"><Flag mu/>Mauritius</Item>
                            <Item data-value="yt"><Flag yt/>Mayotte</Item>
                            <Item data-value="mx"><Flag mx/>Mexico</Item>
                            <Item data-value="fm"><Flag fm/>Micronesia</Item>
                            <Item data-value="md"><Flag md/>Moldova</Item>
                            <Item data-value="mc"><Flag mc/>Monaco</Item>
                            <Item data-value="mn"><Flag mn/>Mongolia</Item>
                            <Item data-value="me"><Flag me/>Montenegro</Item>
                            <Item data-value="ms"><Flag ms/>Montserrat</Item>
                            <Item data-value="ma"><Flag ma/>Morocco</Item>
                            <Item data-value="mz"><Flag mz/>Mozambique</Item>
                            <Item data-value="na"><Flag na/>Namibia</Item>
                            <Item data-value="nr"><Flag nr/>Nauru</Item>
                            <Item data-value="np"><Flag np/>Nepal</Item>
                            <Item data-value="an"><Flag an/>Netherlands Antilles</Item>
                            <Item data-value="nl"><Flag nl/>Netherlands</Item>
                            <Item data-value="nc"><Flag nc/>New Caledonia</Item>
                            <Item data-value="pg"><Flag pg/>New Guinea</Item>
                            <Item data-value="nz"><Flag nz/>New Zealand</Item>
                            <Item data-value="ni"><Flag ni/>Nicaragua</Item>
                            <Item data-value="ne"><Flag ne/>Niger</Item>
                            <Item data-value="ng"><Flag ng/>Nigeria</Item>
                            <Item data-value="nu"><Flag nu/>Niue</Item>
                            <Item data-value="nf"><Flag nf/>Norfolk Island</Item>
                            <Item data-value="kp"><Flag kp/>North Korea</Item>
                            <Item data-value="mp"><Flag mp/>Northern Mariana Islands</Item>
                            <Item data-value="no"><Flag no/>Norway</Item>
                            <Item data-value="om"><Flag om/>Oman</Item>
                            <Item data-value="pk"><Flag pk/>Pakistan</Item>
                            <Item data-value="pw"><Flag pw/>Palau</Item>
                            <Item data-value="ps"><Flag ps/>Palestine</Item>
                            <Item data-value="pa"><Flag pa/>Panama</Item>
                            <Item data-value="py"><Flag py/>Paraguay</Item>
                            <Item data-value="pe"><Flag pe/>Peru</Item>
                            <Item data-value="ph"><Flag ph/>Philippines</Item>
                            <Item data-value="pn"><Flag pn/>Pitcairn Islands</Item>
                            <Item data-value="pl"><Flag pl/>Poland</Item>
                            <Item data-value="pt"><Flag pt/>Portugal</Item>
                            <Item data-value="pr"><Flag pr/>Puerto Rico</Item>
                            <Item data-value="qa"><Flag qa/>Qatar</Item>
                            <Item data-value="re"><Flag re/>Reunion</Item>
                            <Item data-value="ro"><Flag ro/>Romania</Item>
                            <Item data-value="ru"><Flag ru/>Russia</Item>
                            <Item data-value="rw"><Flag rw/>Rwanda</Item>
                            <Item data-value="sh"><Flag sh/>Saint Helena</Item>
                            <Item data-value="kn"><Flag kn/>Saint Kitts and Nevis</Item>
                            <Item data-value="lc"><Flag lc/>Saint Lucia</Item>
                            <Item data-value="pm"><Flag pm/>Saint Pierre</Item>
                            <Item data-value="vc"><Flag vc/>Saint Vincent</Item>
                            <Item data-value="ws"><Flag ws/>Samoa</Item>
                            <Item data-value="sm"><Flag sm/>San Marino</Item>
                            <Item data-value="gs"><Flag gs/>Sandwich Islands</Item>
                            <Item data-value="st"><Flag st/>Sao Tome</Item>
                            <Item data-value="sa"><Flag sa/>Saudi Arabia</Item>
                            <Item data-value="sn"><Flag sn/>Senegal</Item>
                            <Item data-value="cs"><Flag cs/>Serbia</Item>
                            <Item data-value="rs"><Flag rs/>Serbia</Item>
                            <Item data-value="sc"><Flag sc/>Seychelles</Item>
                            <Item data-value="sl"><Flag sl/>Sierra Leone</Item>
                            <Item data-value="sg"><Flag sg/>Singapore</Item>
                            <Item data-value="sk"><Flag sk/>Slovakia</Item>
                            <Item data-value="si"><Flag si/>Slovenia</Item>
                            <Item data-value="sb"><Flag sb/>Solomon Islands</Item>
                            <Item data-value="so"><Flag so/>Somalia</Item>
                            <Item data-value="za"><Flag za/>South Africa</Item>
                            <Item data-value="kr"><Flag kr/>South Korea</Item>
                            <Item data-value="es"><Flag es/>Spain</Item>
                            <Item data-value="lk"><Flag lk/>Sri Lanka</Item>
                            <Item data-value="sd"><Flag sd/>Sudan</Item>
                            <Item data-value="sr"><Flag sr/>Suriname</Item>
                            <Item data-value="sj"><Flag sj/>Svalbard</Item>
                            <Item data-value="sz"><Flag sz/>Swaziland</Item>
                            <Item data-value="se"><Flag se/>Sweden</Item>
                            <Item data-value="ch"><Flag ch/>Switzerland</Item>
                            <Item data-value="sy"><Flag sy/>Syria</Item>
                            <Item data-value="tw"><Flag tw/>Taiwan</Item>
                            <Item data-value="tj"><Flag tj/>Tajikistan</Item>
                            <Item data-value="tz"><Flag tz/>Tanzania</Item>
                            <Item data-value="th"><Flag th/>Thailand</Item>
                            <Item data-value="tl"><Flag tl/>Timorleste</Item>
                            <Item data-value="tg"><Flag tg/>Togo</Item>
                            <Item data-value="tk"><Flag tk/>Tokelau</Item>
                            <Item data-value="to"><Flag to/>Tonga</Item>
                            <Item data-value="tt"><Flag tt/>Trinidad</Item>
                            <Item data-value="tn"><Flag tn/>Tunisia</Item>
                            <Item data-value="tr"><Flag tr/>Turkey</Item>
                            <Item data-value="tm"><Flag tm/>Turkmenistan</Item>
                            <Item data-value="tv"><Flag tv/>Tuvalu</Item>
                            <Item data-value="ug"><Flag ug/>Uganda</Item>
                            <Item data-value="ua"><Flag ua/>Ukraine</Item>
                            <Item data-value="ae"><Flag ae/>United Arab Emirates</Item>
                            <Item data-value="us"><Flag us/>United States</Item>
                            <Item data-value="uy"><Flag uy/>Uruguay</Item>
                            <Item data-value="um"><Flag um/>Us Minor Islands</Item>
                            <Item data-value="vi"><Flag vi/>Us Virgin Islands</Item>
                            <Item data-value="uz"><Flag uz/>Uzbekistan</Item>
                            <Item data-value="vu"><Flag vu/>Vanuatu</Item>
                            <Item data-value="va"><Flag va/>Vatican City</Item>
                            <Item data-value="ve"><Flag ve/>Venezuela</Item>
                            <Item data-value="vn"><Flag vn/>Vietnam</Item>
                            <Item data-value="wf"><Flag wf/>Wallis and Futuna</Item>
                            <Item data-value="eh"><Flag eh/>Western Sahara</Item>
                            <Item data-value="ye"><Flag ye/>Yemen</Item>
                            <Item data-value="zm"><Flag zm/>Zambia</Item>
                            <Item data-value="zw"><Flag zw/>Zimbabwe</Item>
                        </Menu>
                    </Dropdown>
                </Field>
            </Fields>
            <Header ui h4 dividing>Billing Information</Header>
            <Field>
                <Label input>Card Type</Label>
                <Dropdown ui selection bind:selected={form2.information.cardtype}>
                    <Input hidden name="card[type]"/>
                    <Text default>Type</Text>
                    <Icon dropdown/>
                    <Menu>
                        <Item data-value="visa">
                            <Icon visa/>
                            Visa
                        </Item>
                        <Item data-value="amex">
                            <Icon amex/>
                            American Express
                        </Item>
                        <Item data-value="discover">
                            <Icon discover/>
                            Discover
                        </Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Fields>
                <Field seven wide>
                    <Label input>Card Number</Label>
                    <Input text name="card[number]" maxlength="16" placeholder="Card #" bind:value={form2.information.number}/>
                </Field>
                <Field three wide>
                    <Label input>CVC</Label>
                    <Input text name="card[cvc]" maxlength="3" placeholder="CVC" bind:value={form2.information.cvc}/>
                </Field>
                <Field six wide>
                    <Label input>Expiration</Label>
                    <Fields>
                        <Field eight wide>
                            <Select ui fluid search dropdown name="card[expire-month]" bind:selected={form2.information.expiration}>
                                <Option value="">Month</Option>
                                <Option value="1">January</Option>
                                <Option value="2">February</Option>
                                <Option value="3">March</Option>
                                <Option value="4">April</Option>
                                <Option value="5">May</Option>
                                <Option value="6">June</Option>
                                <Option value="7">July</Option>
                                <Option value="8">August</Option>
                                <Option value="9">September</Option>
                                <Option value="10">October</Option>
                                <Option value="11">November</Option>
                                <Option value="12">December</Option>
                            </Select>
                        </Field>
                        <Field>
                            <Input text name="card[expire-year]" maxlength="4" placeholder="Year"/>
                        </Field>
                    </Fields>
                </Field>
            </Fields>
            <Header h4 ui dividing>Receipt</Header>
            <Field>
                <Label input>Send Receipt To:</Label>
                <Dropdown ui fluid multiple search selection bind:selected={form2.receipt.sendto}>
                    <Input hidden name="receipt"/>
                    <Icon dropdown/>
                    <Text default>Saved Contacts</Text>
                    <Menu>
                        <Item data-value="jenny" data-text="Jenny">
                            <Image ui mini avatar src="/images//jenny.jpg"/>
                            Jenny Hess
                        </Item>
                        <Item data-value="elliot" data-text="Elliot">
                            <Image ui mini avatar src="/images//elliot.jpg"/>
                            Elliot Fu
                        </Item>
                        <Item data-value="stevie" data-text="Stevie">
                            <Image ui mini avatar src="/images//stevie.jpg"/>
                            Stevie Feliciano
                        </Item>
                        <Item data-value="christian" data-text="Christian">
                            <Image ui mini avatar src="/images//christian.jpg"/>
                            Christian
                        </Item>
                        <Item data-value="matt" data-text="Matt">
                            <Image ui mini avatar src="/images//matt.jpg"/>
                            Matt
                        </Item>
                        <Item data-value="justen" data-text="Justen">
                            <Image ui mini avatar src="/images//justen.jpg"/>
                            Justen Kitsune
                        </Item>
                    </Menu>
                </Dropdown>
            </Field>
            <Segment ui>
                <Field>
                    <Checkbox ui toggle name="gift" tabindex="0" bind:checked={form2.receipt.noreceipt}>
                        <Label>Do not include a receipt in the package</Label>
                    </Checkbox>
                </Field>
            </Segment>
            <Button ui tabindex="0">Submit Order</Button>
        </Form>
        <Message ui><Text h4 ui>Form Values: </Text>{JSON.stringify(form2)}</Message>

    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>



    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <!-- XXXX -->
    <!------------------------------------------------------------------------------------------------------------------------------------------------>
    <Example title = "XXXX" code = {Code.XXXX}>



    </Example>
    <!------------------------------------------------------------------------------------------------------------------------------------------------>


</Examples>