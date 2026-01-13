// ******************************************************************************************************************************************************
// * TypeScript interfaces for svelte-fomantic-ui
// * By Dr. Roy C. Davies, roy.c.davies@ieee.org
// ******************************************************************************************************************************************************

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Callback System Types
// The callback system allows Svelte components to receive callbacks from Fomantic UI jQuery modules
// while maintaining proper context.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Parameters for a callback function.
 * Keys represent parameter names that will be passed from Fomantic UI.
 * The special `_` key contains the handler function that processes the callback data.
 *
 * @example
 * ```typescript
 * const onRateParams: CallbackParams = {
 *   rating: null,      // Will receive the rating value
 *   name: 'myRating',  // Static value passed through
 *   _: (data) => {     // Handler function
 *     console.log(data.rating, data.name);
 *   }
 * };
 * ```
 */
export interface CallbackParams {
  /** Handler function called when the callback fires */
  _: (data: Record<string, any>) => void;
  /** Additional parameters - null values are filled by Fomantic UI, other values are passed through */
  [paramName: string]: ((data: Record<string, any>) => void) | any;
}

/**
 * Collection of callbacks keyed by Fomantic UI callback name.
 *
 * @example
 * ```typescript
 * const callbacks: Callbacks = {
 *   onRate: {
 *     rating: null,
 *     _: (data) => console.log(data.rating)
 *   },
 *   onChange: {
 *     value: null,
 *     _: (data) => console.log(data.value)
 *   }
 * };
 * ```
 */
export interface Callbacks {
  [callbackName: string]: CallbackParams;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Module Settings Types
// These interfaces define the settings objects for various Fomantic UI modules.
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Base settings interface that all module settings extend.
 * Allows arbitrary additional properties for forward compatibility.
 */
export interface BaseModuleSettings {
  /** Suppress console logging from the module */
  silent?: boolean;
  /** Enable debug mode */
  debug?: boolean;
  /** Enable verbose logging */
  verbose?: boolean;
  /** Performance logging */
  performance?: boolean;
  /** Allow arbitrary additional settings */
  [key: string]: any;
}

/**
 * Settings for the Slider module
 */
export interface SliderSettings extends BaseModuleSettings {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Starting value (for range sliders) */
  start?: number;
  /** Ending value (for range sliders) */
  end?: number;
  /** Step increment */
  step?: number;
  /** Smooth sliding */
  smooth?: boolean;
  /** Auto-adjust step based on visible labels */
  autoAdjustLabels?: boolean;
  /** Position of labels */
  labelType?: 'number' | 'letter';
  /** Show labels below the slider */
  showLabelTicks?: boolean;
}

/**
 * Settings for the Rating module
 */
export interface RatingSettings extends BaseModuleSettings {
  /** Icon to use for rating */
  icon?: string;
  /** Initial rating value */
  initialRating?: number;
  /** Maximum rating value */
  maxRating?: number;
  /** Allow clearing the rating */
  clearable?: boolean | 'auto';
  /** Make rating interactive */
  interactive?: boolean;
}

/**
 * Dropdown value item
 */
export interface DropdownValue {
  /** Display name */
  name: string;
  /** Value to use when selected */
  value?: string;
  /** Type of item (e.g., 'header', 'divider') */
  type?: 'item' | 'header' | 'divider';
  /** Whether item is disabled */
  disabled?: boolean;
  /** Icon to display */
  icon?: string;
  /** Image to display */
  image?: string;
  /** Additional CSS class */
  class?: string;
}

/**
 * Settings for the Dropdown module
 */
export interface DropdownSettings extends BaseModuleSettings {
  /** Placeholder text */
  placeholder?: string;
  /** Values for the dropdown */
  values?: DropdownValue[];
  /** Collapse on actionable selection */
  collapseOnActionable?: boolean;
  /** Ignore diacritics when searching */
  ignoreDiacritics?: boolean;
  /** Sort select options */
  sortSelect?: boolean | 'natural';
  /** Full text search mode */
  fullTextSearch?: boolean | 'exact';
  /** Action to perform on selection */
  action?: 'activate' | 'select' | 'combo' | 'nothing' | 'hide' | ((text: string, value: string, element: HTMLElement) => void);
  /** Allow additions to dropdown */
  allowAdditions?: boolean;
  /** Clear value on escape */
  clearable?: boolean;
  /** Match against value instead of text */
  match?: 'both' | 'value' | 'text';
  /** Minimum characters for search */
  minCharacters?: number;
  /** Maximum selections (for multi-select) */
  maxSelections?: number | false;
  /** Show on focus */
  showOnFocus?: boolean;
  /** Allow re-selection of already selected items */
  allowReselection?: boolean;
  /** Keep on screen */
  keepOnScreen?: boolean;
  /** Force selection on blur */
  forceSelection?: boolean;
  /** Allow category selection */
  allowCategorySelection?: boolean;
}

/**
 * Settings for the Popup module
 */
export interface PopupSettings extends BaseModuleSettings {
  /** Popup content (if not using slot) */
  content?: string;
  /** Popup title */
  title?: string;
  /** HTML content */
  html?: string;
  /** Position of popup */
  position?: 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right' | 'right center' | 'left center';
  /** Delay before showing/hiding */
  delay?: {
    show?: number;
    hide?: number;
  };
  /** Inline popup (append to element) */
  inline?: boolean;
  /** Create popup on init */
  hoverable?: boolean;
  /** Close on document click */
  closable?: boolean;
  /** Add pointer arrow */
  addTouchEvents?: boolean;
  /** Hide on scroll */
  hideOnScroll?: boolean | 'auto';
  /** Target element */
  target?: string | HTMLElement | false;
  /** Popup variation */
  variation?: string;
  /** Prefer opposite position if constrained */
  prefer?: 'adjacent' | 'opposite';
  /** Last resort position */
  lastResort?: string | boolean;
  /** Offset from position */
  distanceAway?: number;
  /** Offset perpendicular to position */
  offset?: number;
  /** Transition animation */
  transition?: string;
  /** Transition duration */
  duration?: number;
}

/**
 * Settings for the Calendar module
 */
export interface CalendarSettings extends BaseModuleSettings {
  /** Calendar type */
  type?: 'datetime' | 'date' | 'time' | 'month' | 'year';
  /** ID of start calendar (for date ranges) */
  startCalendar?: string | HTMLElement;
  /** ID of end calendar (for date ranges) */
  endCalendar?: string | HTMLElement;
  /** First day of week (0 = Sunday) */
  firstDayOfWeek?: number;
  /** Disable certain dates */
  disabledDates?: Date[];
  /** Enable only certain dates */
  enabledDates?: Date[];
  /** Today button */
  today?: boolean;
  /** Close after selection */
  closable?: boolean;
  /** Date format */
  formatter?: {
    date?: (date: Date, settings: CalendarSettings) => string;
    time?: (date: Date, settings: CalendarSettings, forCalendar: boolean) => string;
  };
  /** Minimum date selectable */
  minDate?: Date;
  /** Maximum date selectable */
  maxDate?: Date;
  /** Show am/pm for time */
  ampm?: boolean;
  /** Time display mode */
  disableMinute?: boolean;
  /** Initial date */
  initialDate?: Date;
  /** Start mode */
  startMode?: 'year' | 'month' | 'day' | 'hour' | 'minute';
}

/**
 * Settings for the Modal module
 */
export interface ModalSettings extends BaseModuleSettings {
  /** Allow closing by clicking dimmer */
  closable?: boolean;
  /** Allow multiple modals */
  allowMultiple?: boolean;
  /** Detach modal from DOM when hidden */
  detachable?: boolean;
  /** Use CSS blurring */
  blurring?: boolean;
  /** Center modal vertically */
  centered?: boolean;
  /** Auto-focus first input */
  autofocus?: boolean;
  /** Restore focus on close */
  restoreFocus?: boolean;
  /** Dimmer settings */
  dimmerSettings?: {
    closable?: boolean;
    useCSS?: boolean;
  };
  /** Transition animation */
  transition?: string;
  /** Transition duration */
  duration?: number;
  /** Inverted colors */
  inverted?: boolean;
}

/**
 * Settings for the Accordion module
 */
export interface AccordionSettings extends BaseModuleSettings {
  /** Only one section open at a time */
  exclusive?: boolean;
  /** Close nested accordions on close */
  closeNested?: boolean;
  /** Allow collapsing all sections */
  collapsible?: boolean;
  /** Animation duration */
  duration?: number;
  /** Animation easing */
  easing?: string;
  /** Observe DOM changes */
  observeChanges?: boolean;
}

/**
 * Settings for the Sidebar module
 */
export interface SidebarSettings extends BaseModuleSettings {
  /** Show dimmer */
  dimPage?: boolean;
  /** Scrollable content */
  scrollLock?: boolean;
  /** Return to original scroll position */
  returnScroll?: boolean;
  /** Sidebar can be closed by clicking outside */
  closable?: boolean;
  /** Transition animation */
  transition?: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide along' | 'slide out';
  /** Mobile transition */
  mobileTransition?: string;
  /** Exclusive visibility */
  exclusive?: boolean;
  /** Use CSS transforms */
  useLegacy?: boolean;
  /** Animation duration */
  duration?: number;
  /** Easing function */
  easing?: string;
}

/**
 * Settings for the Progress module
 */
export interface ProgressSettings extends BaseModuleSettings {
  /** Auto-success on 100% */
  autoSuccess?: boolean;
  /** Show activity indicator */
  showActivity?: boolean;
  /** Limit values to 0-100 */
  limitValues?: boolean;
  /** Display label */
  label?: 'percent' | 'ratio' | false;
  /** Random increment */
  random?: {
    min?: number;
    max?: number;
  };
  /** Animation duration */
  duration?: number;
  /** Update interval */
  updateInterval?: number | 'auto';
  /** Decimal precision */
  precision?: number;
  /** Total value (for ratio) */
  total?: number | false;
  /** Current value */
  value?: number | false;
}

/**
 * Settings for the Embed module
 */
export interface EmbedSettings extends BaseModuleSettings {
  /** Auto-play embedded content */
  autoplay?: boolean | 'auto';
  /** Show brand/icon */
  brandedUI?: boolean;
  /** Video color theme */
  color?: string;
  /** HD quality */
  hd?: boolean;
  /** Video ID */
  id?: string | false;
  /** Video source */
  source?: string | false;
  /** Custom URL */
  url?: string | false;
}

/**
 * Settings for the Shape module
 */
export interface ShapeSettings extends BaseModuleSettings {
  /** Animation duration */
  duration?: number;
  /** Animation width */
  width?: 'auto' | 'initial' | 'next' | number;
  /** Animation height */
  height?: 'auto' | 'initial' | 'next' | number;
}

/**
 * Settings for the Sticky module
 */
export interface StickySettings extends BaseModuleSettings {
  /** Whether to push content below when sticky */
  pushing?: boolean;
  /** Context selector */
  context?: string | HTMLElement | false;
  /** Scroll context */
  scrollContext?: string | HTMLElement | typeof window;
  /** Offset from top */
  offset?: number;
  /** Bottom offset */
  bottomOffset?: number;
  /** Observe DOM changes */
  observeChanges?: boolean;
}

/**
 * Settings for the Toast module (notification)
 */
export interface ToastSettings extends BaseModuleSettings {
  /** Toast title */
  title?: string;
  /** Toast message */
  message?: string;
  /** Display time in ms (0 = forever) */
  displayTime?: number | 'auto';
  /** Show close icon */
  closeIcon?: boolean;
  /** Toast class/type */
  class?: string;
  /** Toast position */
  position?: 'top right' | 'top center' | 'top left' | 'bottom right' | 'bottom center' | 'bottom left' | 'top attached' | 'bottom attached';
  /** Show progress bar */
  showProgress?: boolean | 'top' | 'bottom';
  /** Progress bar color */
  progressUp?: boolean;
  /** Transition animation */
  transition?: {
    showMethod?: string;
    showDuration?: number;
    hideMethod?: string;
    hideDuration?: number;
  };
  /** Actions/buttons */
  actions?: Array<{
    text: string;
    class?: string;
    icon?: string;
    click?: () => void;
  }>;
}

/**
 * Settings for the Flyout module
 */
export interface FlyoutSettings extends BaseModuleSettings {
  /** Flyout context */
  context?: string | HTMLElement;
  /** Close on escape key */
  keyboardShortcuts?: boolean;
  /** Close on outside click */
  closable?: boolean;
  /** Show dimmer */
  dimPage?: boolean;
  /** Animation direction */
  direction?: 'left' | 'right' | 'top' | 'bottom';
  /** Animation duration */
  duration?: number;
}

/**
 * Settings for the Nag module
 */
export interface NagSettings extends BaseModuleSettings {
  /** Cookie name for dismiss */
  key?: string | false;
  /** Cookie value */
  value?: string | false;
  /** Expiration time */
  expirationDays?: number;
  /** Storage type */
  storageMethod?: 'cookie' | 'localstorage' | 'sessionstorage';
  /** Animation duration */
  duration?: number;
  /** Animation easing */
  easing?: string;
}

/**
 * Settings for the Dimmer module
 */
export interface DimmerSettings extends BaseModuleSettings {
  /** Dim on element hover */
  on?: 'hover' | 'click' | false;
  /** Close on click */
  closable?: boolean | 'auto';
  /** Use CSS animations */
  useCSS?: boolean;
  /** Animation duration */
  duration?: {
    show?: number;
    hide?: number;
  };
  /** Transition animation */
  transition?: string;
}

/**
 * Settings for the Tab module
 */
export interface TabSettings extends BaseModuleSettings {
  /** Auto-activate first tab */
  auto?: boolean;
  /** History management */
  history?: boolean;
  /** History type */
  historyType?: 'hash' | 'state';
  /** Path to use for history */
  path?: string | false;
  /** Cache remote content */
  cache?: boolean;
  /** Ignore first load */
  ignoreFirstLoad?: boolean;
  /** Evaluate scripts in content */
  evaluateScripts?: 'once' | boolean;
  /** Always refresh content */
  alwaysRefresh?: boolean;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Union type for all module settings
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Union of all module settings types
 */
export type ModuleSettings =
  | SliderSettings
  | RatingSettings
  | DropdownSettings
  | PopupSettings
  | CalendarSettings
  | ModalSettings
  | AccordionSettings
  | SidebarSettings
  | ProgressSettings
  | EmbedSettings
  | ShapeSettings
  | StickySettings
  | ToastSettings
  | FlyoutSettings
  | NagSettings
  | DimmerSettings
  | TabSettings
  | BaseModuleSettings;

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Behavior function types
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Behavior command settings
 */
export interface BehaviorSettings {
  /** Module type (e.g., 'modal', 'dropdown') */
  type: string;
  /** Behavior command (e.g., 'show', 'hide', 'toggle') */
  behavior?: string;
  /** Settings or value to pass */
  settings?: any;
}
