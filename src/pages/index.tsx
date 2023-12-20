import { useState } from "react"
import Homepage from "@/app/components/Homepage"
import { AppProvider } from '@/app/context/AppContext';
const App = () => {
  return(
  <AppProvider>
    <Homepage/>
  </AppProvider>
)
}
export default App