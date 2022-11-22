import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  ContextInterface,
  defaultState,
} from "../utils/contextConstants";

const AppContext = createContext<ContextInterface>(defaultState);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [quoteData, setQuoteData] = useState(defaultState.quoteData);
  const [currentStep, setCurrentStep] = useState(
    defaultState.currentStep
  );
  const [furthestStepReached, setFurthestStepReached] = useState(
    defaultState.furthestStepReached
  );

  const value = {
    quoteData,
    setQuoteData,
    currentStep,
    setCurrentStep,
    furthestStepReached,
    setFurthestStepReached,
  };

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  );
}
