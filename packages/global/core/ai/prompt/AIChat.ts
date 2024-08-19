import { PromptTemplateItem } from '../type.d';

export const Prompt_QuoteTemplateList: PromptTemplateItem[] = [
  {
    title: 'Standard template',
    desc: 'Standard prompt, used for unstable structured database',
    value: `{{q}}
{{a}}`
  },
  {
    title: 'Question-Answer template',
    desc: 'Better for Question Answer structured database, making AI answer strictly following the content',
    value: `<Question>
{{q}}
</Question>
<Answer>
{{a}}
</Answer>`
  },
  {
    title: 'Strict Standard template',
    desc: 'Based on the standard template, stricter requirements are imposed on the model\'s answers.',
    value: `{{q}}
{{a}}`
  },
  {
    title: 'Strict Question-Answer template',
    desc: 'Based on the Question-Answer template, stricter requirements are imposed on the model\'s answers.',
    value: `<Question>
{{q}}
</Question>
<Answer>
{{a}}
</Answer>`
  }
];

export const Prompt_QuotePromptList: PromptTemplateItem[] = [
  {
    title: 'standard template',
    desc: '',
    value: `use <Data></Data> tagged content as your knowledge:

<Data>
{{quote}}
</Data>
Answer the request:
- If you don't know the answer, you need clarification.
- Avoid mentioning the knowledge you gained from <Data></Data>.
- Keep answers consistent with those described in <Data></Data>.
- Use Markdown syntax to optimize answer format.
- Answer in the same language as the question.

Question:"""{{question}}"""`
  },
  {
    title: 'Question-Answer template',
    desc: '',
    value: `Use <QA></QA> Tagged Question and Answer content to answer.

<QA>
{{quote}}
</QA>

Answer the request:
- Select one or more of the Q&A pairs to answer.
- The content of the answer should be as consistent as possible with the content in <Answer></Answer>.
- If there is no relevant Q&A pair, you need clarification.
- Avoid mentioning the knowledge you gained from QA, just reply with answers.


Question:"""{{question}}"""`
  },
  {
    title: 'Strict Standard template',
    desc: '',
    value: `Forget whatever knowledge you had, only use <Data></Data> tagged content as your knowledge:

<Data>
{{quote}}
</Data>
Thinking process:
1. Determine whether the problem is related to the content in the <Data></Data> tag.
2. If relevant, please answer the following requirements.
3. If it is irrelevant, you directly refuse to answer this question.

Answer the request:
- Avoid mentioning the knowledge you gained from <Data></Data>.
- Keep answers consistent with those described in <Data></Data>.
- Use Markdown syntax to optimize answer format.
- Answer in the same language as the question.

Question:"""{{question}}"""`
  },
  {
    title: 'Strict Question-Answer template',
    desc: '',
    value: `Forget whatever knowledge you had, only use <QA></QA> tagged content as your knowledge.

<QA>
{{quote}}
</QA>

Thinking process:
1. Determine whether the problem is related to the content in the <QA></QA> tag.
2. If it is irrelevant, you directly refuse to answer this question.
3. Determine whether there are similar or identical problems.
4. If there are the same questions, directly output the corresponding answers.
5. If there are only similar questions, please output the similar questions and answers together.

Answer the request:
- If there is no relevant Q&A pair, you need clarification.
- The content of the answer should be as consistent as possible with the content in the <QA></QA> tag.
- Avoid mentioning the knowledge you gained from QA, just reply with answers.
- Use Markdown syntax to optimize answer format.
- Answer in the same language as the question.

Question:"""{{question}}"""`
  }
];

// Document quote prompt
export const Prompt_DocumentQuote = `Use <Quote></Quote> tagged content as your knowledge:
<Quote>
{{quote}}
</Quote>
`;
