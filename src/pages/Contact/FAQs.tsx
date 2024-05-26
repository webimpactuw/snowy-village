import FaqData from "./FaqData";
import { getFaqItems } from "../../../sv-sanity/SanityClient";

type SanityFaqData = {
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  answer: string;
  question: string; 
};

const faqsArray: Array<SanityFaqData> = await getFaqItems();

export default function FAQs() {
  return (
    <div className="flex-col hero w-full p-5 pt-10 bg-beige md:pl-[20%] md:pr-[20%] md:p-8 text-center">

          <div className="hero-content flex-col">

            <div className="flex-col">
              <h1>FAQ's</h1>
                <button className="btn md:btn-lg bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 text-md hover:bg-green-600 mt-4">Read more..</button>
                
                {faqsArray
                  .map((faq: SanityFaqData, i: number) => {
                      const data: FaqData = {
                        question: faq.question,
                        answer: faq.answer
                      };
                      return (
                        <div key={i} tabIndex={0} className="collapse collapse-arrow bg-ice-blue mt-5 outline outline-blue-300">
                          <input type="checkbox" name="my-accordion-1" defaultChecked/> 
                          <div className="collapse-title text-xl font-medium">
                            {data.question}
                          </div>
                          <div className="collapse-content"> 
                            <p>{data.answer}</p>
                          </div>
                        </div>
                      );
                  })
                }
            </div>
          </div>
    </div>
  )
}