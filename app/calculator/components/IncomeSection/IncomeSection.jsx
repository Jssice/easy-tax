"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback, useEffect, useState } from "react";
import {
  getTitle,
  calculateAnnualIncome,
  frequencyOptions,
  formatNumberToTwoDecimalPlaces,
} from "@/utils/incomeUtils";
import useStore from "@/lib/store";

export default function IncomeSection() {
  const [frequency, setFrequency] = useState("year");
  const [income, setIncome] = useState(60000);
  const [workDays, setWorkDays] = useState(0);
  const [workHours, setWorkHours] = useState(0);
  const [includeSuper, setIncludeSuper] = useState(false);
  const { setAnnualIncome, superRate } = useStore();

  const calculateAdjustedAnnualIncome = useCallback(() => {
    let annualIncome = formatNumberToTwoDecimalPlaces(
      calculateAnnualIncome(income, frequency, workDays, workHours)
    );
    if (includeSuper) {
      annualIncome /= 1 + parseFloat(superRate) / 100;
    }
    return annualIncome;
  }, [income, frequency, workDays, workHours, includeSuper]);

  useEffect(() => {
    const newAnnualIncome = calculateAdjustedAnnualIncome();
    setAnnualIncome(newAnnualIncome);
  }, [
    income,
    frequency,
    workDays,
    workHours,
    includeSuper,
    calculateAdjustedAnnualIncome,
  ]);

  return (
    <div className="flex flex-col">
      <Label className="text-xl">Income</Label>
      <div className="flex flex-col">
        <Label htmlFor="income" className="mt-4 font-bold">
          {getTitle(frequency)}
        </Label>
        <div className="flex items-end mt-2">
          <Input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="tracking-wider "
          />
          <Select defaultValue={frequency} onValueChange={setFrequency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(frequencyOptions).map((key) => (
                <SelectItem key={key} value={key}>
                  {frequencyOptions[key].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-4 py-2">
        <Checkbox
          id="include_super_salary"
          checked={includeSuper}
          onCheckedChange={() => setIncludeSuper(!includeSuper)}
        />
        <Label
          htmlFor="include_super_salary"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Salary includes Superannuation
        </Label>
      </div>
      {frequency === "day" && (
        <div>
          <Label htmlFor="work_days">
            How Many Work Days Do You Work in a Year?
          </Label>
          <Input
            type="number"
            id="work_days"
            value={workDays}
            onChange={(e) => setWorkDays(e.target.value)}
            className="tracking-wider mt-2"
          />
        </div>
      )}
      {frequency === "hour" && (
        <div>
          <Label htmlFor="work_hours">
            How Many Work hours Do You Work in a Year?
          </Label>
          <Input
            type="number"
            id="work_hours"
            value={workHours}
            onChange={(e) => setWorkHours(e.target.value)}
            className="tracking-wider mt-2"
          />
        </div>
      )}
    </div>
  );
}
