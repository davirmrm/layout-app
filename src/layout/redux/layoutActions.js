import api from '../../helpers/api'

const nls = require('../nls/pt-BR.json')

export const MODAL_OPEN = 'MODAL_OPEN'
export const modalOpen = e => ({
  type: MODAL_OPEN,
  payload: e
})

export const USUARIO_LOGADO_CARREGAR = 'USUARIO_LOGADO_CARREGAR'
export const setCarregarUsuarioLogad = e => ({
  type: USUARIO_LOGADO_CARREGAR,
  payload: e
})


export const USUARIO_LOGADO_PREFERENCIAS = 'USUARIO_LOGADO_PREFERENCIAS'
export const setPreferenciasUsuarioLogad = e => ({
  type: USUARIO_LOGADO_PREFERENCIAS,
  payload: e
})

export const LOG_IN = 'LOG_IN'
const setLogIn = e => ({
  type: LOG_IN,
  payload: e
})

export const logIn = e => {
  return dispatch => {
    api
      .post(`/autenticacao`, e)
      .then(response => {
        localStorage.setItem('userLeading360', response.data.usuario)
        localStorage.setItem('tokenLeading360', response.data.token)

        dispatch([setLogIn(true), setCarregarUsuarioLogad(response.data.usuario)])
      })
      .catch(error => {
        dispatch([setLogIn(false)])
      })
  }
}

export const loged = e => {
  return dispatch => {
    if (localStorage.tokenLeading360) {
      api.get(`/${localStorage.tokenLeading360}`)
      .then(response => {
        dispatch([setLogIn(true), setCarregarUsuarioLogad(response.data)])
      })
      .catch(error => {
        dispatch([setLogIn(false)])
      })
    }
  }
}

export const logOut = e => {
  localStorage.clear()
  return dispatch => [dispatch([setLogIn(false), modalOpen(''),  setCarregarUsuarioLogad({})])]
}