export interface QuoteContextInterface {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  date?: string;
  date_of_birth?: string;
  diagnosis?: string;
  treatment?: string;
}
export interface ContextInterface {
  quoteData: QuoteContextInterface;
  setQuoteData: (data: QuoteContextInterface) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  furthestStepReached: number;
  setFurthestStepReached: (step: number) => void;
}

export const defaultState: ContextInterface = {
  quoteData: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date: "",
    date_of_birth: "",
  },
  setQuoteData: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  furthestStepReached: 1,
  setFurthestStepReached: () => {},
};
