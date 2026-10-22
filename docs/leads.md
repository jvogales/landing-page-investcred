# Qualificação e encaminhamento para WhatsApp

A página ajuda o visitante a escolher um assunto e preparar uma conversa com a MAX ASSESSORIA. O canal continua sendo o WhatsApp já utilizado pelo negócio. Não existe CRM, cadastro de lead ou endpoint de envio neste projeto.

## Contrato

`lib/leads.ts` é o proprietário das opções e da validação. O assunto é obrigatório; a situação é opcional. Ambos aceitam apenas valores predefinidos. Não há campos de nome, telefone, CPF, dados bancários, documentos ou relato livre.

A seleção permanece apenas no estado da interface. O site não a grava em cookies, localStorage, sessionStorage ou query string. A função `buildWhatsAppLeadUrl` monta uma URL `https://wa.me/` com mensagem estruturada e codificada, usando somente os rótulos permitidos. O número comercial tem proprietário único em `lib/contact.ts`.

O visitante escolhe continuar no WhatsApp e precisa confirmar o envio lá. A interface não deve dizer que o atendimento foi agendado, que a mensagem chegou ou que o lead foi cadastrado. Hospedagem pode manter logs técnicos normais; isso é diferente de persistir as opções do qualificador.

## Evolução

Para registrar leads em CRM ou medir conversões reais será necessário definir integração, finalidade dos dados, acesso, tratamento de falhas e evidências de entrega. Não adicionar campos pessoais ou analytics implicitamente. A remodelação melhora a clareza e reduz fricção; aumento de conversão precisa ser medido após publicação.
