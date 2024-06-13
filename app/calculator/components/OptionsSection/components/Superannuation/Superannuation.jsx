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
import { useState, useEffect } from "react";
import superRates from "@/data/superRates.json";

function Superannuation({ onYearChange, onSuperRateChange }) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [superRate, setsuperRate] = useState("11.00");

  const handleYearChange = (value) => {
    const selectedRate = superRates.find((rate) => rate.value === value);
    if (selectedRate) {
      setSelectedYear(selectedRate.value);
      setsuperRate(selectedRate.rate.toFixed(2));
      onSuperRateChange(selectedRate.rate);
    } else {
      setSelectedYear("");
      setsuperRate("");
    }
  };

  useEffect(() => {
    onYearChange(selectedYear);
  }, [selectedYear]);

  useEffect(() => {
    onSuperRateChange(superRate);
  }, [superRate]);

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
            <Label htmlFor="super">Super contribution ( % )</Label>
            <div className="relative">
              <Input
                type="text"
                id="super"
                value={superRate}
                onChange={(event) => setsuperRate(event.target.value)}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default Superannuation;
