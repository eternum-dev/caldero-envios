import { deliveryRowHeader } from "../../../data";

export const FormHeader = () => {
  const { name, phoneNumber, values } = deliveryRowHeader;
  
  return (
    <div className="delivery__row delivery__row--header">
      <span>{name}</span>
      <span>{phoneNumber}</span>
      <span>{values}</span>
    </div>
  );
};
