export interface GrowthPillar {
  id: string;
  number: string;
  iconName: string;
  title: string;
  description: string;
  category: "build" | "scale" | "automate";
  tag: string;
  details: string[];
}

export interface SocialProofItem {
  value: string;
  label: string;
}

export interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}
