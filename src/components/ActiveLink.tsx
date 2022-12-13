import { PropsWithChildren, useMemo } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/react';

type ActiveLinkProps = LinkProps & {
  equals?: boolean;
};

// @TODO: Fix ActiveLink not working properly / ssr?
export default function ActiveLink({
  children,
  equals,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const { asPath, isReady } = useRouter();

  const isActive = useMemo(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href,
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      return equals
        ? linkPathname === activePathname
        : activePathname.startsWith(linkPathname);
    }
  }, [isReady, props.as, props.href, asPath, equals]);

  return (
    <NextLink {...props} passHref legacyBehavior>
      <Link fontWeight={isActive ? 500 : 400}>{children}</Link>
    </NextLink>
  );
}
