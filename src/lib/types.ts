export type Lead = {
  id: string;
  createdAt: string;

  name: string;
  phone: string;
  area: string;

  serviceType: "Repair" | "Installation" | "Service" | "Gas Refill" | "Shifting" | "Inspection";
  acType: "Inverter" | "Non-Inverter" | "Not sure";
  tonnage: "1 Ton" | "1.5 Ton" | "2 Ton" | "Not sure";

  message?: string;
};
