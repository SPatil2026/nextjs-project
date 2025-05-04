import "server-only"

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

if (!token) {
    throw new Error('SANITY_TOKEN is missing. Please add it to your .env.local file.')
  }

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
    throw new Error('Sanity client is missing token configuration')
  }
