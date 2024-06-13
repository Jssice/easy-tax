"use client";

import { useState } from "react";
import IncomeSection from "./components/IncomeSection";
import OptionsSection from "./components/OptionsSection";
import ResultSummary from "./components/ResultSummary";

export default function Calculator() {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [superRate, setSuperRate] = useState("11.0");
  const [selectedCategory, setSelectedCategory] = useState("resident");

  return (
    <div className="container flex ">
      <div className="container flex flex-col space-y-4 flex-1 border-r-2">
        <p className="text-3xl mt-4">Pay calculator</p>
        <div>
          <p>Annual Income: {annualIncome}</p>
          <p>year: {selectedYear}</p>
          <p>super rate: {superRate}</p>
          <p>Category: {selectedCategory}</p>
        </div>
        <p>
          Enter your salary, adjust the settings and see the results in the
          summary section.
        </p>
        <IncomeSection onAnnualIncomeChange={setAnnualIncome} />
        <OptionsSection
          onYearChange={setSelectedYear}
          onSuperRateChange={setSuperRate}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <ResultSummary
        annualIncome={annualIncome}
        selectedYear={selectedYear}
        superRate={superRate}
        category={selectedCategory}
      />
    </div>
  );
}
