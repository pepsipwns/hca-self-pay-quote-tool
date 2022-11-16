import NextLink from "next/link";

interface LinkProps {
  href: string;
  className?: string;
  label?: string;
}

export const Link = (props: LinkProps) => {
  const { href, className, label } = props;
  return (
    <NextLink href={href} data-testid="HCALink">
      <p
        data-testid="HCALinkLabel"
        className={`${className} text-hca-blue-900 underline`}
      >
        {label}
      </p>
    </NextLink>
  );
};

Link.defaultProps = {
  size: "base",
  classNames: "",
  label: "",
};
