import Image from "next/image";
import type React from "react";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  Comentary,
  Divider,
  ImageContainer,
  Name,
  Position,
  SectionTitle,
  TestimonialBox,
  TestimonialList,
  Wrapper,
} from "./Testimonial.styles";

const Testimonial: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Wrapper>
      <SectionTitle>{content.testimonial.title}</SectionTitle>
      <TestimonialList>
        <TestimonialBox>
          <ImageContainer>
            <Image
              src="/LucasIzidorio.jpg"
              alt={content.testimonial.testiomonials[0].imgAltText}
              width={120}
              height={120}
              unoptimized
            />
          </ImageContainer>
          <Comentary>{content.testimonial.testiomonials[0].comment}</Comentary>
          <Divider />
          <Name>{content.testimonial.testiomonials[0].name}</Name>
          <Position>{content.testimonial.testiomonials[0].position}</Position>
        </TestimonialBox>
        <TestimonialBox>
          <ImageContainer>
            <Image
              src="/LucasNeri.jpg"
              alt={content.testimonial.testiomonials[1].imgAltText}
              width={120}
              height={120}
              unoptimized
            />
          </ImageContainer>
          <Comentary>{content.testimonial.testiomonials[1].comment}</Comentary>
          <Divider />
          <Name>{content.testimonial.testiomonials[1].name}</Name>
          <Position>{content.testimonial.testiomonials[1].position}</Position>
        </TestimonialBox>
        <TestimonialBox>
          <ImageContainer>
            <Image
              src="/LucasBraga.jpg"
              alt={content.testimonial.testiomonials[2].imgAltText}
              width={120}
              height={120}
              unoptimized
            />
          </ImageContainer>
          <Comentary>{content.testimonial.testiomonials[2].comment}</Comentary>
          <Divider />
          <Name>{content.testimonial.testiomonials[2].name}</Name>
          <Position>{content.testimonial.testiomonials[2].position}</Position>
        </TestimonialBox>
      </TestimonialList>
    </Wrapper>
  );
};

export default Testimonial;
