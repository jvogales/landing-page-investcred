import { WHATSAPP_NUMBER } from './contact';

export const LEAD_TOPICS = [
  { value: 'desconto-beneficio', label: 'Desconto no benefício' },
  { value: 'contrato-bancario', label: 'Dúvida sobre contrato' },
  { value: 'orientacao', label: 'Quero uma orientação' },
] as const;

export const LEAD_STAGES = [
  { value: 'entender-opcoes', label: 'Quero entender minhas opções' },
  { value: 'desconto-identificado', label: 'Já identifiquei um desconto' },
  { value: 'revisar-contrato', label: 'Tenho um contrato para revisar' },
] as const;

export interface LeadDraft {
  topic: string;
  stage: string;
}

export type LeadErrors = Partial<Record<keyof LeadDraft, string>>;

export function validateLead(lead: LeadDraft): LeadErrors {
  const errors: LeadErrors = {};
  if (!LEAD_TOPICS.some(topic => topic.value === lead.topic)) {
    errors.topic = 'Escolha o assunto sobre o qual deseja conversar.';
  }
  if (lead.stage !== '' && !LEAD_STAGES.some(stage => stage.value === lead.stage)) {
    errors.stage = 'Escolha uma das situações disponíveis ou deixe este campo em branco.';
  }
  return errors;
}

/** Builds an allowlisted draft only. Nothing is sent, persisted or logged. */
export function buildWhatsAppLeadUrl(lead: LeadDraft): string {
  if (Object.keys(validateLead(lead)).length > 0) {
    throw new Error('Revise as informações antes de continuar.');
  }
  const topic = LEAD_TOPICS.find(item => item.value === lead.topic)!;
  const stage = LEAD_STAGES.find(item => item.value === lead.stage);
  const message = [
    'Olá! Gostaria de conversar com a MAX ASSESSORIA.',
    `Assunto: ${topic.label}.`,
    ...(stage ? [`Situação: ${stage.label}.`] : []),
  ].join('\n\n');
  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set('text', message);
  return url.toString();
}
