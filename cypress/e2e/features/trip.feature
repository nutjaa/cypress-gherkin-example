Feature: Trip
    Scenario: As venice concierge, I can manual create trip
        Given I login as "venice" "conceierge"
        And I click menu "Trip Registration"
        And I click "#register-trip-manually-button"
        And I navigate to "/trips/create-form"
        When I see ".trips-create-form-page"
        And I click "#input-partners\.corporatePartner"
        And I type "4052" in "#input-partners\.corporatePartner"
        And I click text "parcompliantotaa - 4052"
        And I type "Nut Group" in "#input-name"
        And I click "label[for='destinations.venice.selected']"
        And I click "#destinations\.venice\.start-date"
        And I select date range today
        And I select date range today
        And I not include Switzerland
        And I change number of travelers to "2"
        And I click create trip
        Then I navigate to "/trips/"
        And I see ".trip-details-main-container"
        And I see text "Synchronization in progress"
        And I wait until not see text "Synchronization in progress"
        And I reload page
        And I see traveler "0" pax number with some value
        And I see traveler "1" pax number with some value