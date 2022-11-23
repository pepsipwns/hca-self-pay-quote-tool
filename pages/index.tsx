import { useRouter } from "next/router";
import PageContainer from "../components/Containers/PageContainer";
import CountrySelect from "../components/CountrySelect/CountrySelect";
import { Datepicker } from "../components/Datepicker/Datepicker";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup/InputGroup";
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

  const cleanData = (data: any) => {
    console.log("cleanData", data);
    const { dob_day, dob_month, dob_year, ...rest } = data;
    return {
      ...rest,
      date_of_birth: `${dob_day}/${dob_month}/${dob_year}`,
    };
  };

  return (
    <PageContainer title="Personal Information">
      <Form
        onSubmit={(data) => {
          setQuoteData({ ...quoteData, ...cleanData(data) });
          router.push("/treatment");
        }}
        submitLabel="Next"
      >
        <Input id="first_name" label="First Name" />
        <Input id="last_name" label="Last Name" />
        <InputGroup
          id="date_of_birth"
          label="Date of Birth"
          required
          inputs={[
            {
              id: "dob_day",
              placeholder: "31",
              className: "w-8 mr-2",
            },
            {
              id: "dob_month",
              placeholder: "12",
              className: "w-8 mr-2",
            },
            {
              id: "dob_year",
              placeholder: "2021",
              className: "w-40",
            },
          ]}
        />
        <CountrySelect id="country" label="Country" required />
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
