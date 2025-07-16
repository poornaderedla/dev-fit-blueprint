
import { useState } from "react";
import AssessmentHero from "../components/AssessmentHero";
import AssessmentFlow from "../components/AssessmentFlow";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <AssessmentFlow onBack={() => setShowAssessment(false)} />;
  }

  return <AssessmentHero onStartAssessment={() => setShowAssessment(true)} />;
};

export default Index;
