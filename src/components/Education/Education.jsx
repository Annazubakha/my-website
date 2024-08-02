import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon, Title } from "../index";

export const Education = () => {
  return (
    <section className="text-[#202226] overflow-hidden" id="education">
      <Title>Education</Title>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#9736bb" }}
          icon={<Icon id="hat" className=" fill-white" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            FullStuck Developer
          </h3>
          <p>GoIT, Ukraine </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#9736bb" }}
          icon={<Icon id="hat" className=" fill-white" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Accounting and taxation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master&#x27;s degree
          </h4>
          <p>Odesa State Agrarian University, Ukraine </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#9736bb" }}
          icon={<Icon id="hat" className=" fill-white" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Accounting and taxation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor&#x27;s degree
          </h4>
          <p>National University of Food Technologies, Ukraine </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
