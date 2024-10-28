"use client";

import React, { useEffect, useRef, useState } from "react";

export default function GitarFaq() {
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const faqData = [
    {
      id: 1,
      question: "Kurs içeriği nedir?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.",
    },
    {
      id: 2,
      question: "Kurs süresi nedir?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.",
    },
    {
      id: 3,
      question: "Nasıl çalışmalıyım?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.",
    },
    {
      id: 4,
      question: "Öğrenme süresi nedir?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus.",
    },
  ];


  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginBottom = "0px";
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "1.55em";
    }
  }, [currentIndex]);

  return (
    <dl className="toggle">
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() => {
              setCurrentIndex((pre) => (pre == index ? -1 : index));
            }}
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              {item.question}
            </a>
          </dt>
          <dd
            ref={(el) => (answerRefs.current[index] = el)}
            className="black faqAnswer"
          >
            {item.answer}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
