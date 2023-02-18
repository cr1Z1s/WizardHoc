import { FC } from "react";
import StepProps from "../../../types/step_props";

export const Step2: FC<StepProps> = ({ handleNext, handleBack }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <p>This is step 2 of the wizard.</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
