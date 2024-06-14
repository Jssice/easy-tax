"use client";

import IncomeSection from "./components/IncomeSection";
import OptionsSection from "./components/OptionsSection";
import ResultSummary from "./components/ResultSummary";

export default function Calculator() {
  return (
    <div className="container flex ">
      <div className="container flex flex-col space-y-4 flex-1 border-r-2">
        <p className="text-3xl mt-4">Pay calculator</p>

        <p>
          Enter your salary, adjust the settings and see the results in the
          summary section.
        </p>
        <IncomeSection />
        <OptionsSection />
      </div>
      <ResultSummary />
    </div>
  );
}
