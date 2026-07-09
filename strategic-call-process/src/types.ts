/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StepItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
  keyHighlight: string;
  themeColor: string; // Tailwind colors like 'emerald', 'indigo', etc.
}

export interface BrandDiagnosisInput {
  brandName: string;
  websiteUrl: string;
  monthlyAdSpend: string;
  primaryBottleneck: 'creative' | 'retention' | 'website_cro' | 'ad_account' | 'all';
  biggestWin: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}
