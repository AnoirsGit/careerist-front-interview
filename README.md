# Node.js, PostgreSQL, and Express API

This is a simple Node.js and Express API project that uses PostgreSQL as a database. The API allows you to create and retrieve messages from the database.

## Installation


1. Install dependencies:

   `cd your-repo
   npm install`

2. Create a `.env` file and add your PostgreSQL connection URI from .env.example:

3. Run the server:

   `npm run start` or `npm run dev` 

## Usage

The API has two endpoints:

### `POST api/message`

Create a new message. The request body should contain the following fields:

- `name` (string): The name of the message sender.
- `text` (string): The text of the message.
- `date` (string): The date the message was sent (in the format "YYYY-MM-DD").

If any of the fields are empty or the name contains characters other than Latin letters, numbers, '_', and '-', the API will return a 400 Bad Request error.

If the message is successfully created, the API will return a JSON object containing the message data.

### `GET api/messages`

Retrieve all messages from the database. The API will return a JSON array of message objects.

## Controller

This project uses a MessagesController class to handle the API endpoints. The class includes two methods:

- `createMessage`: Creates a new message in the database.
- `getMessages`: Retrieves all messages from the database.

The `createMessage` method validates the request body using helper functions in `messages.validator.js`. If the validation passes, the method creates a new message in the database using the `db` object from `db.js`. The method returns the created message as a JSON object.

The `getMessages` method retrieves all messages from the database using the `db` object from `db.js`. The method returns the messages as a JSON array.

## Conclusion

This is a basic Node.js and PostgreSQL API that demonstrates how to create and retrieve data from a PostgreSQL database using Express. Feel free to modify and extend it as needed.
