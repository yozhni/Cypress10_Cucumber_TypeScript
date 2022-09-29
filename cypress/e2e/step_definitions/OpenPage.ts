import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {SearchPage} from "../../pages/SearchPage";

Given(/^As a User I open google search page$/, function () {
    SearchPage.open();

});

When(/^As a User I initiate search of "([^"]*)"$/, function (query) {
   SearchPage.initiateSearch(query.toString());
});

Then(/^As a User I got results  of searching "([^"]*)"$/, function (result) {
SearchPage.getSearchResults(result.toString());
});