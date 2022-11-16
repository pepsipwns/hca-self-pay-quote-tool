import { useForm } from "react-hook-form";
import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";

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
        <Input label="First Name" id="first_name" />
        <Input label="Last Name" id="last_name" required />
        <Input label="Phone Number" id="phone_no" required />
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
