
import './App.scss'
import AppRoutes from "./appRoutes/AppRoutes.tsx";
import {TaskProvider} from "./helpers/TaskProvider.tsx";

function App() {

  return ( <TaskProvider>
        <AppRoutes />
      </TaskProvider>
  )
}

export default App
