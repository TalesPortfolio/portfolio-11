// lib/types.ts

export interface DeputyRow {
  person_title: string;
  name: string;
  firstname: string;
  birth_date: string;
  start_date: string;
  political_group: string;
  political_party: string;
  adr_formated: string;
  phone_ext: string;
  mobile: string;
  email: string;
}


export interface PresenceRow {
  name: string;
  firstname: string;
  meeting_presence: string;
  meeting_date: string;
  meeting_number: string;
  political_group: string;
  political_party: string;
}


export interface VoteRow {
  vote_result: string;
  meeting_date: string;
  vote_name: string;
  name: string;         // ✅ Adicione isso
  firstname: string;    // ✅ E isso também
}


export interface LawRow {
  law_number: string;
  law_type: string;
  law_deposit_date: string;
  law_evacuation_date: string;
  law_status: string;
  law_title: string;
  law_content: string;
  law_authors: string;
  vi: string;
}
