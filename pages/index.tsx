import { useForm } from "react-hook-form";
import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";
import { Select } from "../components/Select/Select";
import { countryOptions } from "../components/Select/Select.testdata";

interface HomeProps {
  article: {
    author: string;
    company: string;
    image_url: string;
    content: string;
  };
  showImage: boolean;
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Form onSubmit={(data) => console.log(data)} className="p-10">
        <h1>Home</h1>
        <Input id="first_name" label="First Name" />
        <Input id="last_name" label="Last Name" required />
        <Input id="phone_no" label="Phone Number" required />
        <Select
          id="country"
          label="Country"
          options={countryOptions}
          required
        />
      </Form>
    </div>
  );
};

Home.defaultProps = {
  showImage: true,
};

// Simple API call example
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
