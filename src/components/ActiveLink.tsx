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
  const { pathname } = useRouter();

  const isActive = useMemo(() => {
    return equals
      ? props.href === pathname
      : pathname.startsWith(props.href as string);
  }, [equals, props.href, pathname]);

  return (
    <NextLink {...props} passHref legacyBehavior>
      <Link fontWeight={isActive ? 500 : 400}>{children}</Link>
    </NextLink>
  );
}
