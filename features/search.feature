Feature: Reserving tickets
    Scenario: Buy one ticket
        Given this user visited the page "http://qamid.tmweb.ru/client/index.php"
        When the user selects the day of the booking week "6"
        When the user selects the show time and movie title "217"
        When the user has selected any free seat
        When the user clicks the «Reservation» button
        Then sees the booking confirmation with the name of the movie "Сталкер(1979)"

    Scenario: Buy multiple seats
        Given this user visited the page "http://qamid.tmweb.ru/client/index.php"
        When the user selects the day of the booking week "6"
        When the user selects the show time and movie title "217"
        When the user has selected any free seat
        When the user has selected any free seat
        When the user has selected any free seat
        When the user clicks the «Reservation» button
        Then sees the booking confirmation with the name of the movie "Сталкер(1979)" 

    Scenario: Buy a reserved seat
        Given this user visited the page "http://qamid.tmweb.ru/client/index.php"
        When the user selects the day of the booking week "6"
        When the user selects the show time and movie title "217"
        When a user selects a seat in the hall that is not available for booking
        When the user clicks the «Reservation» button 
        Then the user understands that the «Reservation» button is inactive  
