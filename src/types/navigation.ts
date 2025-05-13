
import { ReactNode } from 'react';

export interface NavItem {
  text: string;
  href: string;
  icon: ReactNode;
}

export interface FilterButton {
  icon: ReactNode;
  label: string;
  value?: string;
  action?: () => void;
}

export interface TimeFrameOption {
  value: string;
  label: string;
}

export interface ChartTypeOption {
  value: string;
  label: string;
}
