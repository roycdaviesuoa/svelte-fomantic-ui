<!--
******************************************************************************************************************************************************
* By Dr. Roy C. Davies, February 2023, roy.c.davies@ieee.org
* A simple app to allow one to try the unit tests.
******************************************************************************************************************************************************
-->

<script lang='ts'>
  import AppMenu from './AppMenu.svelte';
  import Home from './Home.svelte';

  import Accordion from './lib/tests/Accordion.svelte';
  import Ad from './lib/tests/Ad.svelte';
  import Button from './lib/tests/Button.svelte';
  import ButtonInteractive from './lib/tests/ButtonInteractive.svelte';
  import Breadcrumb from './lib/tests/Breadcrumb.svelte';
  import BreadcrumbInteractive from './lib/tests/BreadcrumbInteractive.svelte';
  import Calendar from './lib/tests/Calendar.svelte';
  import Checkbox from './lib/tests/Checkbox.svelte';
  import CheckboxIndeterminate from './lib/tests/CheckboxIndeterminate.svelte';
  import Comment from './lib/tests/Comment.svelte';
  import Container from './lib/tests/Container.svelte';
  import Dimmer from './lib/tests/Dimmer.svelte';
  import Divider from './lib/tests/Divider.svelte';
  import Dropdown from './lib/tests/Dropdown.svelte';
  import Embed from './lib/tests/Embed.svelte';
  import Emoji from './lib/tests/Emoji.svelte';
  import Feed from './lib/tests/Feed.svelte';
  import Flag from './lib/tests/Flag.svelte';
  import Flyout from './lib/tests/Flyout.svelte';
  import Flyout_outer from './lib/tests/Flyout_outer.svelte';
  import Form from './lib/tests/Form.svelte';
  import Grid from './lib/tests/Grid.svelte';
  import Header from './lib/tests/Header.svelte';
  import Icon from './lib/tests/Icon.svelte';
  import Image from './lib/tests/Image.svelte';
  import Item from './lib/tests/Item.svelte';
  import Label from './lib/tests/Label.svelte';
  import List from './lib/tests/List.svelte';
  import Loader from './lib/tests/Loader.svelte';
  import Menu from './lib/tests/Menu.svelte';
  import Menu_fixed from './lib/tests/Menu_fixed.svelte';
  import Menu_fixed_vertical from './lib/tests/Menu_fixed_vertical.svelte';
  import Message from './lib/tests/Message.svelte';
  import Modal from './lib/tests/Modal.svelte';
  import Nag from './lib/tests/Nag.svelte';
  import Placeholder from './lib/tests/Placeholder.svelte';
  import Popup from './lib/tests/Popup.svelte';
  import Progress from './lib/tests/Progress.svelte';
  import Rail from './lib/tests/Rail.svelte';
  import Rating from './lib/tests/Rating.svelte';
  import Reveal from './lib/tests/Reveal.svelte';
  import Segment from './lib/tests/Segment.svelte';
  import Shape from './lib/tests/Shape.svelte';
  import Sidebar from './lib/tests/Sidebar.svelte';
  import Sidebar_outer from './lib/tests/Sidebar_outer.svelte';
  import Slider from './lib/tests/Slider.svelte';
  import Statistic from './lib/tests/Statistic.svelte';
  import Step from './lib/tests/Step.svelte';
  import Sticky from './lib/tests/Sticky.svelte';
  import Sticky_outer from './lib/tests/Sticky_outer.svelte';
  import Tab from './lib/tests/Tab.svelte';
  import Table from './lib/tests/Table.svelte';
  import Test from './lib/tests/Test.svelte';
  import Text from './lib/tests/Text.svelte';
  import Toast from './lib/tests/Toast.svelte';
  import Transition from './lib/tests/Transition.svelte';
  import Input from './lib/tests/Input.svelte';


  let currentRoute: any;

  switch (window.location.pathname) {
    case '/':
      currentRoute = AppMenu; break;
    case '/Home':
      currentRoute = Home; break;
    case '/Accordion':
      currentRoute = Accordion; break;
    case '/Ad':
        currentRoute = Ad; break;
    case '/Button':
      currentRoute = Button; break;
    case '/ButtonInteractive':
      currentRoute = ButtonInteractive; break;
    case '/Breadcrumb':
      currentRoute = Breadcrumb; break;
    case '/BreadcrumbInteractive':
      currentRoute = BreadcrumbInteractive; break;
    case '/Calendar':
      currentRoute = Calendar; break;
    case '/Checkbox':
      currentRoute = Checkbox; break;
    case '/CheckboxIndeterminate':
      currentRoute = CheckboxIndeterminate; break;
    case '/Comment':
      currentRoute = Comment; break;
    case '/Container':
      currentRoute = Container; break;
    case '/Dimmer':
      currentRoute = Dimmer; break;
    case '/Divider':
      currentRoute = Divider; break;
    case '/Dropdown':
      currentRoute = Dropdown; break;
    case '/Embed':
      currentRoute = Embed; break;
    case '/Emoji':
      currentRoute = Emoji; break;
    case '/Feed':
      currentRoute = Feed; break;
    case '/Flag':
      currentRoute = Flag; break;
    case '/Flyout':
      currentRoute = Flyout; break;
    case '/Flyout_outer':
      currentRoute = Flyout_outer; break;
    case '/Form':
      currentRoute = Form; break;
    case '/Grid':
      currentRoute = Grid; break;
    case '/Header':
      currentRoute = Header; break;
    case '/Icon':
      currentRoute = Icon; break;
    case '/Image':
      currentRoute = Image; break;
    case '/Input':
      currentRoute = Input; break;
    case '/Item':
      currentRoute = Item; break;
    case '/Label':
      currentRoute = Label; break;
    case '/List':
      currentRoute = List; break;
    case '/Loader':
      currentRoute = Loader; break;
    case '/Menu':
      currentRoute = Menu; break;
    case '/Menu_fixed':
      currentRoute = Menu_fixed; break;
    case '/Menu_fixed_vertical':
      currentRoute = Menu_fixed_vertical; break;
    case '/Message':
      currentRoute = Message; break;
    case '/Modal':
      currentRoute = Modal; break;
    case '/Nag':
      currentRoute = Nag; break;
    case '/Placeholder':
      currentRoute = Placeholder; break;
    case '/Popup':
      currentRoute = Popup; break;
    case '/Progress':
      currentRoute = Progress; break;
    case '/Reveal':
      currentRoute = Reveal; break;
    case '/Rail':
      currentRoute = Rail; break;
    case '/Rating':
      currentRoute = Rating; break;
    case '/Segment':
      currentRoute = Segment; break;
    case '/Shape':
      currentRoute = Shape; break;
    case '/Sidebar':
      currentRoute = Sidebar; break;
    case '/Sidebar':
      currentRoute = Sidebar_outer; break;
    case '/Slider':
      currentRoute = Slider; break;
    case '/Statistic':
      currentRoute = Statistic; break;
    case '/Step':
      currentRoute = Step; break;
    case '/Sticky':
      currentRoute = Sticky; break;
    case '/Sticky_outer':
      currentRoute = Sticky_outer; break;
    case '/Tab':
      currentRoute = Tab; break;
    case '/Table':
      currentRoute = Table; break;
    case '/Test':
      currentRoute = Test; break;
    case '/Text':
      currentRoute = Text; break;
    case '/Toast':
      currentRoute = Toast; break;
    case '/Transition':
      currentRoute = Transition; break;
    default:
      break;
      // currentRoute = NotFound;
  }
</script>

<svelte:component this={currentRoute} />