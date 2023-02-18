import React, { FC, useState } from "react";

type StepProps = {
  handleNext?: () => void;
  handleBack?: () => void;
};

type Props = {
  steps: React.FC<StepProps>[];
  initialStep: number;
};

const Wizard: FC<Props> = ({ steps, initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const next = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep((prv) => prv + 1);
    }
  };

  const back = () => {
    if (currentStep !== 0) {
      setCurrentStep((prv) => prv - 1);
    }
  };

  const stepsWithNavigation = steps.map((step) =>
    withNavigation(step, { handleNext: next, handleBack: back })
  );

  return stepsWithNavigation[currentStep]();
};

const withNavigation = (Component: any, props: any) => {
  return () => <Component {...props} />;
};

export default Wizard;
