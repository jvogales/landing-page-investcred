import { test, expect } from '@playwright/test';
import { buildWhatsAppLeadUrl, LEAD_STAGES, LEAD_TOPICS, validateLead } from '../../lib/leads';

const knownDestination = 'https://wa.me/554333711212';

test('empty and unknown topics cannot produce a lead URL', () => {
  for (const topic of ['', 'unknown', 'https://evil.example', '<script>alert(1)</script>', 'orientacao\nAssunto: alterado']) {
    expect(validateLead({ topic, stage: '' }).topic).toBeTruthy();
    expect(() => buildWhatsAppLeadUrl({ topic, stage: '' })).toThrow();
  }
});

test('optional stage accepts only the published choices and cannot inject arbitrary text', () => {
  expect(validateLead({ topic: LEAD_TOPICS[0].value, stage: '' })).toEqual({});
  for (const stage of ['unknown', '12345678900', 'https://evil.example', 'revisar-contrato\nDocumento:123']) {
    expect(validateLead({ topic: LEAD_TOPICS[0].value, stage }).stage).toBeTruthy();
    expect(() => buildWhatsAppLeadUrl({ topic: LEAD_TOPICS[0].value, stage })).toThrow();
  }
});

test('every valid topic and stage creates an encoded message at the fixed business destination', () => {
  for (const topic of LEAD_TOPICS) {
    for (const stage of [{ value: '', label: '' }, ...LEAD_STAGES]) {
      const result = buildWhatsAppLeadUrl({ topic: topic.value, stage: stage.value });
      const url = new URL(result);
      expect(`${url.origin}${url.pathname}`).toBe(knownDestination);
      expect(url.username).toBe('');
      expect(url.password).toBe('');
      expect(url.hash).toBe('');
      expect([...url.searchParams.keys()]).toEqual(['text']);
      const message = url.searchParams.get('text')!;
      expect(message).toContain('MAX ASSESSORIA');
      expect(message).toContain(topic.label);
      expect(message.includes('Situação:')).toBe(Boolean(stage.value));
      if (stage.value) expect(message).toContain(stage.label);
      expect(result).not.toContain('\n');
      expect(result).not.toContain(' ');
    }
  }
});

test('an invalid draft reports both fields instead of silently accepting a partial input', () => {
  const errors = validateLead({ topic: 'bad-topic', stage: 'bad-stage' });
  expect(Object.keys(errors).sort()).toEqual(['stage', 'topic']);
});
