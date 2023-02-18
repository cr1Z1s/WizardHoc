import { FC } from "react";
import StepProps from "../../../types/step_props";

export const Step3: FC<StepProps> = ({ handleBack }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <p>This is step 3 of the wizard.</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};
