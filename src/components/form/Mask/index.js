export const adicionaZero = (numero) => {
  if (numero <= 9) 
      return `0${numero}`;
  else
      return numero; 
}

export const MaskTelefone = (valor) => {
  valor = valor || ''
  let valueNew = ''
  if (valor.length <= 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{4})(\d)/, '$1-$2')
  } else if (valor.length > 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }
  return valueNew
}

export const MaskItemCep = (valor) => {
  let valueNew = ''
  valueNew = valor.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2')
  return valueNew
}

export const MaskCpf = (valor) => {
  let valueNew = ''
  valueNew = valor
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
  
  return valueNew
}

export const MaskData = (valor) => {
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
  return valueNew
}

export const MaskValor = (valor) => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
  return valueNew
}

export const MaskValorMoeda = (valor) => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return valueNew
}


export const maskFormat = (m, e) => {
  switch (m) {
    case 'cep':
      return MaskItemCep(e)
    case 'cpf':
      return MaskCpf(e)
    case 'date':
      return MaskData(e)
    case 'phone':
      return MaskTelefone(e)

    default:
      return e
  }
}

export const DataTransform = (valor, options) => {
  let valueNew = ''
  let data = new Date(valor);
  if (options?.format) {
    const formato = options.format.split('/');
    const formType = {
      'DD': adicionaZero(data.getDate()),
      'MM': adicionaZero(data.getMonth()+1),
      'YYYY': data.getFullYear()
    }
    
    valueNew = `${formType[formato[0]]}/${formType[formato[1]]}/${formType[formato[2]]}`;
  } else {
    valueNew = `${adicionaZero(data.getDate())}/${adicionaZero(data.getMonth()+1)}/${data.getFullYear()}`;
  }
  return valueNew
}

export const MaskDataHora = (valor, options, split = '/', volta = '/') => {
  let valueNew = {data: '', hora: ''}
  let data = new Date(valor);
  if (options?.format) {
    const format = options.format.indexOf("-") != -1
    const formato = options.format.split(split);
    const formType = {
      'DD': adicionaZero(data.getDate()),
      'MM': adicionaZero(data.getMonth()+1),
      'YYYY': data.getFullYear()
    }
    const formatoHora = options.format.split(':');
    const formTypeHora = {
      'HH': adicionaZero(data.getHours()),
      'MM': adicionaZero(data.getMinutes()),
      'SS': adicionaZero(data.getSeconds())
    }
    
    valueNew.data = `${formType[formato[0]]}${volta}${formType[formato[1]]}${volta}${formType[formato[2]]}`;
    valueNew.hora = `${formTypeHora[formatoHora[0]]}:${formTypeHora[formatoHora[1]]}:${formTypeHora[formatoHora[2]]}`;
  } else {
    valueNew.data = `${adicionaZero(data.getDate())}${volta}${adicionaZero(data.getMonth()+1)}${volta}${data.getFullYear()}`;
    valueNew.hora = `${adicionaZero(data.getHours())}:${adicionaZero(data.getMinutes())}:${adicionaZero(data.getSeconds())}`;
  }
  return valueNew
}

export const MaskDataHoraNormal = (valor, options, split = '/', volta = '/') => {
  let valueNew = {data: '', hora: ''}
  let dataT = valor.split('T')
  let data = dataT[0].split('-')
  let hora = dataT[1].split('-')
  
  valueNew.data = `${data[2]}${volta}${data[1]}${volta}${data[0]}`;
  valueNew.hora = `${hora[0].slice(0,2)}:${hora[0].slice(3,5)}`;

  return valueNew
}
