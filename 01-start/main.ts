import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

const server = new McpServer({
    name: 'Demo',
    version: '1.0.0'
});


//Defining tools

server.tool(
    'fetch-weather',
    'Tool to fetch the weather of a city',
    {
        city: z.string().describe('City name')
    },
    async ({ city }) => {
        return {
            content: [
                { type: 'text', text: `The weather in ${city} is sunny` }
            ]
        }
    }
)