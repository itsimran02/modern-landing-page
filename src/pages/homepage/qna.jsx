import React, { useState } from "react";
import Paragraph from "../../components/Paragraph";
import HeadingSecondary from "../../components/HeadingSecondary";
import * as Accordion from "@radix-ui/react-accordion";
import { plusIcon, minusIcon } from "../../assets";

const items = [
  {
    question:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

const Qna = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-screen-2xl mx-auto md:px-20 py-12 px-5">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-2/5 lg:pt-8 lg:pr-14">
          <p className="text-[#EB2891] md:text-base font-inter text-sm">
            Frequently Asked Questions
          </p>
          <HeadingSecondary>
            Let’s clarify some of your questions
          </HeadingSecondary>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore{" "}
          </Paragraph>
        </div>
        <div className="lg:w-3/5">
          <Accordion.Root
            type="single"
            collapsible
            className="flex flex-col gap-4 rounded-[8]"
            onValueChange={(value) => {
              setOpenIndex(value);
            }}
          >
            {items.map((item, i) => {
              const isOpen = openIndex === `item-${i + 1}`;

              return (
                <div key={i}>
                  <Accordion.Item
                    value={`item-${i + 1}`}
                    className="bg-[#E3F1FF] p-4 lg:p-6 px-[10px] font-inter"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex justify-between items-center w-full gap-4">
                        <p className="text-[#172026] font-medium text-base md:text-lg text-start">
                          {item.question}
                        </p>
                        <span>
                          <img
                            src={
                              isOpen ? minusIcon : plusIcon
                            }
                            className="size-6"
                          />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      <p className="text-[#36485C] md:text-lg mt-2">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                </div>
              );
            })}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default Qna;
