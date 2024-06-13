import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SummaryCard from "./components/SummaryCard";

import calculateTax from "@/utils/taxCalculator";

function ResultSummary({ selectedYear, category, annualIncome, superRate }) {
  // Function to compute tax-related values
  const computeTaxValues = () => {
    const incomeTax = calculateTax(selectedYear, category, annualIncome);

    const medicare = category !== "resident" ? 0 : annualIncome * 0.02;
    const totalTax = incomeTax + medicare;
    const netPay = annualIncome - totalTax;

    return { incomeTax, medicare, totalTax, netPay };
  };
  const computeSuperValues = () => {};

  const { incomeTax, medicare, totalTax, netPay } = computeTaxValues();

  return (
    <div className="flex-1 flex flex-col pl-2">
      <Label className="font-bold text-lg p-4">Your Tax summary for </Label>
      <Tabs defaultValue="" className="">
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
            totalTax={totalTax}
            netPay={netPay}
          />
        </TabsContent>
        <TabsContent value="monthly">
          <SummaryCard
            income={annualIncome / 12}
            incomeTax={incomeTax / 12}
            medicare={medicare / 12}
            totalTax={totalTax / 12}
            netPay={netPay / 12}
          />
        </TabsContent>
        <TabsContent value="fortnightly">
          <SummaryCard
            income={annualIncome / 26}
            incomeTax={incomeTax / 26}
            medicare={medicare / 26}
            totalTax={totalTax / 26}
            netPay={netPay / 26}
          />
        </TabsContent>
        <TabsContent value="weekly">
          <SummaryCard
            income={annualIncome / 52}
            incomeTax={incomeTax / 52}
            medicare={medicare / 52}
            totalTax={totalTax / 52}
            netPay={netPay / 52}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ResultSummary;
