import { useRouter } from "next/router";
import PageContainer from "../components/Containers/PageContainer";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import { useAppContext } from "../context/AppContext";

const Treatment = () => {
  const {
    quoteData,
    setQuoteData,
    setCurrentStep,
    furthestStepReached,
    setFurthestStepReached,
  } = useAppContext();
  const router = useRouter();

  setCurrentStep(2);
  if (furthestStepReached < 2) {
    setFurthestStepReached(2);
  }

  return (
    <PageContainer title="Treatments & Diagnostics">
      <Form
        onSubmit={(data) => {
          setQuoteData({ ...quoteData, ...data });
          router.push("/summary");
        }}
        submitLabel="Next"
      >
        <Input label="Treatment" id="treatment" />
        <Input label="Diagnosis" id="diagnosis" />
      </Form>
    </PageContainer>
  );
};

Treatment.defaultProps = {
  showImage: true,
};

export default Treatment;
