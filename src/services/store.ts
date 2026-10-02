import { Person, Nomination, CategoryType } from '../types';
import { HEROES_DATA } from '../data/people';
import { MORE_HEROES_DATA } from '../data/morePeople';

export const ALL_PEOPLE: Person[] = [...HEROES_DATA, ...MORE_HEROES_DATA];

export interface CorrectionReport {
  id: string;
  personId: string;
  personName: string;
  fieldError: string;
  suggestedCorrection: string;
  sourceEvidence: string;
  submitterEmail: string;
  submittedAt: string;
  status: 'pending' | 'reviewed';
}

const INITIAL_NOMINATIONS: Nomination[] = [
  {
    id: 'nom-1',
    fullName: 'Dr. Chikwe Ihekweazu',
    category: 'science-tech',
    state: 'Imo',
    profession: 'Epidemiologist & Assistant Director-General WHO',
    contribution: 'Transformed the Nigeria Centre for Disease Control (NCDC) into a world-class public health institute that successfully coordinated Nigeria’s COVID-19 pandemic response.',
    whyIncluded: 'His transformative scientific leadership protected millions during health emergencies and earned global leadership at the WHO Hub for Pandemic and Epidemic Intelligence.',
    evidenceSource: 'World Health Organization Leadership Gazette & NCDC Annual Reports',
    websiteSocial: 'https://who.int',
    submitterName: 'Nkechi Okafor',
    submitterEmail: 'nkechi.o@heritage.ng',
    status: 'UNDER REVIEW',
    submittedAt: '2026-08-14T10:30:00Z',
  },
  {
    id: 'nom-2',
    fullName: 'Silas Adekunle',
    category: 'innovators',
    state: 'Osun',
    profession: 'Robotics Engineer & Tech Entrepreneur',
    contribution: 'Invented the world\'s first intelligent gaming robot (MekaMon) and partnered with Apple Inc. for worldwide retail distribution.',
    whyIncluded: 'Pioneer Nigerian robotics entrepreneur in augmented reality gaming, inspiring African students in robotics engineering.',
    evidenceSource: 'Forbes 30 Under 30 & Apple Global Retail Showcase (2017)',
    websiteSocial: 'https://reachrobotics.com',
    submitterName: 'Babatunde Adeleke',
    submitterEmail: 'babs@techlagos.io',
    status: 'FACT CHECKING',
    submittedAt: '2026-08-20T14:15:00Z',
  },
  {
    id: 'nom-3',
    fullName: 'Folake Solanke (SAN, CON)',
    category: 'women',
    state: 'Ogun',
    profession: 'Senior Advocate of Nigeria & International Jurist',
    contribution: 'First woman in Nigeria to be conferred Senior Advocate of Nigeria (SAN, 1981) and first African female International President of Zonta International.',
    whyIncluded: 'Broke supreme legal glass ceilings and mentored generations of female jurists and human rights advocates.',
    evidenceSource: 'Supreme Court Legal Practitioners Privileges Committee Registry',
    websiteSocial: 'https://supremecourt.gov.ng',
    submitterName: 'Foluso Martins',
    submitterEmail: 'martins.law@jurist.ng',
    status: 'APPROVED',
    submittedAt: '2026-09-02T09:00:00Z',
  },
];

const NOMINATIONS_KEY = '9ja_records_nominations_v1';
const CORRECTIONS_KEY = '9ja_records_corrections_v1';
const BOOKMARKS_KEY = '9ja_records_bookmarks_v1';

export function getStoredNominations(): Nomination[] {
  try {
    const raw = localStorage.getItem(NOMINATIONS_KEY);
    if (!raw) return INITIAL_NOMINATIONS;
    return JSON.parse(raw);
  } catch {
    return INITIAL_NOMINATIONS;
  }
}

export function saveNomination(nomination: Omit<Nomination, 'id' | 'status' | 'submittedAt'>): Nomination {
  const all = getStoredNominations();
  const created: Nomination = {
    ...nomination,
    id: `nom-${Date.now()}`,
    status: 'SUBMITTED',
    submittedAt: new Date().toISOString(),
  };
  const updated = [created, ...all];
  try {
    localStorage.setItem(NOMINATIONS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to local storage', err);
  }
  return created;
}

export function updateNominationStatus(id: string, status: Nomination['status']): Nomination[] {
  const all = getStoredNominations();
  const updated = all.map((item) => (item.id === id ? { ...item, status } : item));
  try {
    localStorage.setItem(NOMINATIONS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
  return updated;
}

export function saveCorrectionReport(report: Omit<CorrectionReport, 'id' | 'submittedAt' | 'status'>): CorrectionReport {
  let existing: CorrectionReport[] = [];
  try {
    const raw = localStorage.getItem(CORRECTIONS_KEY);
    if (raw) existing = JSON.parse(raw);
  } catch {
    existing = [];
  }
  const item: CorrectionReport = {
    ...report,
    id: `corr-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: 'pending',
  };
  const updated = [item, ...existing];
  try {
    localStorage.setItem(CORRECTIONS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
  return item;
}

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(personId: string): string[] {
  const current = getBookmarks();
  const exists = current.includes(personId);
  const updated = exists ? current.filter((id) => id !== personId) : [...current, personId];
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
  return updated;
}
