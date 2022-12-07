import Link from 'next/link';
import { Container, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Container maxW="container.lg" mt={20} mb={10}>
      <Stack
        as="header"
        direction={'row'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Heading as="h1" size="lg" fontWeight={500}>
          Ariel Gerstein
        </Heading>

        <Stack as="nav" direction="row">
          <Stack
            as="ul"
            direction={'row'}
            listStyleType={'none'}
            spacing={6}
            mr={6}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="/about">About</Link>
            </li> */}
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </Stack>
          <Stack as="ul" direction="row" listStyleType={'none'} spacing={6}>
            <li>
              <a href="mailto:ariel.gers@gmail.com">
                <Image
                  src="/social-icons/email.svg"
                  alt="email icon"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/arielger">
                <Image
                  src="/social-icons/twitter.svg"
                  alt="twitter icon"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arielgerstein/">
                <Image
                  src="/social-icons/linkedin.svg"
                  alt="linkedin icon"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/arielger">
                <Image
                  src="/social-icons/github.svg"
                  alt="github icon"
                  width="24"
                  height="24"
                />
              </a>
            </li>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
