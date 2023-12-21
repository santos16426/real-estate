
type RightPaneProps = {
    propertyId: string | undefined
}

const RightPane:React.FC<RightPaneProps> = ({propertyId}) => (  
    <div className={`w-full py-20 px-12 h-screen`}>
        <h1>Property Page</h1>
        <p>Property ID: {propertyId}</p>
    </div>
)
export default RightPane