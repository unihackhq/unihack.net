import { Client } from '@notionhq/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }

  if (!databaseId) {
    return res.status(500).json({ message: 'Notion integration not connected'})
  }

  try {
    const { firstName, lastName, email, purpose, message } = JSON.parse(
      req.body
    );
    await notion.pages.create({
      parent: {
        database_id: databaseId
      },
      properties: {
        FirstName: {
          title: [
            {
              text: {
                content: firstName
              }
            }
          ]
        },
        LastName: {
          rich_text: [
            {
              text: {
                content: lastName
              }
            }
          ]
        },
        Email: {
          email: email
        },
        Purpose: {
          select: {
            name: purpose
          }
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message
              }
            }
          ]
        }
      }
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}
