export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  title: string;
  text: string;
  resultMetric?: string;
  date: string;
  verified: boolean;
}

export type BackgroundPreset = 'golf' | 'dark' | 'light' | 'none';
