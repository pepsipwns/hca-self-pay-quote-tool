import { NextApiResponse } from "next";
import { Button } from "../components/Button/Button";
import { Link } from "../components/Link/Link";

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
  const { article, showImage } = props;
  if (!article) return "The article wasn't found!";

  const { author, company, image_url, content } = article;

  const Image = showImage ? (
    <img
      className="w-24 h-24 rounded-full mx-auto md:flex md:self-center"
      src={image_url}
      alt="A beautiful cat"
      width="200"
      height="200"
    />
  ) : (
    ""
  );

  return (
    <div className="w-96 mx-auto">
      <div className="h-screen flex items-center">
        <figure className="lg:flex bg-gray-200 rounded-xl p-8 lg:p-4">
          {Image}
          <div className="pt-6 lg:p-4 text-center lg:text-left space-y-4">
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="dark-outline" label="Dark Outline" />
            <Button variant="light-outline" label="White Outline" />
            <Button variant="primary" size="small" label="Primary" />
            <Button
              variant="secondary"
              size="small"
              label="Secondary"
            />
            <Button
              variant="dark-outline"
              size="small"
              label="Dark Outline"
            />
            <Button
              variant="light-outline"
              size="small"
              label="White Outline"
            />
            <Link href="/" label="Link" classNames="text-xs" />
            <Link href="/" label="Link" classNames="text-sm" />
            <Link href="/" label="Link" />
            <Link href="/" label="Link" classNames="text-lg" />
            <Link href="/" label="Link" classNames="text-xl" />
          </div>
        </figure>
      </div>
    </div>
  );
};

Home.defaultProps = {
  showImage: true,
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/article");
  const data = await response.json();

  if (!data) return { props: {} };

  return {
    props: {
      article: data,
    },
  };
};

export default Home;
