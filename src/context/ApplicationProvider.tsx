/** ApplicationProvider.tsx */
// ========== Imports ========== //
import React from "react";
import AuthProvider from "./AuthProvider";
import ExamProvider from "./ExamProvider";

// ========== propsTypes ========== //
export type propsTypes = {};

/** MainFunction */
let ApplicationProvider: React.FC<propsTypes> = (props) => {
  // ==== RETURN METHOD ==== //
  return (
    <AuthProvider>
      <ExamProvider>{props.children}</ExamProvider>
    </AuthProvider>
  );
};

export default ApplicationProvider;
