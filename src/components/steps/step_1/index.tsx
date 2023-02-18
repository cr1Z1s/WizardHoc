import { FC } from "react";
import StepProps from "../../../types/step_props";


export const Step1: FC<StepProps> = ({ handleNext }) => {
  return (
    <div>
      <h2>Step 1</h2>
      <p>This is step 1 of the wizard.</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
