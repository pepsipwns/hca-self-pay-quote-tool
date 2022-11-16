import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";

const About = () => {
  return (
    <div>
      <Form onSubmit={(data) => console.log(data)} className="p-10">
        <h1>About</h1>
        <Input label="First Name" id="first_name" />
        <Input label="Last Name" id="last_name" required />
        <Input label="Phone Number" id="phone_no" required />
      </Form>
    </div>
  );
};

About.defaultProps = {
  showImage: true,
};

export default About;
