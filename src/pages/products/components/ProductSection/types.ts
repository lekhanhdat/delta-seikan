export type ProductSectionProps = {
  title: string;
  description: string;
  features?: {
    title: string;
    desc: string;
  }[];
  images: string[];
  specImage?: string;
};
