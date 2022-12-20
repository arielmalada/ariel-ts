import React, { useEffect, useRef } from "react";
import SubSectionTitle from "../components/atoms/SubSectionTitle";
import SectionTitle from "../components/atoms/SectionTitle";
import { useSpring, animated } from "react-spring";
import tw from "twin.macro";
import { Typography } from "@material-tailwind/react";
import { useIsInViewport } from "../hooks/useInViewPort.hook";
import { useSectionContext } from "../contexts/useSection.context";

const Container = tw.div`flex items-center justify-center h-full mb-24`;

const AnimatedContainer = animated(Container);

const Experience: React.FC = () => {
  const refSection = useRef<HTMLDivElement>(null);
  const isInViewportExperience = useIsInViewport(refSection);
  const props = useSpring({
    config: { mass: 5, tension: 700, friction: 200 },
    x: isInViewportExperience ? 0 : 70,
    opacity: isInViewportExperience ? 1 : 0,
    delay: 200,
    reset: false,
  });
  const sectionContext = useSectionContext();

  useEffect(() => {
    if (isInViewportExperience) sectionContext.setSection("experience");
  }, [isInViewportExperience, sectionContext]);
  return (
    <section
      id="experience"
      className="min-h-[90vh] px-4 py-2 scroll-smooth relative overflow-hidden"
    >
      <SectionTitle>Experience</SectionTitle>
      <AnimatedContainer style={props}>
        <div className="max-w-3xl" ref={refSection}>
          <div className="py-3">
            <SubSectionTitle>
              <a href="https://pintap.id" className="mr-2">
                Pintap
              </a>
              / Frontend Engineer / Aug. 2021 - Aug. 2022
            </SubSectionTitle>
            <div>
              <ul className="pl-5 list-disc">
                <li>
                  Worked together with 3rd party vendor to develop Pintap
                  Research with React and SolidJS:
                </li>
                <ul className="pl-5 list-[square]">
                  <li>
                    Developed questions page that branched questions options
                    based on user answers with different question types with
                    React framework.
                  </li>
                  <li>
                    Created the form response page to record answers from survey
                    participants & developed with SolidJS.
                  </li>
                </ul>
                <li>Developed Pintap Concierge with React and Gatsby</li>
                <ul className="pl-5 list-[square]">
                  <li>
                    Developed calendar features that connected to internal video
                    call service.
                  </li>
                  <li>
                    Added WYSIWYG text editor with tiptap and developed internal
                    small extension to take notes about the summary sales from
                    provided charts.
                  </li>
                  <li>
                    Added annotation tools with Konva for notes features to
                    annotate from the provided charts.
                  </li>
                  <li>
                    Developed the landing site with Gatsby to provide
                    information to potential client about Pintap Concierge,
                    optimized the SEO and the site performance.
                  </li>
                </ul>
                <li>
                  Separated internal React components into a new private package
                  registry to increase reusability of the components
                </li>
                <li>
                  Worked together with internal team and 3rd party vendor,
                  helped onboarding new co-worker and initiate documentation of
                  the developed applications
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3">
            <SubSectionTitle>
              <a href="https://hukumonline.com" className="mr-2">
                Hukumonline
              </a>
              / Software Engineer / Aug. 2019 - Aug. 2021
            </SubSectionTitle>
            <ul className="pl-5 list-disc">
              <li>
                Working on the new version of Hukumonline website with a React
                framework to bring more features such as premium articles,
                Hukumonline events, learning management system, and law search
                engine that increased the subscription number and page views
                after it was released.
              </li>
              <li>
                Developed and improved the performance of several RESTful API
                endpoints with ExpressJS
              </li>
              <li>
                Maintain SEO and site performance by refactoring codes and using
                Web Vitals
              </li>
              <li>Maintained legacy application (PHP, Zend)</li>
            </ul>
          </div>
          <div className="py-3">
            <SubSectionTitle>
              <a
                href="https://play.google.com/store/apps/details?id=com.makara.vas"
                className="mr-2"
              >
                Makara VAS
              </a>
              / Mobile Developer / Dec. 2018 - June 2019
            </SubSectionTitle>
            <Typography variant="paragraph">
              My first work outside college project. learned a lot on how to
              translate what client want to an app specification, and work
              together with other developer
            </Typography>
            <p>
              Developed mobile apps of Makara VAS to survey the condition of a
              vessel for Makara Marine with Flutter
            </p>
          </div>
          <div className="py-3">
            <SubSectionTitle>
              <span className="mr-2">Jakarta Industrial Estate Pulogadung</span>
              / Web Developer Intern / June 2018 - Sep. 2018
            </SubSectionTitle>
            <Typography variant="paragraph">
              Work here as an intern, developed a financial management system
              with codeigniter, learned agile development on an actual project,
              and how to present progress to a client.
            </Typography>
          </div>
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default Experience;
