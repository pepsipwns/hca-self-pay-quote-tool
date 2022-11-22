import { useRouter } from "next/router";
import PageContainer from "../components/Containers/PageContainer";
import { Datepicker } from "../components/Datepicker/Datepicker";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import { countryOptions } from "../components/Select/Select.testdata";
import TextArea from "../components/TextArea/TextArea";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const {
    quoteData,
    setQuoteData,
    setCurrentStep,
    furthestStepReached,
    setFurthestStepReached,
  } = useAppContext();
  const router = useRouter();

  setCurrentStep(1);
  if (furthestStepReached < 1) {
    setFurthestStepReached(1);
  }

  return (
    <PageContainer title="Personal Information">
      <Form
        onSubmit={(data) => {
          setQuoteData({ ...quoteData, ...data });
          router.push("/treatment");
        }}
        submitLabel="Next"
      >
        <Input id="first_name" label="First Name" />
        <Select
          id="country"
          label="Country"
          options={countryOptions}
          required
        />
        <TextArea id="more_info" label="More Info" required />
        <Datepicker id="date" label="Pick a date" required />
      </Form>
    </PageContainer>
  );
};

// Simple API call example - replace for data fetching from BE for labels, options etc
//
// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/article");
//   const data = await response.json();

//   if (!data) return { props: {} };

//   return {
//     props: {
//       article: data,
//     },
//   };
// };

export default Home;
