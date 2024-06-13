import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MedicareOffset() {
  const [hasPrivateHospitalCover, setHasPrivateHospitalCover] = useState(false);
  const [hasMedicareLevyExemption, setHasMedicareLevyExemption] =
    useState(false);
  const [medicareLevyExemptionType, setMedicareLevyExemptionType] =
    useState("0");

  return (
    <AccordionItem value="medicare_offset">
      <AccordionTrigger>Medicare Offset</AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-2">
        <p>
          <small>
            The Medicare levy is 2% of your taxable income. You may get a
            reduction or exemption from paying the Medicare levy, depending on
            you and your spouse&apos; income and circumstances.
          </small>
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Switch
              id="private_hospital_cover"
              checked={hasPrivateHospitalCover}
              onCheckedChange={setHasPrivateHospitalCover}
            />
            <Label htmlFor="private_hospital_cover" className="capitalize">
              Private hospital cover
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              id="medicare_levy_exemption"
              checked={hasMedicareLevyExemption}
              onCheckedChange={setHasMedicareLevyExemption}
            />
            <Label
              htmlFor="medicare_levy_exemption"
              className="capitalize flex-1"
            >
              Medicare levy exemption
            </Label>
            {hasMedicareLevyExemption && (
              <Select
                value={medicareLevyExemptionType}
                onValueChange={(value) => setMedicareLevyExemptionType(value)}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Full or Half" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Full</SelectItem>
                  <SelectItem value="0.5">Half</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default MedicareOffset;
