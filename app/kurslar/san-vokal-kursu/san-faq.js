"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SanVokalFaq() {
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
        <section
            className={`page-section  bg-gray-light-1 `}
        >
            <div className="container position-relative">
                <div className="row">
                    {/* Images */}
                    <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                        <div className="call-action-2-images">
                            <div
                                className="call-action-2-image-1"
                                data-rellax-y=""
                                data-rellax-speed="0.5"
                                data-rellax-percentage="0.7"
                            >
                                <Image
                                    width={386}
                                    height={400}
                                    src="/assets/black/gitar_img_1.jpg"
                                    alt="Image Description"
                                    className="wow scaleOutIn"
                                    data-wow-duration="1.2s"
                                    data-wow-offset={0}
                                />
                            </div>
                            <div className="call-action-2-image-2">
                                <Image
                                    width={810}
                                    height={512}
                                    src="/assets/black/gitar_img_2.webp"
                                    alt="Image Description"
                                    className="wow scaleOutIn"
                                    data-wow-duration="1.2s"
                                    data-wow-offset={0}
                                />
                            </div>
                            <div
                                className="call-action-2-image-3"
                                data-rellax-y=""
                                data-rellax-speed="-0.5"
                                data-rellax-percentage="0.5"
                            >
                                <Image
                                    width={386}
                                    height={500}
                                    src="/assets/black/gitar_img_3.jpg"
                                    alt="Image Description"
                                    className="wow scaleOutIn"
                                    data-wow-duration="1.2s"
                                    data-wow-offset={0}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 d-flex align-items-center">
                        <div
                            className="wow fadeInUp"
                            data-wow-duration="1.2s"
                            data-wow-offset={100}
                        >
                            <h2 className="section-title mb-50 mb-sm-20">
                                Şan & Vokal kursları
                            </h2>

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
                            <div className="local-scroll">
                                <Link
                                    href={`/iletisim`}
                                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                                >
                                    <span>Bizi arayın</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* End Text */}
                </div>
            </div>
        </section>
    );
}
