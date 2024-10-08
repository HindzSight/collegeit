# AI Text Completion Service

This is a simple backend service that generates AI-based text completions using Groq's API via the Groq SDK. The service is built with Express.js and Node.js, using ES6 module syntax. It's configured to return completions with a maximum of 50 tokens.

## Setup

1. Clone this repository:
   ```
   git clone https://github.com/HindzSight/collegeit.git
   cd collegeit
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Set up your Groq API key:
   - Create a `.env` file in the project root directory
   - To get an API key for using this project refer to [https://console.groq.com/](https://console.groq.com/)
   - Add your Groq API key to the file:
     ```
     GROQ_API_KEY=your_groq_api_key_here
     ```

## Running the Service

1. Start the Express server:
   ```
   npm start
   ```
   For development with auto-restart on file changes:
   ```
   npm run dev
   ```

2. The service will be available at `http://localhost:3000`

## Using the Service

Send a POST request to the `/complete-text` endpoint with a JSON body containing the `prompt` field:

```
curl -X POST "http://localhost:3000/complete-text" -H "Content-Type: application/json" -d '{"prompt": "Once upon a time"}'
```

The service will return a JSON response with the AI-generated completion:

```json
{
  "completion": "Once upon a time, in a small village nestled in the rolling hills of the countryside, there lived a young girl named Sophia."
}
```

Note: The completion is limited to a maximum of 50 tokens.

## Error Handling

The service includes basic error handling:
- If the prompt is missing, it will return a 400 status code with an error message.
- If there's an error with the Groq API call, it will return a 500 status code with a generic error message.

## Security Considerations

- The Groq API key should be set in your environment or .env file.
- For production use, consider implementing authentication for the API.

## Scaling and Performance

- For high-traffic scenarios, consider implementing caching or rate limiting.
- Monitor API usage and adjust as needed.

## Note on ES Modules

This project uses ES6 module syntax (`import` instead of `require`). Make sure you're using a version of Node.js that supports ES modules (v12.17.0 or later recommended).