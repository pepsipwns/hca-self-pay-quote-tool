import PageContainer from "../components/Containers/PageContainer";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import { useAppContext } from "../context/AppContext";

const Summary = () => {
  const {
    quoteData,
    setCurrentStep,
    furthestStepReached,
    setFurthestStepReached,
  } = useAppContext();
  setCurrentStep(3);

  if (furthestStepReached < 3) {
    setFurthestStepReached(3);
  }

  console.log(quoteData);
  return (
    <PageContainer title="Summary">
      <div>{quoteData.first_name}</div>
      <div>{quoteData.date}</div>
      <div>{quoteData.treatment}</div>
      <div>{quoteData.diagnosis}</div>
    </PageContainer>
  );
};

Summary.defaultProps = {
  showImage: true,
};

export default Summary;
