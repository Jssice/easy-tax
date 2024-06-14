import { Accordion } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";

import Superannuation from "./components/Superannuation";
import TaxCategory from "./components/TaxCategory";
import MedicareOffset from "./components/MedicareOffset";

function OptionsSection() {
  return (
    <div>
      <Label className="text-xl">Options</Label>

      <p>
        Adjust these options to tailor the calculations to your specific needs.
      </p>
      <Accordion type="multiple" defaultValue={["superannuation"]}>
        <Superannuation />
        <TaxCategory />
        <MedicareOffset />
      </Accordion>
    </div>
  );
}

export default OptionsSection;
