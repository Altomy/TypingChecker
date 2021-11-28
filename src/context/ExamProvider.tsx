/**
 * ExamProvider.tsx
 */
import React, { useContext, useReducer, createContext } from "react";

// ==================== Contexts ==================== //

// ========== States Models ========== //

type updateExamTypeT = (examType: ExamType) => void;
type updateExamTimeT = (examType: ExamTime) => void;
type updateExamValueT = (value: string, text: string) => void;
type updateExamLanguageT = (examLanguage: LanguageType) => void;

type DefaultT = {
  examType: ExamType;
  examTime: ExamTime;
  examLanguage: LanguageType;
  examValue: ExamValue;
};

// ========== Initial States ========== //
let defaultValue: DefaultT = {
  examType: "Easy",
  examTime: "1 Minute",
  examLanguage: "en",
  examValue: { value: "", text: "" },
};

// ========== Actions ========== //
type ExamTypeActions = { type: "setExamType"; payload: ExamType };
type ExamTimeActions = { type: "setExamTime"; payload: ExamTime };
type ExamLanguageActions = { type: "setExamLanguage"; payload: LanguageType };
type ExamValueActions = { type: "setExamValue"; payload: ExamValue };
type Actions =
  | ExamTypeActions
  | ExamTimeActions
  | ExamValueActions
  | ExamLanguageActions;

// ========== ReducersFunction ========== //
function reducerFunction(state: DefaultT, action: Actions) {
  switch (action.type) {
    case "setExamType":
      return { ...state, examType: action.payload };
    case "setExamTime":
      return { ...state, examTime: action.payload };
    case "setExamValue":
      return { ...state, examValue: action.payload };
    case "setExamLanguage":
      return { ...state, examLanguage: action.payload };
    default:
      return state;
  }
}

// ========== Context Creator ========== //
const Context = createContext<
  | {
      Exam: DefaultT;
      dispatchExam: (action: Actions) => void;
      updateExamType: updateExamTypeT;
      updateExamTime: updateExamTimeT;
      updateExamValue: updateExamValueT;
      updateExamLanguage: updateExamLanguageT;
    }
  | undefined
>(undefined);

// ========== DefaultFunction ========== //
let ExamProvider: React.FC = ({ children }) => {
  let updateExamType: updateExamTypeT = (examType) => {
    dispatchExam({ type: "setExamType", payload: examType });
  };

  let updateExamTime: updateExamTimeT = (examTime) => {
    dispatchExam({ type: "setExamTime", payload: examTime });
  };

  let updateExamLanguage: updateExamLanguageT = (examLanguage) => {
    dispatchExam({ type: "setExamLanguage", payload: examLanguage });
  };

  let updateExamValue: updateExamValueT = (value, text) => {
    dispatchExam({
      type: "setExamValue",
      payload: { value, text },
    });
  };

  let [Exam, dispatchExam] = useReducer(reducerFunction, defaultValue);

  // ========== return ========== //
  return (
    <Context.Provider
      value={{
        Exam,
        dispatchExam,
        updateExamType,
        updateExamTime,
        updateExamValue,
        updateExamLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// ========== CustomsHooks ========== //
export function useExam() {
  const context = useContext(Context);
  if (context === undefined) throw new Error("Must used in the ExamContext");
  return context;
}

export default ExamProvider;
