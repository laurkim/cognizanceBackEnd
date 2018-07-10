# Cognizance Ruby on Rails API

This is the Ruby on Rails API back end for Cognizance, a game that trains a user's cognitive ability and short-term memory by making a user find all matching pairs of cards on a board. This back end has been deployed on [Heroku](https://cognizance.herokuapp.com). The front end code as well as a link to the working demo can be found at [this](https://github.com/laurkim/cognizance) repository.

The database is built on PostgreSQL. The information for each model are accessible at the following links: [users](https://cognizance.herokuapp.com/api/v1/users) and [cards](https://cognizance.herokuapp.com/api/v1/cards).

Any request to the above routes will trigger a controller action, depending on the HTTP verb including in the request. This API will allow a user to update the information of their high score upon game completion.

Active Model Serializers have been implemented to limit the data included in the response to the Javascript front end. 
