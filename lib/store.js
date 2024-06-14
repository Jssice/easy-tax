import { create } from "zustand";

const useStore = create((set) => ({
  annualIncome: 0,
  selectedYear: "2023",
  superRate: "11.0",
  superGuaranteeRate: "11.0",
  selectedCategory: "resident",
  hasPrivateHospitalCover: false,
  hasMedicareLevyExemption: false,
  medicareLevyExemptionType: "0",
  incomeTax: 0,
  medicare: 0,
  totalTax: 0,
  netPay: 0,
  medicareLevySurcharge: 0,

  setAnnualIncome: (income) => set({ annualIncome: income }),
  setSelectedYear: (year) => set({ selectedYear: year }),
  setSuperRate: (rate) => set({ superRate: rate }),
  setSuperGuaranteeRate: (rate) => set({ superGuaranteeRate: rate }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setHasPrivateHospitalCover: (value) =>
    set({ hasPrivateHospitalCover: value }),
  setHasMedicareLevyExemption: (value) =>
    set({ hasMedicareLevyExemption: value }),
  setMedicareLevyExemptionType: (type) =>
    set({ medicareLevyExemptionType: type }),
  setIncomeTax: (value) => set((state) => ({ incomeTax: value })),
  setMedicare: (value) => set((state) => ({ medicare: value })),
  setTotalTax: (value) => set((state) => ({ totalTax: value })),
  setNetPay: (value) => set((state) => ({ netPay: value })),
  setMedicareLevySurcharge: (value) =>
    set((state) => ({ medicareLevySurcharge: value })),
}));

export default useStore;
