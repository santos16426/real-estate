import Homepage from "@/app/components/Homepage"
import { AppProvider } from '@/app/context/AppContext';
import Header from "@/app/components/Header";
const App = () => {
  return(
  <AppProvider>
    <Header/>
    <Homepage/>
  </AppProvider>
)
}
export default App