import React from "react";
import { Suspense } from "react";
import OnboardingPage from "../../../components/client/OnboardingPage";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingPage />
    </Suspense>
  );
};

export default page;
