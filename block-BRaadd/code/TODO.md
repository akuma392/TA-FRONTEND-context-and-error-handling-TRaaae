## Run this app

To ren this app you need to do the following

- Clone the app in this folder: https://github.com/AltCampus/react-hoc
- Run `npm install`
- To run this app use `npm start`

## DEMO

[https://q5on1.csb.app/](https://q5on1.csb.app/)

## Refact to use Higher Order Component

- In this app there are three pages `Articles`, `People` and `Books`
- All three pages contains list of articles, people and books along with a search functionality
- If you look closely you will understand the behaviour of search function is same in all three pages
- Taking the help form of Render Props pattern to refactor the app
- Create a component `SearchWrapper` using which you will be able to add the search function to any compoent
- After refactoring make sure to check if aell the functionalities are working properly
