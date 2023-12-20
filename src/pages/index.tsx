import { useState } from "react"
import Homepage from "@/app/components/Homepage"

const App = () => {
  const bgImages: string[] = [
    "/images/property-1.jpg",
    "/images/property-2.jpg",
    "/images/property-3.jpg",
    "/images/property-4.jpg",
    "/images/property-5.jpg",
    "/images/property-66.jpg",
    "/images/property-7.jpg",
  ]
  const [selectedIndex, setSelectedIndex] = useState<number>(4);
  return(
  <>
    <Homepage imagePath={bgImages[selectedIndex]} setActiveIndex={setSelectedIndex} selectedIndex={selectedIndex}/>
  </>
)
}
export default App