import React from "react";
import textBag from "./textBag";
/**
 * This method use for return text from custom text
 *
 *
 * @param examType - Set the exam type for the text
 * @param examTime - Set the exam time `1 Minutes, 2Minutes.....`
 * @returns return the [text]
 */
let useTexts = (examType: ExamType, language: LanguageType = "en") => {
  let [text, setText] = React.useState<string>("");

  let build = React.useCallback(() => {
    setText(getRandomTextFromBag(examType, language));
  }, []);

  React.useEffect(() => {
    build();
  }, []);

  return [text];
};

/**
 *  This function return random text from the bags
 *
 * @var `bagTexts` - get the texts[] from the textBag with [key:language][key:examType]
 *
 * @param examType - Get the exam type "easy, normal, hard";
 * @param language - Get the text language
 * @returns The selected text from the bag
 */
export function getRandomTextFromBag(
  examType: ExamType,
  language: LanguageType
) {
  let bagTexts = textBag[language][examType];
  let randomNumber = Math.floor(Math.random() * (bagTexts.length - 1));

  return bagTexts[randomNumber];
}

export default useTexts;
