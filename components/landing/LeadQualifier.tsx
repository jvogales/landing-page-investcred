'use client';

import { useEffect, useRef, useState } from 'react';
import { WHATSAPP_URL } from '@/lib/contact';
import { buildWhatsAppLeadUrl, LEAD_STAGES, LEAD_TOPICS, validateLead } from '@/lib/leads';
import type { LeadDraft, LeadErrors } from '@/lib/leads';
import Icon from './Icon';

export default function LeadQualifier() {
  const [draft, setDraft] = useState<LeadDraft>({ topic: '', stage: '' });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [review, setReview] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  const firstRadio = useRef<HTMLInputElement>(null);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const topicLabel = LEAD_TOPICS.find(topic => topic.value === draft.topic)?.label;
  const stageLabel = LEAD_STAGES.find(stage => stage.value === draft.stage)?.label;

  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      if (nextErrors.topic) firstRadio.current?.focus();
      else document.getElementById('lead-stage')?.focus();
      return;
    }
    setReview(true);
    requestAnimationFrame(() => reviewHeading.current?.focus());
  }

  return <div id="orientacao" className="lead-card">
    <div className="lead-card-top"><span className="eyebrow">VAMOS CONVERSAR</span><span className="step-indicator">{review ? '02' : '01'} <span>/ 02</span></span></div>
    {review ? <div className="lead-review">
      <div className="review-icon"><Icon name="check" size={26} /></div>
      <h2 tabIndex={-1} ref={reviewHeading}>Sua conversa,<br />do seu jeito.</h2>
      <p>Preparamos um ponto de partida para você falar com a equipe.</p>
      <dl className="review-summary"><div><dt>Assunto</dt><dd>{topicLabel}</dd></div>{stageLabel && <div><dt>Seu momento</dt><dd>{stageLabel}</dd></div>}</dl>
      <a href={buildWhatsAppLeadUrl(draft)} target="_blank" rel="noopener noreferrer" className="button button--wide">Continuar no WhatsApp <Icon name="arrowUp" /><span className="sr-only">(abre em nova aba)</span></a>
      <p className="lead-explanation">Nada foi enviado. A mensagem só será enviada quando você confirmar no WhatsApp.</p>
      <button className="text-button" type="button" onClick={() => { setReview(false); requestAnimationFrame(() => formHeading.current?.focus()); }}>Editar informações</button>
    </div> : <>
      <h2 tabIndex={-1} ref={formHeading}>Comece por uma<br />boa orientação.</h2>
      <p className="lead-intro">Conte o assunto. A gente prepara o início da conversa.</p>
      <form aria-label="Preparar conversa com a MAX" noValidate onSubmit={prepare}>
        <fieldset className="topic-fieldset" role="radiogroup" aria-invalid={Boolean(errors.topic)} aria-required="true" aria-describedby={errors.topic ? 'lead-topic-error' : undefined}>
          <legend>Sobre o que você quer conversar? <span className="required-note">(obrigatório)</span></legend>
          <div className="topic-options">{LEAD_TOPICS.map((topic, index) => <label className={`topic-option${draft.topic === topic.value ? ' is-selected' : ''}`} key={topic.value}>
            <input ref={index === 0 ? firstRadio : undefined} type="radio" name="topic" value={topic.value} checked={draft.topic === topic.value} required aria-describedby={errors.topic ? 'lead-topic-error' : undefined} onChange={() => { setDraft(value => ({ ...value, topic: topic.value })); setErrors(value => ({ ...value, topic: undefined })); }} />
            <span className="radio-indicator" aria-hidden="true" /><span>{topic.label}</span><Icon name={index === 0 ? 'document' : index === 1 ? 'shield' : 'dialogue'} size={18} />
          </label>)}</div>
          {errors.topic && <p id="lead-topic-error" className="field-error" role="alert">{errors.topic}</p>}
        </fieldset>
        <label className="select-label" htmlFor="lead-stage">Em que momento você está? <span>(opcional)</span></label>
        <div className="select-wrap"><select id="lead-stage" value={draft.stage} aria-invalid={Boolean(errors.stage)} aria-describedby={errors.stage ? 'lead-stage-error' : undefined} onChange={event => { setDraft(value => ({ ...value, stage: event.target.value })); setErrors(value => ({ ...value, stage: undefined })); }}>
          <option value="">Prefiro explicar no WhatsApp</option>{LEAD_STAGES.map(stage => <option value={stage.value} key={stage.value}>{stage.label}</option>)}
        </select></div>
        {errors.stage && <p id="lead-stage-error" className="field-error" role="alert">{errors.stage}</p>}
        <button type="submit" disabled={!hydrated} className="button button--wide">Preparar minha conversa <Icon name="arrow" /></button>
        <p className="lead-explanation">Você revisa aqui e envia pelo WhatsApp.</p>
        <p className="lead-safety"><Icon name="shield" size={13} />Sem CPF, telefone ou documentos por aqui.</p>
        <noscript><p className="nojs-message">Para conversar sem JavaScript, <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">continue diretamente no WhatsApp (abre em nova aba)</a>.</p></noscript>
      </form>
    </>}
  </div>;
}
