// Components
// The Building Blocks of Our Application

//1. Components Basic Idea
//2. Creating Components
//3. Bootstrapping
//4. Data Bindings & Templates
//5. Licycle Hooks
//6. COmponent Interaction


//Components: Basic Idea
//The Main Building Block

//The Idea Behind Components
// -A component controls part of the screen(the view)
// -Tou define application logic into the component
// -Each component has its own HTML/CSS template

// import { Component } from '@angular.core'


// @Component({
//     selector: 'app=root',
//     standalone: true,
//     template: `<h1>{{title}}<h1>`,
//     styles: [ `h1 {
//       background-color: red;}`  ]
// })

// export class AppComponent { title = 'App Title'; }


//Components as Standalone Units
// -In Angular 18, components are typically standalone,
// meaning they do not necessarily require an 
// NgModule for declaration. This simplifies the architecture and boosts flexibility
// standalone: true
// -Standalone components are promoted by Angular 18 as default approach
//  -Simplifies architecture
//  -Enhances modularity
// -Components can exist independently without being tied to a module
//  -Makes application more performant, due to improved tree-shaking (removal of unused code)
//  -This is especially useful for small, isolated components or when you want to lazy load components without the need for a full module. 


//Creating Components
//And Their Unique Templates

//Creating Components Manually

// -To create a component, we need the Component decorator
// import { Component } from '@angular/core'; 
// -It provides metadata and tells Angular that we are creating a Component and not an ordinary class

// @Component({ //We call it whilist adding '@' in front and pass in metadata
//     selector: 'app-home',
//     template: '<h1>Home View</h1>',
//     standalone: true
// })

// -Component Metadata
//  -selector
//   -The component's HTML selector
//   selector: 'app-home'
//  -standalone
//   -Declares the component as standalone
//   standalone: true
// -Component Metadata
//  -template or templateURL
//   -The component's template
//   templateUrl: 'Path to template'
// styles or styleUrls
//  -Unique styles for the current component
// styleUrls: 'Array of paths"

//Creating Components with the CLI
// -We can use the Anglular CLI to generate a new component
// ng generate component home 
// The CLI will create the necessary folder structure under src/app/home/
//When using the CLI, it automatically imports the generated component into the relevant module or keeps it as standalone


//Bootstrapping
//Starting the Application

//Bootstrapping an Application
// -Involves initializing the Angular application by specifying the root component that serves as the entry point
// -Angular supports bootstrapping with standalone components, meaning an NgModule is no longer required for the root component
// -Bootstrapping process ensures that the specified root component is rendered in th index.html file, where it replaces the element matching the root component's selector (e.g. <app-root>)

//The Initial Module
// -The bootstrapApplication method from the @angular/platform-browser package is used to bootstrap standalone components directly
// -Example main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent)
// .catch((err) => console.error(err));


// Data Bindings & Templates
// Repeater, Enhanced Syntax

//Templates & Data Bindings Overview
// -A template is a form of HTML that tells Angular how to render the component
//  -render array properties using @for repeater
//  -render nested properties of an object
//  -condition statements using @if
//  -attach events and handle them in the component
// -They can be both inline or in a separate file


//Render an Array Using @for
// export class GamesComponent {
//     games : Game[];
//     constructor() {
//         this.games = [ //Array of Games ]
//     }
// }

// <h1>Games List</h1>
//     <p>Pick a game to Buy</p>
// <ul>
// @for (game of games; track game){
//     <li> {{game.title}} </li>
// }
// </ul> 

// Conditional Statements Using @if and @else

// <h1>Games List</h1>
// <p>Pick a game to Buy</p>
// <ul>
// @for(game of games; track game) {
//     <li>
//     <div>
//         {{ game.title }}
//     </div>
//     @if (game.price >= 100) {
//         <span>Price: {{ game.price }} - Expensive</span>
//     }@else if (game.price >= 50) {
//         <span>Price: {{ game.price }} - Moderate</span>
//     }@else {
//         <span>Price: {{ game.price }} - Cheap</span> </li>}
//         </ul>
//     }

//Attach Events
// <button (click)="showContent($event)">Show content</button>

// export class GamesComponent {
//     public games: Game[];
//     showContent: boolean;

//     constructor(){
//         this.games = [ ]// Array of games
//     }

//     showAdditionalContent($event) {
//         this.showContent = true; 
//     }
// }

//Binding Attributes
// -Binding attributes
// export class GamesComponent {
//     imgUrl: string;
//     constructor() {
//         this.imagUrl = "a url to an image"
//     }    
// }

// <img [attr.src]="imgUrl" />
//The name of the property in the component

//Binding CSS Classes or Specific Class Name
// -Binding classes
// div [class]="badCurly">Bad curly</div>
// -You can bind to a specific class name
// <div [class.special]="isSpecial">
// The class binding is special
// </div>
// <div class="special"[class.special]="!isSoecial">
// This one is not so special
// </div>

//Binding Styles or Styles with Units

// -Binding styles
// <button [style.color]="isSpecial" ? 'red': 'green'">Red</button>
// <button [style.background-color]="canSave ? 'cyan': 'grey'" >
// Save
// </button>

// -Or styles with units
// <button [style.font-size.em]="isSpecial ? 3 : 1">
// Big
// </button> 
// <button [style.font-size.%]="!isSpecial ? 150: 50">
// Small
// </button>

//Reference and Null-safe Operator
//-Reference other elements
// <input #phone placeholder="phone number">
// <button (click)="callPhone(phone.value)">Call</Button>
//-You can also use the null-safe operator
// <div>The current hero's name is {{game?.title}}</div>
// <div>The null hero's name is {{game && game.name}}</div>

//Template Expressions
//-The text between the curly brackets is evaluated to a string
// <p>The sum of two + two + four is {{2 + 2 + 4}}</p>
//-Template expressions are not pure JavaScript
//-You cannot use these:
// -Assignments(=,+=,-=,...)
// -The new operator
// -Multiple expressions
// -Increment or decrement operations (++ or --)
// -Bitwise operators

//Types of Data Binding

//-There are three types of data binding

// -From data-source to view
// {{expression}}
// [target]="expression"
// bind-target="expression"

// -From view to data-source
// (target)="statement"
// on-target="statement"

// -Two-way
// [(ngModel)]="expression"
// bindon-target="expression" //FormsModule needed


//Lifecycle Hooks
//Intersect Through the Loop

//Lifecycle Overview
// -A component has a lifecycle managed by Angular
// -Angular offers lifecycle hooks that provide control over life moments of a component
// -Directive and component instances have a lifecycle as Angular creates, updates destroys them

//NgOnInit and NgOnDestroy Example

// import { Component, OnInit, OnDestroy } from '@angular/core';
// @Component({..})
// export class GamesComponent implements OnInit, OnDestroy {
//     games: Game[];

//     ngOnInit() {
//         console.log('CREATED'); //Called shortly after creation
//     }

//     ngOnDestroy() {
//         console.log('DELETED'); //Used for cleanup
//     }
// }

//Other Lifecycle Hooks
//-ngOnChanges()
// -When data is changed
//-ngDoCheck()
// -Detect your own changes
//-ngAfterCotnentInit()
// -When external content is received

//Other Lifecycle Hooks
//All lifecycle hooks
//-ngAfterContentChecked()
// -When external content is checked
//-ngAfterViewInit()
// -Whent the views and child views are created
//-ngAfterViewChecked()
// -When the above are checked
