import { CloseIcon } from "../../../components";
import { deliveryRowHeader } from "../../../data";

export const FormHeader = () => {
  const { name, phoneNumber } = deliveryRowHeader;

  return (
    <div className="delivery__row delivery__row--header">
      <span>{name}</span>
      <span>{phoneNumber}</span>
      <span>
        <CloseIcon height="24" width="24"/>
      </span>
    </div>
  );
};
