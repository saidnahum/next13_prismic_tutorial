import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="sm" className="font-semibold text-center mb-4">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-center text-slate-600 mb-8">{children}</p>
  )
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl mx-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText components={components} field={slice.primary.heading} />
        <PrismicRichText components={components} field={slice.primary.body} />
        <Button field={slice.primary.button_link}>
          <span className="capitalize">{slice.primary.button_text}</span>
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;
