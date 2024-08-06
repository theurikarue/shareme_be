import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'shareme',

  projectId: '4u3mowm6',
  dataset: 'shareme',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
