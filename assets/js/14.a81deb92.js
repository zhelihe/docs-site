(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{206:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"virtual-desktop-and-window-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#virtual-desktop-and-window-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Virtual Desktop and Window management")]),i("p",[e._v("The Virtual Desktop is a web component of Zowe, which is an implementation of MVDWindowManagement, the interface that is used to create a window manager.")]),i("p",[e._v("The code for this software can be found in the "),i("code",[e._v("lux-app-manager")]),e._v(" repository.")]),i("p",[e._v("The interface for building an alternative window manager can be found in the "),i("code",[e._v("zlux-platform")]),e._v(" repository.")]),i("p",[e._v('Window Management acts upon Windows, which are visualizations of an instance of an application. Applications are plug-ins of type "application", and therefore the Virtual Desktop operates around a collection of plug-ins.')]),i("p",[i("strong",[e._v("NOTE: Other objects and frameworks that can be utilized by applications, but not related to Window Management, such as application-to-application communication, Logging, URI lookup, and Auth are not described here.")])]),i("h1",{attrs:{id:"loading-and-presenting-applications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-presenting-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Loading and presenting applications")]),i("p",[e._v("Upon loading the Desktop, a GET call is made to "),i("code",[e._v("/plugins?type=application")]),e._v("\nThis returns a JSON list of all of the applications that are present on the server, which can be accessed by the user. Applications can be composed of dataservices, web content, or both. Applications that have web content are presented in the Virtual Desktop UI.")]),i("p",[e._v("The Virtual Desktop presents a taskbar at the bottom of the page, where it presents each applications as an icon with a description. The icon used, and description presented are based off of the applications's PluginDefinition's webContent attributes.")]),i("h1",{attrs:{id:"plug-in-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Plug-in management")]),i("p",[e._v("Applications can gain insight into the environment they have been spawned in through the Plug-in Manager. Use the Plug-in Manager to check whether a plug-in is present before acting upon the existence of the plug-in. When the Virtual Desktop is running, you can access the Plug-in Manager through "),i("code",[e._v("RocketMVD.PluginManager")])]),i("p",[e._v("The following are functions you can use on the Plug-in Manager:")]),i("ul",[i("li",[e._v("getPlugin(pluginID: string)\n"),i("ul",[i("li",[e._v("Accepts a string of a unique plugin ID, and returns the Plug-in Definition Object (DesktopPluginDefinition) associated with it, if found.")])])])]),i("h1",{attrs:{id:"application-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-management","aria-hidden":"true"}},[e._v("#")]),e._v(" Application management")]),i("p",[e._v("Applications within a Window Manager are created and acted upon in part by an Application Manager. The Application Manager can facilitate communication between applications, but formal application-to-application communication should be performed by calls to the Dispatcher. The Application Manager is not normally accessible directly by applications, instead used by the Window Manager.")]),i("p",[e._v("The following are functions of an Application Manager:")]),i("ul",[i("li",[i("p",[e._v("spawnApplication(plugin: DesktopPluginDefinition, launchMetadata: any): Promise<MVDHosting.InstanceId>;")]),i("ul",[i("li",[e._v("Opens an application instance into the Window Manager, with or without context on what actions it should perform after creation.")])])]),i("li",[i("p",[e._v("killApplication(plugin:ZLUX.Plugin, appId:MVDHosting.InstanceId): void;")]),i("ul",[i("li",[e._v("Removes an application instance from the Window Manager.")])])]),i("li",[i("p",[e._v("showApplicationWindow(plugin: DesktopPluginDefinitionImpl): void;")]),i("ul",[i("li",[e._v("Makes an open application instance visible within the Window Manager.")])])]),i("li",[i("p",[e._v("isApplicationRunning(plugin: DesktopPluginDefinitionImpl): boolean;")]),i("ul",[i("li",[e._v("Determines if instances of the application are open in the Window Manager.")])])])]),i("h1",{attrs:{id:"windows-and-viewports"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-and-viewports","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows and Viewports")]),i("p",[e._v("When a user clicks on an application's icon on the taskbar, an instance of the application is started and presented within a Viewport, which is encapsulated in a Window within the Desktop.")]),i("p",[e._v("Every instance of an application's web content within Zowe is given context and can listen on events about the Viewport and Window it exists within, regardless of whether the Window Manager implementation uses these constructs visually. It is possible to create a Window Manager that only displays one application at a time, or to have a drawer-and-panel UI rather than a true windowed UI.")]),i("p",[e._v("When the Window is created, the application's web content is encapsulated dependant upon its framework type. The following are valid framework types:")]),i("ul",[i("li",[i("p",[e._v('"angular2": The web content is written in Angular, and packaged with Webpack. Application framework objects are given through @injectables and imports.')])]),i("li",[i("p",[e._v('"iframe": The web content can be written using any framework, but is included through an iframe tag. Applicationa within an iframe can access framework objects through '),i("code",[e._v("parent.RocketMVD")]),e._v(" and callbacks.")])])]),i("p",[e._v("In the case of the Virtual Desktop, this framework-specific wrapping is handled by the Plug-in Manager.")]),i("h1",{attrs:{id:"viewport-manager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#viewport-manager","aria-hidden":"true"}},[e._v("#")]),e._v(" Viewport Manager")]),i("p",[e._v("Viewports encapsulate an instance of an application's web content, but otherwise do not add to the UI (they do not present chrome as a Window does).\nEach instance of an application is associated with a viewport, and operations to act upon a particular application instance should be done by specifying a viewport for an application, to differentiate which instance is the target of an action. Actions performed against viewports should be performed through the Viewport Manager.")]),i("p",[e._v("The following are functions of the Viewport Manager:")]),i("ul",[i("li",[i("p",[e._v("createViewport(providers: ResolvedReflectiveProvider[]): MVDHosting.ViewportId;")]),i("ul",[i("li",[e._v("Creates a viewport into which you can embed an application's webcontent.")])])]),i("li",[i("p",[e._v("registerViewport(viewportId: MVDHosting.ViewportId, instanceId: MVDHosting.InstanceId): void;")]),i("ul",[i("li",[e._v("Registers a previously created viewport to an application instance.")])])]),i("li",[i("p",[e._v("destroyViewport(viewportId: MVDHosting.ViewportId): void;")]),i("ul",[i("li",[e._v("Removes a viewport from the Window Manager.")])])]),i("li",[i("p",[e._v("getApplicationInstanceId(viewportId: MVDHosting.ViewportId): MVDHosting.InstanceId | null;")]),i("ul",[i("li",[e._v("Returns the ID of an application's instance from within a viewport in the Window Manager.")])])])]),i("h1",{attrs:{id:"injection-manager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#injection-manager","aria-hidden":"true"}},[e._v("#")]),e._v(" Injection Manager")]),i("p",[e._v("When Angular applications are created, they can utilize injectables to be informed of when an action happens. iframe applications indirectly benefit from some of these hooks due to the wrapper acting upon them, but Angular applications have direct access to these.")]),i("p",[e._v("An application can utilize the following injectables:")]),i("h2",{attrs:{id:"plugin-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plugin-definition","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin Definition")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.PLUGIN_DEFINITION) private pluginDefinition: ZLUX.ContainerPluginDefinition")])]),i("p",[e._v("Provides the Plug-in Definition associated with this application. It can be used to gain some context about the application and can also be used by the application with other application framework objects to perform a contextual action.")]),i("h2",{attrs:{id:"logger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[e._v("#")]),e._v(" Logger")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.LOGGER) private logger: ZLUX.ComponentLogger")])]),i("p",[e._v("Provides a logger that is named after the application's Plug-in Definition ID.")]),i("h2",{attrs:{id:"launch-metadata"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#launch-metadata","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch Metadata")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.LAUNCH_METADATA) private launchMetadata: any")])]),i("p",[e._v("If present, this variable requests the application instance to initialize with some context, rather than the default view.")]),i("h2",{attrs:{id:"viewport-events"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#viewport-events","aria-hidden":"true"}},[e._v("#")]),e._v(" Viewport Events")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.VIEWPORT_EVENTS) private viewportEvents: Angular2PluginViewportEvents")])]),i("p",[e._v("Presents hooks that can be subscribed to for event listening. Events include:")]),i("ul",[i("li",[e._v("resized: Subject<{width: number, height: number}>\n"),i("ul",[i("li",[e._v("Starts when the viewport's size has changed.")])])])]),i("h2",{attrs:{id:"window-events"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#window-events","aria-hidden":"true"}},[e._v("#")]),e._v(" Window Events")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions")])]),i("p",[e._v("Presents hooks that can be subscribed to for event listening. Events include the following:")]),i("ul",[i("li",[i("p",[e._v("maximized: Subject"),i("code",[e._v("<void>")])]),i("ul",[i("li",[e._v("Starts when the Window has been maximized.")])])]),i("li",[i("p",[e._v("minimized: Subject"),i("code",[e._v("<void>")])]),i("ul",[i("li",[e._v("Starts when the Window has been minimized.")])])]),i("li",[i("p",[e._v("restored: Subject"),i("code",[e._v("<void>")])]),i("ul",[i("li",[e._v("Starts when the Window has been restored from a minimized state.")])])]),i("li",[i("p",[e._v("moved: Subject<{top: number, left: number}>")]),i("ul",[i("li",[e._v("Starts when the Window has been been moved.")])])]),i("li",[i("p",[e._v("resized: Subject<{width: number, height: number}>")]),i("ul",[i("li",[e._v("Starts when the Window has been resized.")])])]),i("li",[i("p",[e._v("titleChanged: Subject"),i("code",[e._v("<string>")])]),i("ul",[i("li",[e._v("Starts when the Window's title has changed.")])])])]),i("h2",{attrs:{id:"window-actions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#window-actions","aria-hidden":"true"}},[e._v("#")]),e._v(" Window Actions")]),i("p",[i("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions")])]),i("p",[e._v("An application can request actions to be performed on the Window through the following:")]),i("ul",[i("li",[i("p",[e._v("close(): void")]),i("ul",[i("li",[e._v("Closes the Window of the application instance.")])])]),i("li",[i("p",[e._v("maximize(): void")]),i("ul",[i("li",[e._v("Maximizes the Window of the application instance.")])])]),i("li",[i("p",[e._v("minimize(): void")]),i("ul",[i("li",[e._v("Minimizes the Window of the application instance.")])])]),i("li",[i("p",[e._v("restore(): void")]),i("ul",[i("li",[e._v("Restores the Window of the application instance from a minimized state.")])])]),i("li",[i("p",[e._v("setTitle(title: string):void")]),i("ul",[i("li",[e._v("Sets the title of the Window.")])])]),i("li",[i("p",[e._v("setPosition(pos: {top: number, left: number, width: number, height: number}): void")]),i("ul",[i("li",[e._v("Sets the position of the Window on the page and the size of the window.")])])]),i("li",[i("p",[e._v("spawnContextMenu(xPos: number, yPos: number, items: ContextMenuItem[]): void")]),i("ul",[i("li",[e._v("Opens a context menu on the application instance.")])])]),i("li",[i("p",[e._v("registerCloseHandler"),i("code",[e._v("(handler: () => Promise<void>)")]),e._v(": void")]),i("ul",[i("li",[e._v("Registers a handler, which is called when the Window and application instance are closed.")])])])])])}],!1,null,null,null);t.default=a.exports}}]);