import { useAppContext } from "@/app/context/AppContext";
import { formatMoney } from "@/app/utils/formatter";
import mockProject from "@/app/mocks/property.json";
import { ScrollArea } from "./ui/scroll-area";

type PropertyDetailProps = {
  propertyId: string | undefined;
};

const PropertyDetails: React.FC<PropertyDetailProps> = ({ propertyId }) => {
  const property = mockProject.find(
    (property) => property.alias === propertyId
  );
  return (
    <div className="w-full py-24 px-12 h-full box-border bg-white">
      <p className="text-3xl text-primary font-semibold">{property?.name}</p>
      <p className="text-xl text-gray-400">{property?.location?.city}</p>
      <div className="py-8">
        <p className="text-gray-500 text-lg">About {property?.name} </p>
        <p className="${styles.description} text-justify">
          {property?.description}
        </p>
      </div>
      <div className="py-4">
        <p className="text-gray-500 text-lg">Estimated Price: </p>
        <p className="${styles.description} font-semibold">
          <span className="text-primary">PHP </span>
          {property?.priceRange}
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="w-full">
          <p className="text-gray-500 text-lg">HLURB LS No.: </p>
          <p className="${styles.description} font-semibold">1234567890</p>
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-lg">Ad Approval No.: </p>
          <p className="${styles.description} font-semibold">
            12345-ABCDE-5678
          </p>
        </div>
      </div>
      <div>
        <p className="text-lg text-primary mt-5 sm:mt-10">Plans </p>
        <table className="table-fixed border-2 w-full">
          <thead className="bg-blue-100 text-sm">
            <tr>
              <th className="text-left text-lg font-semibold w-2/3 px-8 py-4">
                Area
              </th>
              <th className="text-left font-semibold w-2">SQ.M.</th>
              <th className="text-left font-semibold w-2">SQ.FT.</th>
            </tr>
          </thead>
          <tbody className="text-xs">
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
          <tfoot className="text-sm">
            <tr className="border-2">
              <td className="p-4 font-semibold">Total Area</td>
              <td className=" font-semibold">321</td>
              <td className=" font-semibold">321</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default PropertyDetails;
