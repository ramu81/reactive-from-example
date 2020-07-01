# reactive-from-example
PATH=.;c:\softwares\node-v12;c:\using-angular9\node_modules\.bin;

	Angular is a platform and framework for building single-page client applications using 
HTML and TypeScript. Angular is written in TypeScript. It implements core and optional 
functionality as a set of TypeScript libraries that you import into your apps.


	The architecture of an Angular application relies on certain fundamental concepts. 
The basic building blocks are NgModules, which provide a compilation context for components.
NgModules collect related code into functional sets; an Angular app is defined by a set of 
NgModules. An app always has at least a root module that enables bootstrapping, and 
typically has many more feature modules.

	Components define views, which are sets of screen elements that Angular can choose 
among and modify according to your program logic and data.

	Components use services, which provide specific functionality not directly related to 
views. Service providers can be injected into components as dependencies, making your code
modular, reusable, and efficient.

	Both components and services are simply classes, with decorators that mark their type 
and provide metadata that tells Angular how to use them.

	The metadata for a component class associates it with a template that defines a view. 
A template combines ordinary HTML with Angular directives and binding markup that allow 
Angular to modify the HTML before rendering it for display.

	The router provides sophisticated in-browser navigational capabilities.
	
	An app's components typically define many views, arranged hierarchically, with the help 
of Router service,we can define navigation paths among views.

Modules :

	An NgModule declares a compilation context for a set of components that is dedicated
to an application domain, a workflow, or a closely related set of capabilities. 
Angular NgModules differ from and complement JavaScript (ES2015) modules.

	Every Angular app has a root module, conventionally named AppModule, which provides 
the bootstrap mechanism that launches the application. An app typically contains many 
functional modules.

	Like JavaScript modules, NgModules can import functionality from other NgModules, 
and allow their own functionality to be exported and used by other NgModules. 


Components

	Every Angular application has at least one component, the root component that connects 
a component hierarchy with the page document object model (DOM). Each component defines 
a class that contains application data and logic, and is associated with an HTML template 
that defines a view to be displayed in a target environment.

	Decorators are functions that modify JavaScript classes. Angular defines a number 
of decorators that attach specific kinds of metadata to classes, so that the system knows 
what those classes mean and how they should work.

	The @Component() decorator identifies the class immediately below it as a component, 
and provides the template and related component-specific metadata.

Templates, directives, and data binding

	A template combines HTML with Angular markup that can modify HTML elements before 
they are displayed. Template directives provide program logic, and binding markup connects 
your application data and the DOM. 

There are two types of data binding:

	Event binding lets your app respond to user input in the target environment by updating 
your application data.
	Property binding lets you interpolate values that are computed from your application 
data into the HTML.

What's a Decorator?

	Decorators make it possible to annotate and modify classes and properties at design time.

	Decorators restore the ability to run code at design time, while maintaining 
a declarative syntax

	Before a view is displayed, Angular evaluates the directives and resolves the binding 
syntax in the template to modify the HTML elements and the DOM, according to your program 
data and logic. 

	Angular supports two-way data binding, meaning that changes in the DOM, such as user 
choices, are also reflected in your program data.

	Angular provides predefined pipes for common transformations, and you can also 
define your own pipes.

	Your templates can use pipes to improve the user experience by transforming values 
for display. For example, use pipes to display dates and currency values that are 
appropriate for a user's locale.

Services and dependency injection

	A service class definition is immediately preceded by the @Injectable() decorator. 
The decorator provides the metadata that allows other providers to be injected as 
dependencies into your class.

	For data or logic that isn't associated with a specific view, and that you want to 
share across components, you create a service class.

	Dependency injection (DI) lets you keep your component classes lean and efficient. 
They don't fetch data from the server, validate user input, or log directly to the console;
they delegate such tasks to services.

Routing

	The Angular Router NgModule provides a service that lets you define a navigation path 
among the different application states and view hierarchies in your app. It is modeled on 
the familiar browser navigation conventions:
	
	Enter a URL in the address bar and the browser navigates to a corresponding page.

	Click links on the page and the browser navigates to a new page.

	Click the browser's back and forward buttons and the browser navigates backward and
	forward through the history of pages you've seen.
	
	The router maps URL-like paths to views instead of pages. When a user performs an action, 
such as clicking a link, that would load a new page in the browser, the router intercepts 
the browser's behavior, and shows or hides view hierarchies.
	
	If the router determines that the current application state requires particular 
functionality, and the module that defines it hasn't been loaded, the router can lazy-load 
the module on demand.

	The router interprets a link URL according to your app's view navigation rules and 
data state. You can navigate to new views when the user clicks a button. The router logs 
activity in the browser's history, so the back and forward buttons work as well.

	To define navigation rules, you associate navigation paths with your components. 
A path uses a URL-like syntax that integrates your program data, in much the same way that
template syntax integrates your views with your program data. You can then apply program 
logic to choose which views to show or to hide, in response to user input and your own 
access rules.

	Together, a component and template define an Angular view.

	A decorator on a component class adds the metadata, including a pointer to the
associated template.

	Directives and binding markup in a component's template modify views based on program 
data and logic.

	The dependency injector provides services to a component, such as the router service 
that lets you define navigation among views.


NgModule metadata

	An NgModule is defined by a class decorated with @NgModule(). 
The @NgModule() decorator is a function that takes a single metadata object, whose 
properties describe the module. The most important properties are as follows.

	declarations: The components, directives, and pipes that belong to this NgModule.

	exports: The subset of declarations that should be visible and usable in the component 
templates of other NgModules.

	imports: Other modules whose exported classes are needed by component templates 
declared in this NgModule.

	providers: Creators of services that this NgModule contributes to the global collection
of services; they become accessible in all parts of the app. 

	bootstrap: The main application view, called the root component, which hosts all 
other app views. Only the root NgModule should set the bootstrap property.

	NgModules provide a compilation context for their components. A root NgModule always 
has a root component that is created during bootstrap, but any NgModule can include any 
number of additional components, which can be loaded through the router or created through 
the template. The components that belong to an NgModule share a compilation context.

	A view hierarchy can mix views defined in components that belong to different NgModules.
	
	A component can contain a view hierarchy, which allows you to define arbitrarily 
complex areas of the screen that can be created, modified, and destroyed as a unit. 

	When you create a component, it's associated directly with a single view, called the 
host view. The host view can be the root of a view hierarchy, which can contain embedded 
views, which are in turn the host views of other components. Those components can be in the
same NgModule, or can be imported from other NgModules. Views in the tree can be nested to 
any depth.

	ES6 modules are stored in files. There is exactly one module per file and one file 
per module.

Introduction to components and templates :

	A component controls a patch of screen called a view. 
	
Component metadata :

	The @Component decorator identifies the class immediately below it as a component class, 
and specifies its metadata.

	The metadata for a component tells Angular where to get the major building blocks that 
it needs to create and present the component and its view. In particular, it associates 
a template with the component, either directly with inline code, or by reference. 
Together, the component and its template describe a view.

	selector: A CSS selector that tells Angular to create and insert an instance of this 
component wherever it finds the corresponding tag in template HTML.

Data binding

	Without a framework, you would be responsible for pushing data values into the HTML 
controls and turning user responses into actions and value updates. Writing such push 
and pull logic by hand is tedious, error-prone, and a nightmare to read, as any experienced
front-end JavaScript programmer can attest.

	Two-way data binding (used mainly in template-driven forms) combines property and event
binding in a single notation.
	
	Angular supports two-way data binding, a mechanism for coordinating the parts of a 
template with the parts of a component. Add binding markup to the template HTML to tell 
Angular how to connect both sides.

	In two-way binding, a data property value flows to the input box from the component 
as wwith property binding. The user's changes also flow back to the component, resetting 
the property to the latest value, as with event binding.
	
		Data binding plays an important role in communication between a template and its 
	component, and is also important for communication between parent and child components.
	
Pipes

	Angular pipes let you declare display-value transformations in your template HTML. 
A class with the @Pipe decorator defines a function that transforms input values to output
values for display in a view.

	To specify a value transformation in an HTML template, use the pipe operator (|).
	{{interpolated_value | pipe_name}}

	A directive is a class with a @Directive() decorator.
	
	Angular templates are dynamic. When Angular renders them, it transforms the DOM 
according to the instructions given by directives.

	A component is technically a directive. However, components are so distinctive and 
central to Angular applications that Angular defines the @Component() decorator, which 
extends the @Directive() decorator with template-oriented features.
	
Structural directives

	Structural directives alter layout by adding, removing, and replacing elements in 
the DOM. The example template uses two built-in structural directives to add application
logic to how the view is rendered.

	*ngFor is an iterative;
	*ngIf is a conditional;
	
Attribute directives

	Attribute directives alter the appearance or behavior of an existing element. In 
templates they look like regular HTML attributes, hence the name.

	An Attribute directive changes the appearance or behavior of a DOM element.

There are three kinds of directives in Angular:

	Components—directives with a template.
	Structural directives—change the DOM layout by adding and removing DOM elements.
	Attribute directives—change the appearance or behavior of an element, component, or 
	another directive.
	
	Structural directives are responsible for HTML layout. They shape or reshape the 
DOM's structure, typically by adding, removing, or manipulating elements.

	Structural directives are easy to recognize. An asterisk (*) precedes the directive 
attribute name as in this example.

	A directive class is spelled in UpperCamelCase (NgIf). A directive's attribute name 
is spelled in lowerCamelCase (ngIf).

Introduction to services and dependency injection

	A service is typically a class with a narrow, well-defined purpose. It should do 
something specific and do it well.

	Angular distinguishes components from services to increase modularity and reusability. 
By separating a component's view-related functionality from other kinds of processing, you 
can make your component classes lean and efficient.

	Ideally, a component's job is to enable the user experience and nothing more. 
A component should present properties and methods for data binding, in order to mediate 
between the view and the application logic.

	A component can delegate certain tasks to services, such as fetching data from the 
server, validating user input, or logging directly to the console.

Dependency injection (DI) :

	DI is wired into the Angular framework and used everywhere to provide new components 
with the services or other things they need. Components consume services; that is, you can 
inject a service into a component, giving the component access to that service class.
	
	The injector is the main mechanism. Angular creates an application-wide injector for 
you during the bootstrap process, and additional injectors as needed. You don't have to 
create injectors.

	An injector creates dependencies, and maintains a container of dependency instances 
that it reuses if possible.

	A provider is an object that tells an injector how to obtain or create a dependency.
	
	For any dependency that you need in your app, you must register a provider with the 
app's injector, so that the injector can use the provider to create new instances. For a 
service, the provider is typically the service class itself.

Providing services

	You must register at least one provider of any service you are going to use. 
The provider can be part of the service's own metadata, making that service available everywhere, or you can register providers with specific modules or components. You register providers in the metadata of the service (in the @Injectable() decorator), or in the @NgModule() or @Component() metadata

Dependency injection in Angular

	Dependency injection (DI), is an important application design pattern. Angular has its 
own DI framework, which is typically used in the design of Angular applications to increase
their efficiency and modularity.

	The @Injectable() is an essential ingredient in every Angular service definition. 

	The bootstrapping process creates the component(s) listed in the bootstrap array and 
inserts each one into the browser DOM. Most applications have only one component tree and 
bootstrap a single root component.

	A provider tells an injector how to create the service. You must configure an injector 
with a provider before that injector can create a service.

	A provider can be the service class itself, so that the injector can use new to create 
an instance. You might also define more than one class to provide the same service in 
different ways, and configure different injectors with different providers.

	Injectors are inherited, which means that if a given injector can't resolve a 
dependency, it asks the parent injector to resolve it. 

	Services are singletons within the scope of an injector. That is, there is at most 
one instance of a service in a given injector.

	Angular DI has a hierarchical injection system, which means that nested injectors can 
create their own service instances. Angular regularly creates nested injectors. Whenever 
Angular creates a new instance of a component that has providers specified in @Component(), 
it also creates a new child injector for that instance. Similarly, when a new NgModule is 
lazy-loaded at run time, Angular can create an injector for it with its own providers.

	Child modules and component injectors are independent of each other, and create their 
own separate instances of the provided services. When Angular destroys an NgModule or 
component instance, it also destroys that injector and that injector's service instances.

	Designing a class with dependency injection makes the class easier to test. Listing 
dependencies as constructor parameters may be all you need to test application parts 
effectively.

In-app navigation: routing to views

	In a single-page app, you change what the user sees by showing or hiding portions of 
the display that correspond to particular components, rather than going out to the server 
to get a new page. As users perform application tasks, they need to move between the 
different views that you have defined. To implement this kind of navigation within the 
single page of your app, you use the Angular Router.

	To handle the navigation from one view to the next, you use the Angular router. 
The router enables navigation by interpreting a browser URL as an instruction to change 
the view.

Route order

	The order of routes is important because the Router uses a first-match wins strategy 
when matching routes, so more specific routes should be placed above less specific routes. 
List routes with a static path first, followed by an empty path route, which matches the 
default route. The wildcard route comes last because it matches every URL and the Router 
selects it only if no other routes match first.

Introduction to forms in Angular

	Applications use forms to enable users to log in, to update a profile, to enter 
sensitive information, and to perform many other data-entry tasks.

	Angular provides two different approaches to handling user input through forms: 
reactive and template-driven. Both capture user input events from the view, validate 
the user input, create a form model and data model to update, and provide a way to track 
changes.

	Reactive forms and template-driven forms process and manage form data differently. 
Each approach offers different advantages.

	Reactive forms provide direct, explicit access to the underlying forms object model. 
Compared to template-driven forms, they are more robust: they're more scalable, reusable, 
and testable. If forms are a key part of your application, or you're already using reactive 
patterns for building your application, use reactive forms.
	
	Template-driven forms rely on directives in the template to create and manipulate 
the underlying object model. They are useful for adding a simple form to an app, such as 
an email list signup form. They're easy to add to an app, but they don't scale as well as 
reactive forms. If you have very basic form requirements and logic that can be managed 
solely in the template, template-driven forms could be a good fit.
	
		Both reactive and template-driven forms track value changes between the form input
elements that users interact with and the form data in your component model. 

Common form foundation classes

	Both reactive and template-driven forms are built on the following base classes.

		FormControl tracks the value and validation status of an individual form control.

		FormGroup tracks the same values and status for a collection of form controls.	

		FormArray tracks the same values and status for an array of form controls.

		ControlValueAccessor creates a bridge between Angular FormControl instances 
		and native DOM elements.

Setup in reactive forms

	With reactive forms, you define the form model directly in the component class. 
The [formControl] directive links the explicitly created FormControl instance to a 
specific form element in the view, using an internal value accessor.

Data flow in forms

	When an application contains a form, Angular must keep the view in sync with the 
component model and the component model in sync with the view. As users change values 
and make selections through the view, the new values must be reflected in the data model. 
Similarly, when the program logic changes values in the data model, those values must be 
reflected in the view.

Data flow in reactive forms
	
	In reactive forms each form element in the view is directly linked to the form model
(a FormControl instance). Updates from the view to the model and from the model to the 
view are synchronous and do not depend on how the UI is rendered.

The view-to-model diagram shows how data flows when an input field's value is changed 
from the view through the following steps.

	The user types a value into the input element.
	
	The form input element emits an "input" event with the latest value.
	
	The control value accessor listening for events on the form input element immediately 
	relays the new value to the FormControl instance.

	The FormControl instance emits the new value through the valueChanges observable.

	Any subscribers to the valueChanges observable receive the new value.

The model-to-view diagram shows how a programmatic change to the model is propagated to 
the view through the following steps.

	The user calls the favoriteColorControl.setValue() method, which updates the 
	FormControl value.
	
	The FormControl instance emits the new value through the valueChanges observable.
	
	Any subscribers to the valueChanges observable receive the new value.

	The control value accessor on the form input element updates the element with the 
	new value.
	
Data flow in template-driven forms
	
	In template-driven forms, each form element is linked to a directive that manages the 
form model internally.

	The view-to-model diagram shows how data flows when an input field's value is changed 
from the view through the following steps.

	The user types Blue into the input element.
	
	The input element emits an "input" event with the value Blue.

	The control value accessor attached to the input triggers the setValue() method on 
	the FormControl instance.
	
	The FormControl instance emits the new value through the valueChanges observable.
	
	Any subscribers to the valueChanges observable receive the new value.

	The control value accessor also calls the NgModel.viewToModelUpdate() method which 
	emits an ngModelChange event.

	Because the component template uses two-way data binding for the favoriteColor 
	property, the favoriteColor property in the component is updated to the value 
	emitted by the ngModelChange event (Blue).
	
The model-to-view diagram shows how data flows from model to view when the favoriteColor 
changes from Blue to Red, through the following steps

	The favoriteColor value is updated in the component.

	Change detection begins.

	During change detection, the ngOnChanges lifecycle hook is called on the NgModel 
	directive instance because the value of one of its inputs has changed.

	The ngOnChanges() method queues an async task to set the value for the internal 
	FormControl instance.

	Change detection completes.

	On the next tick, the task to set the FormControl instance value is executed.

	The FormControl instance emits the latest value through the valueChanges observable.

	Any subscribers to the valueChanges observable receive the new value.

	The control value accessor updates the form input element in the view with the latest 
	favoriteColor value.

Mutability of the data model

	Reactive forms keep the data model pure by providing it as an immutable data structure. 
Each time a change is triggered on the data model, the FormControl instance returns a new 
data model rather than updating the existing data model. This gives you the ability to 
track unique changes to the data model through the control's observable. 
Change detection is more efficient because it only needs to update on unique changes. 
Because data updates follow reactive patterns, you can integrate with observable operators 
to transform data.

	Template-driven forms rely on mutability with two-way data binding to update the data 
model in the component as changes are made in the template. Because there are no unique 
changes to track on the data model when using two-way data binding, change detection is 
less efficient at determining when updates are required.

	With reactive forms, the FormControl instance always returns a new value when the 
control's value is updated.

	With template-driven forms, the favorite color property is always modified to its 
new value.

	Validation is an integral part of managing any set of forms. Angular provides a set 
of built-in validators as well as the ability to create custom validators.

	Reactive forms define custom validators as functions that receive a control to validate.
	
	Template-driven forms are tied to template directives, and must provide custom validator
directives that wrap validation functions.

Testing

	Testing plays a large part in complex applications. A simpler testing strategy is 
useful when validating that your forms function correctly.

	Reactive forms provide a relatively easy testing strategy because they provide 
synchronous access to the form and data models, and they can be tested without rendering 
the UI. In these tests, status and data are queried and manipulated through the control 
without interacting with the change detection cycle.

Sync validators: 

	Synchronous functions that take a control instance and immediately return either a set 
of validation errors or null. You can pass these in as the second argument when you 
instantiate a FormControl.
	
	Eg : new FormControl(this.hero.power, Validators.required)

Cross-field validation:

	A cross-field validator is a custom validator that compares the values of different 
fields in a form and accepts or rejects them in combination.

	To add a validator to the FormGroup, pass the new validator in as the second argument 
on creation.

Creating asynchronous validators

	Asynchronous validators implement the AsyncValidatorFn and AsyncValidator interfaces. 
These are very similar to their synchronous counterparts, with the following differences.

	The validate() functions must return a Promise or an observable,
	
	The observable returned must be finite, meaning it must complete at some point. 
To convert an infinite observable into a finite one, pipe the observable through a 
filtering operator such as first, last, take, or takeUntil.

	Asynchronous validation happens after the synchronous validation, and is performed 
only if the synchronous validation is successful. 

Optimizing performance of async validators

	By default, all validators run after every form value change. With synchronous 
validators, this does not normally have a noticeable impact on application performance. 
Async validators, however, commonly perform some kind of HTTP request to validate the 
control. Dispatching an HTTP request after every keystroke could put a strain on the 
backend API, and should be avoided if possible.

Building dynamic forms

	Many forms, such as questionaires, can be very similar to one another in format and	
intent. To make it faster and easier to generate different versions of such a form, you 
can create a dynamic form template based on metadata that describes the business object 
model. You can then use the template to generate new forms automatically, according to 
changes in the data model.

Create a form object model
	
	A dynamic form requires an object model that can describe all scenarios needed by the 
form functionality. 

	The data model for this type of form must represent a question. The example includes 
the DynamicFormQuestionComponent, which defines a question as the fundamental object in 
the model.

Define control classes

	From this base, the example derives two new classes, TextboxQuestion and 
DropdownQuestion, that represent different control types. When you create the form template
in the next step, you will instantiate these specific question types in order to render the 
appropriate controls dynamically.

Compose form groups

	A dynamic form uses a service to create grouped sets of input controls, based on the 
form model. The following QuestionControlService collects a set of FormGroup instances that 
consume the metadata from the question model. You can specify default values and validation 
rules.

Using observables to pass values

	Observables provide support for passing messages between parts of your application. 
They are used frequently in Angular and are the recommended technique for event handling, 
asynchronous programming, and handling multiple values.

	The observer pattern is a software design pattern in which an object, called the 
subject, maintains a list of its dependents, called observers, and notifies them 
automatically of state changes.
	
	Observables are declarative—that is, you define a function for publishing values, but 
it is not executed until a consumer subscribes to it. The subscribed consumer then receives 
notifications until the function completes, or until they unsubscribe.

Basic usage and terms
	
	As a publisher, you create an Observable instance that defines a subscriber function. 
This is the function that is executed when a consumer calls the subscribe() method. 
The subscriber function defines how to obtain or generate values or messages to be published.

The RxJS library that create simple observables of frequently used types:

	of(...items)—Returns an Observable instance that synchronously delivers the values 
provided as arguments.

	from(iterable)—Converts its argument to an Observable instance. This method is commonly 
used to convert an array to an observable.
	
	// Create simple observable that emits three values
	const myObservable = of(1, 2, 3);

	// Create observer object
	const myObserver = {
		next: x => console.log('Observer got a next value: ' + x),
		error: err => console.error('Observer got an error: ' + err),
		complete: () => console.log('Observer got a complete notification'),
	};

	// Execute with the observer object
	myObservable.subscribe(myObserver);
	
	In either case, a next handler is required. The error and complete handlers are optional.

Creating observables

	Use the Observable constructor to create an observable stream of any type. The 
constructor takes as its argument the subscriber function to run when the observable’s 
subscribe() method executes. A subscriber function receives an Observer object, and can 
publish values to the observer's next() method.

// This function runs when subscribe() is called
	function sequenceSubscriber(observer) {
		// synchronously deliver 1 and 2, then complete
		observer.next(1);
		observer.next(2);
		observer.complete();
	}

	// Create a new Observable that will deliver the above sequence
	const sequence = new Observable(sequenceSubscriber);

	// execute the Observable and print the result of each notification
	sequence.subscribe({
			next(num) { console.log(num); },
			complete() { console.log('Finished sequence'); }
	});

	// Logs:
	// 1
	// 2
	// Finished sequence


Multicasting

	A typical observable creates a new, independent execution for each subscribed observer. 
When an observer subscribes, the observable wires up an event handler and delivers values 
to that observer. When a second observer subscribes, the observable then wires up a new 
event handler and delivers values to that second observer in a separate execution.

The RxJS library

	Reactive programming is an asynchronous programming paradigm concerned with data 
streams and the propagation of change. RxJS (Reactive Extensions for JavaScript) is a 
library for reactive programming using observables that makes it easier to compose 
asynchronous or callback-based code.

	RxJS offers a number of functions that can be used to create new observables.

	These utility functions can be used for:
	
		Converting existing code for async operations into observables
	
		Iterating through the values in a stream

		Mapping values to different types

		Filtering streams

		Composing multiple streams

* Create an observable from a promise
	import { from } from 'rxjs'
	
* Create an observable from a counter
	import { interval } from 'rxjs';

* Create an observable from an event
	import { fromEvent } from 'rxjs';

* Create an observable that creates an AJAX request
	import { ajax } from 'rxjs/ajax';

Operators

	Operators are functions that build on the observables foundation to enable 
sophisticated manipulation of collections. For example, RxJS defines operators such 
as map(), filter(), concat(), and flatMap().


Observables in Angular
	
	Angular makes use of observables as an interface to handle a variety of common asynchronous operations. 
	
	For example:

	You can define custom events that send observable output data from a child to a parent component.
	
	The HTTP module uses observables to handle AJAX requests and responses.
	
	The Router and Forms modules use observables to listen for and respond to user-input events.

	Reactive forms
	
	Reactive forms have properties that use observables to monitor form control values. The FormControl properties valueChanges and statusChanges contain observables that raise change events. Subscribing to an observable form-control property is a way of triggering application logic within the component class
	
	
	
	
	Install Locally
	npm install @angular/cli
	
	To run a locally installed version of the angular-cli, you can call ng commands directly 
by adding the .bin folder within your local node_modules folder to your PATH. 
The node_modules and .bin folders are created in the directory where npm install 
@angular/cli was run upon completion of the install command.

	You can configure the default HTTP host and port used by the development server 
with two command-line options :

ng serve --host 127.0.0.1 --port 4201
