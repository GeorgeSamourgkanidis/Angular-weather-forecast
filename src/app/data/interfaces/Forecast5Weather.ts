export interface Forecast5Weather {
    Best_score: number;
    Average_score: number;
    Worst_score: number;
    Best_user: string;
    Worst_user: string;
    TotalPossibleScore: number;
    numberQuestionnaireAssigned: number;
    numberQuestionnaireCompleted: number;
    numberQuestionnaireInProgress: number;
    numberQuestionAssigned: number;
    numberQuestionCompleted: number;
    numberTopicAssigned: number;
    numberTopicCompleted: number;
    numberTopicInProgress: number;
    questionnaires: {}
    topics: any[]
    project: string
  }
  