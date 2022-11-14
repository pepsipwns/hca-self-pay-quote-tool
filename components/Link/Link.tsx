import NextLink from "next/link";

interface LinkProps {
  href: string;
  classNames?: string;
  label?: string;
}

export const Link = (props: LinkProps) => {
  const { href, classNames, label } = props;
  return (
    <NextLink href={href} data-testid="HCALink">
      <p
        data-testid="HCALinkLabel"
        className={`${classNames} text-hca-blue-900 underline`}
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
