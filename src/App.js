import config from './aws-exports'
import Amplify from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { CardACollection } from './ui-components'

function App () {
  return (
    <AmplifyProvider>
      <CardACollection />
    </AmplifyProvider>
  )
}

export default App

Amplify.configure(config)