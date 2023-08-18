import { i18n } from '@lingui/core'

export default async function dynamicActivate(locale: string) {
  const { messages } = await import(`../locales/${locale}.po`);

  i18n.load(locale, messages);
  i18n.activate(locale);
}


