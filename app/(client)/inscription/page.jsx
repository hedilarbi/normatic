import React, { Suspense } from "react";
import InscriptionPage from "@/components/InscriptionPage";
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InscriptionPage />
    </Suspense>
  );
};

export default page;
