import { 
    LOG_IN, 
    USUARIO_LOGADO_CARREGAR, 
    USUARIO_LOGADO_PREFERENCIAS,
    MODAL_OPEN,
  } from './layoutActions'
  
  const logIn = localStorage.tokenLeading360
  const initialState = {
    logIn: logIn ? true : false,
    sidebarRight: false,
    sidebarLeft: false,
    statusModal: '',
    infoUser: {},
    usuario: { nome: '', email: '' },
    preferencias: {
      language: {
        id: 'pt-BR',
        name: 'Português'
      }
    },
    listas: {
      idiomas: [
        {
          id: 'pt-BR',
          name: 'Português'
        },
        {
          id: 'en-US',
          name: 'English'
        }
      ]
    }
  }
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LOG_IN:
        return { ...state, logIn: payload }
      case USUARIO_LOGADO_CARREGAR:
        return { ...state, usuario: payload }
      case USUARIO_LOGADO_PREFERENCIAS:
        return { ...state, preferencias: {...state.preferencias, [payload.target.name]: payload.target.value} }
      case MODAL_OPEN:
        return { ...state, statusModal: payload }
      default:
        return state
    }
  }
  