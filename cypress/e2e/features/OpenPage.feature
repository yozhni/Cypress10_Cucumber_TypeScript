Feature: As a User I want o find something on google

  Scenario: As a User I want open google search page and find something
    Given As a User I open google search page
    When As a User I initiate search of "something"
    Then As a User I got results  of searching "something"


