"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ items }) => {
  return (
    <div className='mt-12 flex'>
      <VerticalTimeline>
        {items.map((item) => (
          <VerticalTimelineElement
            key={item.company_name}
            date={item.date}
            iconStyle={{ background: item.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={item.icon}
                  alt={item.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: item.iconBg,
              boxShadow: "none",
            }}
          >
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {item.title}
              </h3>
              <p
                className='text-black-500 font-medium text-base'
                style={{ margin: 0 }}
              >
                {item.company_name}
              </p>
            </div>

            <ul className='my-5 list-disc ml-5 space-y-2'>
              {item.points.map((point, index) => (
                <li
                  key={`${item.company_name}-point-${index}`}
                  className='text-black-500/50 font-normal pl-1 text-sm'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
