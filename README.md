# Classes

## Musician

Create a Musician class

It should have the following properties:

-   name: The name given
-   instrument: the instrument they play - defaults to 'singer'
-   skillLevel: skill on the instrument
-   money: current money they have/can earn
-   skill: their special skill - defaults to 'make music'

### Methods

-   specialSkill:

    -   Should return the musician special skill in the string of 'my special skill is <skill>'

-   playGig:

    -   Should take a number as an argument which will increase the musician's current money count

-   willDuet:

    -   Will take a Musician as an argument and return a boolean if the musician will duet with them. By default, a musician will duet with any other instrument

## Musician Types - should extend Musician

-   **Drummer**:

    -   Instrument: 'drums'
    -   earn a flat fee of 500 per gig
    -   Will not duet with 'singer'

-   **Bassist**:

    -   Instrument: 'bass'
    -   earn a flat fee of 300 per gig
    -   Will not duet with 'guitar'

-   **Guitar**:

    -   instrument: 'guitar
    -   earn a flat fee of 600 per gig
    -   Will not duet with 'bass'

## Specific Musicians - should extend the relevant class

-   JohnBonham - famous drummer

    -   John is his name
    -   his money is 100000
    -   His skill level is 200
    -   Special skill: 'stick spin'

-   KimDeal: famous bassist

    -   Kim is her name
    -   money is 25000
    -   skill level 210

-   Slash: famous guitarist
    -   Slash
    -   money 45000
    -   skill level 190

## Venue

**(Venues contains Musicians, it is where they will perform)**

Venue behaviours are:

-   store musicians
-   Book a musician to perform
-   Tell a musician to go on stage
-   See who they have currently booked

-   `makeBooking`

    -   takes a musician as an argument and books them, as long as the venue does not currently have anyone booked.Should console log 'you have booked <musicanName>'

        Otherwise:
        Console logs 'musicianName is booked to perform'

-   `isVacant`

    -   returns a boolean representing whether the venue has a musician booked

-   `checkBill`
    -   Returns musician booked to perform
    -   if no one is booked - returns 'no show'
