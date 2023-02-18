import React, { ComponentType, ReactNode } from "react";
import { Step1 } from "./components/steps/step_1";
import { Step2 } from "./components/steps/step_2";
import { Step3 } from "./components/steps/step_3";
import Wizard from "./components/wizard";

const App = () => {
  const Steps = [Step1, Step2, Step3];

  return <Wizard steps={Steps} initialStep={0} />;
};

export default App;
