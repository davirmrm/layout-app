import api from "../../../services/api";

export const typePatern = {
  phone: /\([0-9]{2}\) [0-9]{4,7}-[0-9]{4,5}$/,
  email: /[a-zA-Z0-9$*&#]+[\.]?([$*&-_#]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
  ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  number: /[0-9]+$/,
  senha: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
  documento: /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/

}

export const validateInfo = ({name, value, pattern}) => {
  if (value) {
    // if (pattern?.search('type') !== -1) {
    //   pattern = JSON.parse(pattern)
    // }
    
    if (typeof value === 'object' && pattern === 'select') {
      if (value && Object.keys(value).length === 0 ) {
        return { [name]: 'vazio' }
      } else {
        return {[name]: false}
      }
    } else if (value && typeof value === 'object' && pattern === 'multiselect') {
      if (value.length === 0 ) {
        return { [name]: 'vazio' }
      } else {
        return {[name]: false}
      }
    } 

    if ( typeof pattern === 'object' && pattern.type === 'number' ) {
      return {[name]: validarNumber({ value, max: pattern.max, min: pattern.min })}
    } else if ( typeof pattern === 'object' && pattern.type === 'date' ) {
      console.log(value, 'dataaaaaaaaaaaaaaaaaaaaaa', pattern);
      
      return {[name]: validarData({ value, max: pattern.max, min: pattern.min })}
    } else if ( typeof pattern === 'string' && pattern === 'cpf' ) {
      return {[name]: validarCPF(value)}
    } else if ( typeof pattern === 'string' && pattern === 'cpfExist' ) {
      return {[name]: validarCPFExist(value)}
    } else if ( typeof pattern === 'string' && pattern === 'phone' ) {
      return {[name]: validarTelefone(value)}
    } else if (value?.search(typePatern[pattern]?typePatern[pattern]:pattern) === -1) {
      return {[name]: 'regex'}
    } else {
      return {[name]: false}
    }
  } else {
    return { [name]: 'vazio' }
  }
}

export const validateForm = (form) => {
  let resp = {}
  const filtro = form.required.filter((r)=> r.name === form.data[r.name] ? r : null )
  
  const pattern = (e) => {
    if (typeof e === 'object') {
      return JSON.stringify(e)
    } else if (typeof e === 'string') {
      return e
    } else {
      return ''
    }
  }

  form.required.map((e) => {
    const valInfo = validateInfo({name: e.name, value: form.data[e.name], pattern: e.pattern})
    const respVal = valInfo[e.name] === false ? {} : valInfo
    resp = { ...resp, ...respVal }
  })
  
  return resp
}

export const validate = (input) => {
  const filtro = input.required.filter((r)=> r.name === input.data.name ? r : null )

  if (filtro.length) {
    return validateInfo({name: input.data.name, value: input.data.value, pattern: filtro[0].pattern})
  }
}

export const  validateErro = (e) => {
  if (typeof e.erroForm === 'object') {
    const keys = Object.keys(e.erroForm)
    const filtroErro = keys.filter((f)=> f === e.name && e.erroForm[e.name] !== false)
    if (filtroErro.length) {
      if (e.message[e.erroForm[e.name]]) {
        return e.message[e.erroForm[e.name]]
      } else{
        return e.message.campoObrigatorio
      }
    } else {
      return ''
    }
  } else{
    if (e.erroForm) {
      if (e.message[e.erroForm]) {
        return e.message[e.erroForm]
      } else{
        return e.message.campoObrigatorio
      }
    } else {
      return ''
    }
  }
}








export const validarCPF = (e) => {
  if (typeof e !== "string") return 'invalido'
  e = e.replace(/[\s.-]*/igm, '')
  if (
      !e ||
      e.length !== 11 ||
      e === "00000000000" ||
      e === "11111111111" ||
      e === "22222222222" ||
      e === "33333333333" ||
      e === "44444444444" ||
      e === "55555555555" ||
      e === "66666666666" ||
      e === "77777777777" ||
      e === "88888888888" ||
      e === "99999999999" 
  ) {
      return 'invalido'
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(e.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11)) resto = 0
  if (resto != parseInt(e.substring(9, 10)) ) return 'invalido'
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(e.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto === 10) || (resto === 11)) resto = 0
  if (resto !== parseInt(e.substring(10, 11) ) ) return 'invalido'
  return false
}

export const validarCPFExist = (e) => {
  const verif = validarCPF(e)
  if (verif) {
    return verif
  } else {
    return false
  }
}

export const validarTelefone = (e) => {
  var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
  return regex.test(e);
}

export const adicionaZero = (numero) => {
  if (numero.toString().length === 1 && numero <= 9) 
      return `0${numero}`;
  else
      return numero; 
}

export const validarData = (e) =>{
  const formato = e.value.split('/');
  const formType = `${formato[2]}-${adicionaZero(formato[1])}-${adicionaZero(formato[0])}`
  const dmin = new Date(e.min);
  const dmax = new Date(e.max);
  const de = new Date(formType);
  
  if(adicionaZero(formato[1]) > 12) return 'regex'
  if(adicionaZero(formato[0]) > 31) return 'regex'
  if(de < dmin) return 'menor';
  if(de > dmax) return 'maior';
  return false;
}

export const validarNumber = (e) =>{
  if( Number(e.valor) < Number(e.min) ) return 'menor';
  if( Number(e.valor) > Number(e.max) ) return 'maior';
  return false;
}