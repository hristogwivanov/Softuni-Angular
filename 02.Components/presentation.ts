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
// ./catch((err) => console.error(err));

