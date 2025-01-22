
import './App.scss'
import AppRoutes from "./appRoutes/AppRoutes";
import {TaskProvider} from "./helpers/TaskProvider";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'

function App() {

  return ( <TaskProvider>
        <AppRoutes />
      </TaskProvider>
  )
}

export default App
