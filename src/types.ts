import { RUNNERS } from "./constants";


// ________________________  AI TYPES  ________________________

export type AICallerOptions = {
  // provider: 'anthropic' | 'openai',
  model: string,
  maxOutputTokens: number,
  apiKey?: string,
  streamToConsole?: boolean,
  systemPrompt?: string,
  saveName?: string,
  jsonType?: "parse" | "started_array" | "started_object",
  saveToFilepath?: string,
  prefix?: string,
  continueOnPartialJSON?: boolean
}

export type genericMessageParam = {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export type AICosts = {
  input: number;
  output: number;
  total: number;
}

export type AICallSuccess = {
  success: true;
  outputTokens: number;
  inputTokens?: number;
  cost?: AICosts;
  message: any;
};

export type AICallFailure = {
  success: false;
  rateLimited: boolean;
  error: string;
};

export type AICallResponse = {
  fullMessage: string;
  outputTokens: number;
  inputTokens: number;
}

// ##############################  DOCS OUTLINE  ##############################

export type OutlineSection = LLMOutlineSection & { disabled?: boolean };

export type LLMOutlineSection = {
  title: string;
  permalink: string;
  singleSentenceDescription: string;
  keythingsToCover:string[];
  subsections?: OutlineSection[];
};

export type Outline = {
  title: string;
  sections: OutlineSection[];
};

export type ReadyToGeneratePage = {
  section: OutlineSection;
  levels: string[];
  messages: genericMessageParam[];
};


// ##############################  WIZARD  ##############################
export type WizardState = Partial<{
  gotDirectoryPermission: boolean;
  smarterModel: string;
  streamToConsole: boolean;
  primarySourceFilename: string;
  loadedPrimarySource: string;
  anthropicKey: string;
  description: string;
  title: string;
  coreThemes: string;
  preferredEditor: string;
  intendedAudience: string;
  ambiguityExplained: string;
  writingExampleFilename: string;
  writingExample: string;
  outlinePrimaryPrompt: string;
  generatedOutline: Outline;
  outlineComments: string;
  ignorePrimarySourceSize: boolean;
  pageGenerationModel: string;
  addDiagrams: boolean;
  preferredRunnerForNextra: (typeof RUNNERS)[number]["command"];
  overwritePages: boolean;
  faviconUrl: string;
}>;
