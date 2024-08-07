Feature: Buy ticket
    Scenario: Reserve one ticket
        Given this user visited the page "/client/index.php"
        When user selects the day of the booking week "6"
        When user selects the show time and movie title "217"
        When user has selected any free seat
        When user clicks the «Reservation» button
        Then sees the booking confirmation with the name of the movie "Сталкер(1979)"

    Scenario: Buy multiple seats
        Given this user visited the page "/client/index.php"
        When user selects the day of the booking week "6"
        When user selects the show time and movie title "217"
        When user has selected any free seat
        When user has selected any free seat
        When user has selected any free seat
        When user clicks the «Reservation» button
        Then sees the booking confirmation with the name of the movie "Сталкер(1979)" 

    Scenario: Buy a reserved seat
        Given this user visited the page "/client/index.php"
        When user selects the day of the booking week "6"
        When user selects the show time and movie title "217"
        When user selects a seat that is not available for booking
        When user clicks the «Reservation» button 
        Then user understands that «Reservation» button is inactive

 
