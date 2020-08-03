import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

interface Props {}

function PostDetail({}: Props): ReactElement {
  return (
    <article className="text-gray-700 body-font">
      <NextSeo title={'Post Detail'} />

      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="mb-8">
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Back
          </button>
        </div>
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>

          <h1 className="my-6 font-black text-center text-2xl lg:text-4xl uppercase">
            Meggings portland fingerstache lyft
          </h1>

          <div className="flex flex-col sm:flex-row my-8">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-600">
                  Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken
                  gentrify portland.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon
                locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual
                salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt
                fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical,
                chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon
                brooklyn.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="my-4 lg:w-4/6 mx-auto">
          <h2 className="font-medium text-2xl mt-4 mb-2">Heading 1</h2>
          <p className="leading-relaxed text-md">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore
            direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger
            bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher
            paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
          </p>

          <h2 className="font-medium text-2xl mt-4 mb-2">Heading 2</h2>
          <p className="leading-relaxed text-md mb-2">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore
            direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger
            bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher
            paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
          </p>

          <h2 className="font-medium text-2xl mt-4 mb-2">Heading 3</h2>
          <p className="leading-relaxed text-md mb-2">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore
            direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger
            bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher
            paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
          </p>
        </div>
      </div>
    </article>
  );
}

export default PostDetail;
