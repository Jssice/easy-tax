"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import superRates from "@/data/superRates.json";
import useStore from "@/lib/store";

function Superannuation() {
  const {
    selectedYear,
    superRate,
    setSelectedYear,
    setSuperRate,
    setSuperGuaranteeRate,
  } = useStore();

  const handleYearChange = (value) => {
    const selectedRate = superRates.find((rate) => rate.value === value);
    setSelectedYear(selectedRate ? selectedRate.value : "");
    setSuperRate(selectedRate ? selectedRate.rate.toFixed(2) : "");
    setSuperGuaranteeRate(selectedRate ? selectedRate.rate : "");
  };

  return (
    <AccordionItem value="superannuation">
      <AccordionTrigger>Superannuation</AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-2">
        <small>
          Superannuation is money set aside by your employers for your
          retirement. It is also possible to add money into your Super savings
          and this can change your income tax.
        </small>
        <div className="flex justify-between">
          <div>
            <Label htmlFor="financial_year">Year</Label>
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger id="financial_year">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {superRates.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="super">Super Rate ( % )</Label>
            <div className="relative">
              <Input
                type="text"
                id="super"
                value={superRate}
                onChange={(event) => setSuperRate(event.target.value)}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default Superannuation;
