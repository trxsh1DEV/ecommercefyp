export function zipCodeMask(zipCode: string) {
  // Remove todos os caracteres não numéricos
  zipCode = zipCode.replace(/\D/g, '');

  // Adiciona o hífen se o CEP tiver oito caracteres
  if (zipCode.length === 8) {
    zipCode = zipCode.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }

  return zipCode;
}
