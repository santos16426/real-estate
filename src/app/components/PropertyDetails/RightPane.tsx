import styles from './RightPane.module.scss'
import { useAppContext } from '@/app/context/AppContext';
import {formatMoney} from '@/app/utils/formatter'
type RightPaneProps = {
    propertyId: string | undefined
}

const RightPane:React.FC<RightPaneProps> = ({propertyId}) => {
    const {properties} = useAppContext();

    const property = properties.find((property) => property.id === propertyId);
    return(  
    <div className={`w-1/2 py-24 px-12 h-screen flex-1 ${styles.rightPane}`}>
        <p className={`${styles.title} text-3xl text-primary font-semibold`}>{property?.title}</p>
        <p className={`${styles.type} text-xl text-gray-400`}>{property?.location}</p>
        <div className={`py-8`}>
            <p className={`${styles.label}`}>About {property?.title} </p>
            <p className={`${styles.description}`}>{property?.longDescription}</p>
        </div>
        <div className={`py-4`}>
            <p className={`${styles.label}`}>Estimated Price: </p>
            <p className={`${styles.description} font-semibold`}><span className={`text-primary`}>PHP </span>{property?.price && formatMoney(property?.price)}</p>
        </div>
        <div className={`grid grid-cols-3 ${styles.licenseWrapper}`}>
            <div className={`w-full`}>
                <p className={`${styles.label}`}>HLURB LS No.: </p>
                <p className={`${styles.description} font-semibold`}>1234567890</p>
            </div>
            <div className={`w-full`}>
                <p className={`${styles.label}`}>Ad Approval No.: </p>
                <p className={`${styles.description} font-semibold`}>12345-ABCDE-5678</p>
            </div>
        </div>
        <div>
            <p className={`text-lg text-primary mt-5 sm:mt-10`}>Plans </p>
                <table className="table-fixed border-2 w-full">
                    <thead className="bg-blue-100 text-sm">
                        <tr>
                            <th className="text-left text-lg font-semibold w-2/3 px-8 py-4">Area</th>
                            <th className="text-left font-semibold w-2">SQ.M.</th>
                            <th className="text-left font-semibold w-2">SQ.FT.</th>
                        </tr>
                    </thead>
                    <tbody className='text-xs'>
                        <tr>
                            <td className="px-8 py-4">Dining</td>
                            <td className="">123</td>
                            <td className="">123</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4">Bedroom 1</td>
                            <td className="">123</td>
                            <td className="">123</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4">Bedroom 2</td>
                            <td className="">123</td>
                            <td className="">123</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4">Kitchen</td>
                            <td className="">123</td>
                            <td className="">123</td>
                        </tr>
                    </tbody>
                    <tfoot className='text-sm'>
                        <tr className='border-2'>
                            <td className="p-4 font-semibold">Total Area</td>
                            <td className=" font-semibold">321</td>
                            <td className=" font-semibold">321</td>
                        </tr>
                    </tfoot>
                </table>
        </div>
    </div>
)}
export default RightPane