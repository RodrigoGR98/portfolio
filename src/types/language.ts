type TopbarNavOptionType = {
  label: string;
  ref: string;
};

type ExperienceType = {
  imgAltText: string;
  title: string;
  date: string;
  description: string;
};

type TestimonialType = {
  imgAltText: string;
  comment: string;
  name: string;
  position: string;
};

export type ContentTextType = {
  topbar: {
    navOptions: TopbarNavOptionType[];
    cvButton: string;
  };
  banner: {
    title: string;
    description: string;
  };
  skills: string;
  experience: {
    title: string;
    experiences: ExperienceType[];
  };
  about: {
    title: string;
    description: string;
    description2: string;
  };
  testimonial: {
    title: string;
    testiomonials: TestimonialType[];
  };
};
