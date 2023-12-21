
type LeftPaneProps = {
    propertyId: string | undefined;
}

const LeftPane:React.FC<LeftPaneProps> = ({propertyId}) => (  
    <div className={`w-full bg-black py-20 px-12 h-screen text-white`}>
        <h1>Property Page</h1>
        <p>Property ID: {propertyId}</p>
    </div>
)

export default LeftPane