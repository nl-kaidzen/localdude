"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature


// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            Make your relocation smooth and stress-free
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            <p>Get the answers on your noob questions, and get the best advice from the your Local DUDE.</p>
            <p>Write e-mails to authorities, create a list of fancy restaurants or translate anything from your native language to the local one.</p>

            <p className={'text-2xl mt-4 font-bold '}>Spend your time more efficiently with AI help!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesListicle;
