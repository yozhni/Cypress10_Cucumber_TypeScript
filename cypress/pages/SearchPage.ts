import * as cypress from "cypress";

class SearchPageClass {

//open google page
    public open():void
    {
        cy.visit("/");
    }
//type search query, press enter
    public initiateSearch(something: string):void
    {
            cy.get("input[name='q']").type(something).type('{enter}');
    }
//check search results
    public getSearchResults(something: string):void
    {
        cy.contains(something);
    }
}
export const SearchPage = new SearchPageClass();