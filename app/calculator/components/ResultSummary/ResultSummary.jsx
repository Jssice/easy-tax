import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SummaryCard from "./components/SummaryCard";
import VisualizationCard from "./components/VisualizationCard";

import useStore from "@/lib/store";

import { computeTaxValues, computeSuperValues } from "@/utils/taxUtils";
import { useEffect } from "react";

function ResultSummary() {
  const {
    annualIncome,
    selectedYear,
    superRate,
    superGuaranteeRate,
    selectedCategory,
    hasPrivateHospitalCover,
    hasMedicareLevyExemption,
    medicareLevyExemptionType,
    setVisualData,
    setAverageTaxRate,
    setMarginalTaxRate,
  } = useStore();

  const {
    incomeTax,
    medicare,
    totalTax,
    netPay,
    medicareLevySurcharge,
    marginalTaxRate,
    averageTaxRate,
  } = computeTaxValues(
    selectedYear,
    selectedCategory,
    annualIncome,
    hasPrivateHospitalCover,
    hasMedicareLevyExemption,
    medicareLevyExemptionType
  );

  const { superGuarantee, reportableContributions } = computeSuperValues(
    annualIncome,
    superRate,
    superGuaranteeRate
  );
  useEffect(() => {
    const netPayRate = parseFloat(((netPay / annualIncome) * 100).toFixed(1));
    const newVisualData = [
      { name: "Net pay", rate: netPayRate },
      {
        name: "Total tax",
        rate: averageTaxRate,
      },
    ];
    setVisualData(newVisualData);
  }, [netPay, annualIncome, averageTaxRate, setVisualData]);

  useEffect(() => {
    setAverageTaxRate(averageTaxRate);
    setMarginalTaxRate(marginalTaxRate);
  }, [averageTaxRate, marginalTaxRate, setAverageTaxRate, setMarginalTaxRate]);

  return (
    <div className="container flex-1 flex flex-col space-y-4 ">
      <Label className="font-bold text-xl p-4">
        Your Tax summary {selectedYear} to {selectedYear - -1}
      </Label>
      <Tabs defaultValue="annually">
        <TabsList className="flex">
          <TabsTrigger value="annually" className="flex-1">
            Annually
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex-1">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="fortnightly" className="flex-1">
            Fortnightly
          </TabsTrigger>
          <TabsTrigger value="weekly" className="flex-1">
            Weekly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="annually">
          <SummaryCard
            income={annualIncome}
            incomeTax={incomeTax}
            medicare={medicare}
            medicareLevySurcharge={medicareLevySurcharge}
            totalTax={totalTax}
            netPay={netPay}
            superGuarantee={superGuarantee}
            reportableContributions={reportableContributions}
          />
        </TabsContent>
        <TabsContent value="monthly">
          <SummaryCard
            income={annualIncome / 12}
            incomeTax={incomeTax / 12}
            medicare={medicare / 12}
            medicareLevySurcharge={medicareLevySurcharge / 12}
            totalTax={totalTax / 12}
            netPay={netPay / 12}
            superGuarantee={superGuarantee / 12}
            reportableContributions={reportableContributions / 12}
          />
        </TabsContent>
        <TabsContent value="fortnightly">
          <SummaryCard
            income={annualIncome / 26}
            incomeTax={incomeTax / 26}
            medicare={medicare / 26}
            medicareLevySurcharge={medicareLevySurcharge / 26}
            totalTax={totalTax / 26}
            netPay={netPay / 26}
            superGuarantee={superGuarantee / 26}
            reportableContributions={reportableContributions / 26}
          />
        </TabsContent>
        <TabsContent value="weekly">
          <SummaryCard
            income={annualIncome / 52}
            incomeTax={incomeTax / 52}
            medicare={medicare / 52}
            medicareLevySurcharge={medicareLevySurcharge / 52}
            totalTax={totalTax / 52}
            netPay={netPay / 52}
            superGuarantee={superGuarantee / 52}
            reportableContributions={reportableContributions / 52}
          />
        </TabsContent>
      </Tabs>
      <VisualizationCard />
    </div>
  );
}

export default ResultSummary;
