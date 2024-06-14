"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useStore from "@/lib/store";

function TaxCategory() {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <AccordionItem value="tax_category">
      <AccordionTrigger>Tax Category</AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-2">
        <p>
          <small>
            Australian residents, foreign residents, and Working Holiday Makers
            have different tax rates applied to their wages. * Some
            countries&apos; WHMs are exempt from these rates.
          </small>
        </p>
        <RadioGroup
          defaultValue={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="resident" id="au_resident" />
            <Label htmlFor="au_resident" className="capitalize">
              Australian resident
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="non-resident" id="foreign_resident" />
            <Label htmlFor="foreign_resident" className="capitalize">
              foreign resident
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="whm" id="working_holiday_maker" />
            <Label htmlFor="working_holiday_maker" className="capitalize">
              Working Holiday Maker
            </Label>
          </div>
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  );
}

export default TaxCategory;
