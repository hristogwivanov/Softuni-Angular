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