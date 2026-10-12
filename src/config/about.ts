import type { LocalizedString } from '../data/types';

export interface ProcessStep {
  step: string;
  title: LocalizedString;
  body: LocalizedString;
}

export { factSheet, manufacturingProcess, factoryMediaStrip, milestones } from './factory.config';
