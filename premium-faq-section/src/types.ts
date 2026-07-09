export interface FaqItemType {
  id: string;
  question: string;
  answer: string;
  isExpandedByDefault?: boolean;
}

export interface FaqSectionConfig {
  badge: string;
  badgeColor: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  column1: FaqItemType[];
  column2: FaqItemType[];
}
