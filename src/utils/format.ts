type document = 'document' | 'phone'

export const sendFormat = (value: string) => value.replace(/\D/g, '')

/**
 * Função para formatar dados vindos da api
 * @param type Tipo da string document | phone
 * @param value string
 */
export const formatString = (type: document, value: string) => {
  if (type === 'document') {
    if (value.length === 11) {
      return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }
    return value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    )
  }
  if (type === 'phone') {
    return value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
  return value
}

export const formatDate = (date: string) => {
  if (date) {
    const data = date.substring(0, 10)
    const Dformat = data.split('-')
    return `${Dformat[2]}/${Dformat[1]}/${Dformat[0]}`
  }
  return date
}

export const formatMoney = (value: string) => {
  const removeComma = value.replace(',', '')
  const removeColon = removeComma.replaceAll('.', '')
  const cents = `${removeColon.slice(2, -2)}.${removeColon.slice(-2)}`
  const removeSpace = cents.slice(1)
  return removeSpace
}

export const formatCep = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

export const formatFixedPhoneNumber = (value: string | undefined) => {
  if (!value) {
    return value
  }
  return value.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}

export const FormatMonth = (data: number) => {
  switch (data) {
    case 0:
      return '01'
    case 1:
      return '02'
    case 2:
      return '03'
    case 3:
      return '04'
    case 4:
      return '05'
    case 5:
      return '06'
    case 6:
      return '07'
    case 7:
      return '08'
    case 8:
      return '09'
    case 9:
      return '10'
    case 10:
      return '11'
    case 11:
      return '12'
    default:
      return '0'
  }
}
