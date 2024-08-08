//@ts-nocheck
"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { DotLottiePlayer } from '@dotlottie/react-player';
import React from "react";
import Contents from 'react-faq-component';
import { AnimatedTooltip } from "../ui/animated-tooltip";

export function Courses() {
    const tabs = [
        {
            title: "Fundamentals of Prgramming",
            value: "Fundamentals of Prgramming",
            content: (
                <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Fundamentals of Programming</p>
                    <CourseContent
                        desciption="The fundamentals of programming is the essential course for learning programming it covers for the basic necessity of learning programming"
                        rows={[
                            {
                                title: "Lorem ipsum dolor sit amet,",
                                content: "Lorem ipsum dolor sit amet, consectetur "
                            },
                            {
                                title: "Nunc maximus, magna at ultricies elementum",
                                content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
                            },
                            {
                                title: "Curabitur laoreet, mauris vel blandit fringilla",
                                content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
                            },
                            {
                                title: "What is the package version",
                                content: "v1.0.5"
                            }]}
                        courseTime={48}
                        techStack={[
                            {
                                id: 1,
                                name: "React",
                                designation: "Javascript",
                                image:
                                    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                            },
                            {
                                id: 2,
                                name: "Javascript",
                                designation: "Js",
                                image:
                                    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                            },
                            {
                                id: 3,
                                name: "Javascript",
                                designation: "Js",
                                image:
                                    "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
                            },

                        ]}
                    />
            </div>
),
},
    {
        title: "Programming in AI",
            value: "Programming in AI",
        content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Programming in AI</p>
            <CourseContent
                desciption="The fundamentals of programming is the essential course for learning programming it covers for the basic necessity of learning programming"
                rows={[
                    {
                        title: "Lorem ipsum dolor sit amet,",
                        content: "Lorem ipsum dolor sit amet, consectetur "
                    },
                    {
                        title: "Nunc maximus, magna at ultricies elementum",
                        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
                    },
                    {
                        title: "Curabitur laoreet, mauris vel blandit fringilla",
                        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
                    },
                    {
                        title: "What is the package version",
                        content: "v1.0.5"
                    }]}
                courseTime={48}
                techStack={[
                    {
                        id: 1,
                        name: "React",
                        designation: "Javascript",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    },
                    {
                        id: 2,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    },
                    {
                        id: 3,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
                    },

                ]}
            />
        </div>
    ),
    },
    {
        title: "Robotics and Automation",
            value: "Robotics and Automation",
        content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Robotics and Automation</p>
            <CourseContent
                desciption="The fundamentals of programming is the essential course for learning programming it covers for the basic necessity of learning programming"
                rows={[
                    {
                        title: "Lorem ipsum dolor sit amet,",
                        content: "Lorem ipsum dolor sit amet, consectetur "
                    },
                    {
                        title: "Nunc maximus, magna at ultricies elementum",
                        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
                    },
                    {
                        title: "Curabitur laoreet, mauris vel blandit fringilla",
                        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
                    },
                    {
                        title: "What is the package version",
                        content: "v1.0.5"
                    }]}
                courseTime={48}
                techStack={[
                    {
                        id: 1,
                        name: "React",
                        designation: "Javascript",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    },
                    {
                        id: 2,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    },
                    {
                        id: 3,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
                    },

                ]}
            />
    </div>
    ),
    },
    {
        title: "Maths For Programming",
            value: "Maths For Programming",
        content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Maths For Programming</p>
            <CourseContent
                desciption="The fundamentals of programming is the essential course for learning programming it covers for the basic necessity of learning programming"
                rows={[
                    {
                        title: "Lorem ipsum dolor sit amet,",
                        content: "Lorem ipsum dolor sit amet, consectetur "
                    },
                    {
                        title: "Nunc maximus, magna at ultricies elementum",
                        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
                    },
                    {
                        title: "Curabitur laoreet, mauris vel blandit fringilla",
                        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
                    },
                    {
                        title: "What is the package version",
                        content: "v1.0.5"
                    }]}
                courseTime={48}
                techStack={[
                    {
                        id: 1,
                        name: "React",
                        designation: "Javascript",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    },
                    {
                        id: 2,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    },
                    {
                        id: 3,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
                    },

                ]}
            />
    </div>
    ),
    },
    {
        title: "Game Development",
            value: "Game Development",
        content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 pb-0">
            <p>Game Development</p>
            <CourseContent
                desciption="The fundamentals of programming is the essential course for learning programming it covers for the basic necessity of learning programming"
                rows={[
                    {
                        title: "Lorem ipsum dolor sit amet,",
                        content: "Lorem ipsum dolor sit amet, consectetur "
                    },
                    {
                        title: "Nunc maximus, magna at ultricies elementum",
                        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
                    },
                    {
                        title: "Curabitur laoreet, mauris vel blandit fringilla",
                        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
                    },
                    {
                        title: "What is the package version",
                        content: "v1.0.5"
                    }]}
                courseTime={48}
                techStack={[
                    {
                        id: 1,
                        name: "React",
                        designation: "Javascript",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    },
                    {
                        id: 2,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    },
                    {
                        id: 3,
                        name: "Javascript",
                        designation: "Js",
                        image:
                            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
                    },

                ]}
            />
        </div>
    ),
    },
];
    return (
        <>
            <div className="h-screen w-full flex flex-col">
                <div className="flex flex-col gap-4 p-20 pb-10 w-full">
                    <p className=" text-5xl font-bold"> COURSES</p>
                    <p className="text-lg text-gray-400 px-20 py-5"> We offer wide range of courses to cover all the fundamental aspects of computer programming in full stack, AI and Robotics</p>
                </div>

                <div
                    className=" flex-grow [perspective:1000px] relative flex w-full p-10 items-start justify-start">
                    <Tabs tabs={tabs}/>
                </div>
            </div>
        </>
    );
}

const CourseContent = ({desciption,rows,courseTime,techStack}) => {
    const contentStyle={bgColor:"transparent",titleTextColor: "white",rowTitleColor: "white", arrowColor: "white",rowContentColor: 'white',rowContentPaddingLeft: '10px'};
    return (
        <div className="h-full w-full flex flex-col items-center p-4">
            <div className="flex-grow w-full p-4 pb-0 flex flex-col">
                <div className="text-gray-400 text-medium">
                    <div>
                        {desciption}
                    </div>
                </div>
                <div className="flex w-full flex-grow p-4">
                    <div className="w-2/3 h-full p-2 flex flex-col gap-4">
                        <div className="bg-[#501783] rounded-lg w-full overflow-y-scroll p-4 max-h-[22rem]"><Contents data={{title:"Course Content",rows}} styles={contentStyle} /></div>
                    </div>
                    <div className="h-full border-1 border-white rounded-full opacity-20"></div>
                    <div className="w-1/3 h-full p-2 flex flex-col">
                        <div className="text-xl h-1/2 flex flex-col p-4 gap-4">
                            <div className="">
                                <p className="opacity-70 text-2xl">Tech Stack</p>
                                <p className="h-full flex justify-center items-center"> <AnimatedTooltip items={techStack}/></p>
                            </div>
                        </div>
                        <div className="w-full border-1 border-white rounded-full opacity-20"></div>

                        <div className="text-xl h-1/2 flex flex-col p-4 gap-4">
                            <div className="">
                                <p className="opacity-70 text-2xl">Course Duration</p>
                                <p className="text-7xl h-full flex justify-center items-center"> {courseTime} Hrs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[4rem] flex items-center w-6/12 gap-4">
                <button
                    className="font-normal w-full text-medium text-white p-1 pl-4 bg-red-400 rounded-full flex gap-4 items-center">
                    <DotLottiePlayer
                        src="/animations/pdf.lottie"
                        autoplay
                        loop
                        className="h-12 "
                    >
                    </DotLottiePlayer>
                    <p className="font-bold min-w-fit">Download PDF</p>
                </button>
                <button
                    className="font-normal w-full text-medium text-white p-4 bg-black rounded-full flex gap-4 items-center justify-center">
                    <p className="font-bold min-w-fit">Enroll Today &rarr;</p>
                </button>
            </div>
        </div>
    );
};
