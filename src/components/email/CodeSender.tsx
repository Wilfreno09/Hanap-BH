import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
export default function CodeSender({
  name,
  code,
}: {
  name: string;
  code: string;
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px] shadow-lg">
            <Section className="aspect-square h-20 w-auto">
              <Image src={logo} alt="logo" objectFit="contain" />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to{" "}
              <strong>
                <i>Hanap-BH</i> !
              </strong>
            </Heading>
            <Text>
              Hello <strong>{name}</strong>,
            </Text>
            <Text>Here's your signup code: </Text>
            <Section className="flex items-center justify-center aspect-video h-20 bg-gray-800 mx-auto color">
              <strong className="text-white text-4xl">{code}</strong>
            </Section>
            <Text>
              Please <strong>do not share this code with anyone</strong>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                You recently signup using this email, if you didn't do this
                action contact us on <strong>hanapbh.dev@gmail.com</strong>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
