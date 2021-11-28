declare interface UserInterface {
  ID?: number;
  name: string;
  phone: number;
}

declare type ExamType = "Easy" | "Normal" | "Hard";
declare type ExamTime = "1 Minute" | "2 Minute" | "3 Minute";

declare type ExamValue = { value: string; text: string };

declare type ResultType = {
  ID?: number;
  createdAt: Date;
  type: ExamType;
  time: ExamTime;
  values: {
    success: number;
    errors: number;
    words: number;
    wordsPerSecond: number;
  };
};

declare type ServerType = {
  ID?: number;
  CreatedAt?: Date;
  name: string;
  examType: string;
  examTime: string;
  success: string;
  words: string;
  errors: string;
  wordPerSecond: string;
  country: string;
};

declare type LanguageType = "en" | "ar";
