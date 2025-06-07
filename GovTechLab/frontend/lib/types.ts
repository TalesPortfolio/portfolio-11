// lib/types.ts

export interface DeputyRow {
  personTitle: string;
  name: string;
  firstname: string;
  birthDate: string;
  startDate: string;
  politicalGroup: string;
  politicalParty: string;
  adrFormated: string;
  phoneExt: string;
  mobile: string;
  email: string;
}

export interface PresenceRow {
  name: string;
  firstname: string;
  meetingPresence: string;
  meetingDate: string;
  meetingNumber: string;
  politicalGroup: string;
  politicalParty: string;
}

export interface VoteRow {
  name: string;
  firstname: string;
  voteResult: string;
  meetingDate: string;
  voteName: string;
}

export interface LawRow {
  lawNumber: string;
  lawType: string;
  lawDepositDate: string;
  lawEvacuationDate: string;
  lawStatus: string;
  lawTitle: string;
  lawContent: string;
  lawAuthors: string;
  vi: string;
}
