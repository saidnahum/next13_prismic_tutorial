import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-3 font-medium sm:text-left text-center">
      {children}
    </Heading>
  ),
  paragraph: ({children}) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  )
};

const icons = {
  calendar: <CalendarIcon/>,
  bargraph: <BarGraphIcon/>,
  clover: <CloverIcon/>,
  hourglass: <HourglassIcon/>
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => (
          <div 
            key={index} 
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M7.2 40c0-12.6 0-18.9 3.9-22.8 3.9-3.9 10.2-3.9 22.7-3.9h13.4c12.5 0 18.8 0 22.7 4 4 3.8 4 10.1 4 22.7v6.7c0 12.5 0 18.8-4 22.7-3.9 4-10.2 4-22.7 4H33.8c-12.5 0-18.8 0-22.7-4-4-3.9-4-10.2-4-22.7V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M23.8 13.3v-5m33.4 5v-5M8.8 30h63.4"
      ></path>
      <path
        fill="#0891B2"
        d="M60.5 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zm0-13.4a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zM43.8 56.7a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zm0-13.4a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zM27.2 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zm0-13.4a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0z"
      ></path>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M27.2 26.7h26.6v26.6H27.2V26.7z"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M53.8 53.3h10a10 10 0 11-10 10v-10zm-26.6 0h-10a10 10 0 1010 10v-10zm26.6-26.6h10a10 10 0 10-10-10v10zm-26.6 0h-10a10 10 0 1110-10v10z"
      ></path>
    </svg>
  );
}

function BarGraphIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeWidth="5"
        d="M73.8 73.3H7.2"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M70.5 73.3v-25a5 5 0 00-5-5h-10a5 5 0 00-5 5v25"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M50.5 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4c-1.5 1.5-1.5 3.9-1.5 8.6v56.6"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M30.5 73.3V31.7a5 5 0 00-5-5h-10a5 5 0 00-5 5v41.6"
      ></path>
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M50.4 30.2L40.5 40l-9.9-9.8C21 20.6 16 15.8 17.4 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6z"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M30.6 49.8l9.9-9.8 9.9 9.8C60 59.4 65 64.2 63.6 68.4a7 7 0 01-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4l-.4-1c-1.4-4.2 3.5-9 13.2-18.6z"
      ></path>
    </svg>
  );
}
