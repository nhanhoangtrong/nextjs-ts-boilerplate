import React, { ReactElement } from 'react';

interface Props {}

function CTA({}: Props): ReactElement {
  return (
    <section className="text-gray-100 body-font bg-indigo-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-100">
            Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
          </h1>
          <button className="flex-shrink-0 text-gray-800 bg-indigo-100 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 hover:text-gray-100 rounded text-lg mt-10 sm:mt-0">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
