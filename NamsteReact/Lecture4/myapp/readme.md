
/**
 * Header
 *  -logo
 *  -Nav Items
 * Body
 *  - Search 
 *  - Restaurant containers
 *    - Restaurant Cards
 *      - Img 
 *      - Name of res, Star Rating, cuisine, delery tie 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact 
 */

 //This is food ordering apps

//There are two types of import export
 - export default <name of variable>
 - import Component from "path"

 - Named Export/Import
 export const Component
 import { Component } from "path";

 # React Hooks 
 (Noraml js Utility Functions )
 - useState() - superPoweful state react variable 
 - useEffect() 

 # UserContext 
 - You can use nest the UserContext component and pass different values in it. 

 # Redux Toolkit 
  - Install @reduxjs/toolkit and react-redux
  - Build Our Store
  - Connect our store to our app
  - Slice (CartSliece)
  - dispatch(action)
  - Selector 
  - RTk Says either Mutate the existing state or return a new state 
  
 # Types of Testing (developer)
  - Unit Testing
  - Integration Testing
  - End to End Testing -e2e testing 

 # Setting up Testting for our Apps
  - Installed React Testing Library
  - Installed Jest
  - Installed Babel Dependency 
  - Configure Babel
  - Configure Parcel Config file to disable default babel transpilation
  - Jest configurations (npm jest --init)
  - Install JSDOM Library
  - Install @testing-library/jest-dom Library for Test JSX Component
  - Include @babel/preset-react in Babel config 