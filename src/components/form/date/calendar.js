import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Button';
import { colors, dimensions } from '../../../styles/appBase';
import { adicionaZero } from '../Mask';
import styles from './styles';
import IcoLeft from '../../icons/left.svg'
import IcoRight from '../../icons/right.svg'

const dataInfo = {
  nomesDias:['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  numeroSemanas: [1, 2, 3, 4, 5],
  numeroDiasSemana: [1, 2, 3, 4, 5, 6, 7],
  nomesMeses:[
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
}

const dataI = new Date()
const dataF = new Date()
const anosI = dataI.setMonth(-24000)
const anosF = dataF.setMonth(+24000)
const Calendar = ({
  name = '',
  label = '',
  action, 
  value, 
  dataInicio = new Date(anosI), 
  dataFim = new Date(anosF),
  schedule,
}) => {
  let dataAtual = new Date()
  const [dataState, setDataState] = useState(  {    
    dataFull: dataAtual,
    ano: dataAtual.getFullYear(),
    dia: dataAtual.getDate(),
    mes: dataAtual.getMonth(),
    diaSemana: dataAtual.getDay()
  })

  const [calendarioDias, setCalendarioDias] = useState(  
    <View><Text style={{textAlign: 'center'}}>carregando</Text></View>
  )  
  
  const [calendarioMesAno, setcalendarioMesAno] = useState(false)

  useEffect(()=>{
    listarDias(dataState.mes, dataState.ano)
  },[])

  useEffect(()=>{
    listarDias(dataState.mes, dataState.ano)
  },[schedule])

  dataAtual.setDate(1)
  dataAtual.setDate(1 - dataAtual.getDay())

  const mudarMes = (tipo) => {
    let mesNovo = tipo === '<'? dataState.mes - 1 : tipo === '>' ? dataState.mes + 1 : tipo
    let anoNovo = dataState.ano
    if (dataState.mes === 0 &&  tipo === '<') {
      mesNovo = 11
      anoNovo = dataState.ano - 1
    } else if (dataState.mes === 11 &&  tipo === '>') {
      mesNovo = 0
      anoNovo = dataState.ano + 1
    }
    
    dataAtual.setFullYear(anoNovo, mesNovo, 1)
    dataAtual.setDate( 1 - dataAtual.getDay() )

    setDataState({ ...dataState, mes: mesNovo, ano: anoNovo, dataFull: dataAtual })
    listarDias(mesNovo, anoNovo)
    action('')
  }

  const mudarAno = (tipo) => {
    let anoNovo = tipo === '<'? dataState.ano - 1 : dataState.ano + 1
        
    dataAtual.setFullYear(anoNovo, dataState.mes, 1)
    dataAtual.setDate( 1 - dataAtual.getDay() )

    setDataState({ ...dataState, ano: anoNovo, dataFull: dataAtual })
    listarDias(dataState.mes, anoNovo)
    action('')
  }

  const listarDias = (mesNovo, anoNovo) =>{
    setCalendarioDias( <CalendarioDias action={action} data={{dataState, dataAtual, value, dataInicio, dataFim, mesNovo, anoNovo, name, schedule}} /> )
  }

  const mesesAction = (s) =>{
    setcalendarioMesAno(s)
    action('')
    listarDias(dataState.mes, dataState.ano)
  }

  return (
    <View style={styles.calendar}>
      {calendarioMesAno?
        <View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.header_calendarBtnLeft, {width: dimensions.fullWidth / 5}]} onPress={() => mudarAno('<')}>
              <IcoLeft style={styles.header_text} width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header_calendar, {width: (dimensions.fullWidth / 5) * 3}]} onPress={() => mesesAction(false)}>
              <Text style={styles.header_text}>{dataState.ano}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header_calendarBtnRight, {width: dimensions.fullWidth / 5}]} onPress={() => mudarAno('>')}>
              <IcoRight style={styles.header_text} width={35} height={35} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.monts}>
              {dataInfo.nomesMeses.map((nM, i) => <Button key={i} style={styles.calendar_monsts} color={'default'} onPress={() => [mudarMes(i), mesesAction(false)]}>
                {nM}
              </Button>)}
            </View>
          </ScrollView>
        </View>
        : 
        <View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.header_calendarBtnLeft, {width: dimensions.fullWidth / 5}]} onPress={() => mudarMes('<')}>
              <IcoLeft style={styles.header_text} width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header_calendar, {width: (dimensions.fullWidth / 5) * 3}]} onPress={() => mesesAction(true)}>
              <Text style={styles.header_text}>{`${dataInfo.nomesMeses[dataState.mes]} de ${dataState.ano}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header_calendarBtnRight, {width: dimensions.fullWidth / 5}]} onPress={() => mudarMes('>')}>
              <IcoRight style={styles.header_text} width={35} height={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            {dataInfo.nomesDias.map((dia, i) => <Text key={`diaSemana-${dia}`} style={[styles.week]}>{dia}</Text>)}
          </View>
          <View>{calendarioDias}</View>
        </View>
      }
    </View>
  )
};

export const CalendarioDias = ({
  data,
  action,
}) => {
  let date = new Date()
  const diaNow = date.getDate()
  const mesNow = date.getMonth() + 1
  const anoNow = date.getFullYear()

  const scheduleYear = data.schedule[data.dataState.ano]
  const schedule = scheduleYear? scheduleYear[data.dataAtual.getMonth() + 2] : {}

  const typeDay = (e) => {
    const style = {borderBottomWidth: 4}
    switch (e) {
      case 'compromisso':
        return {...style, borderColor: colors.color_compromisso}
      case 'ocupado':
        return {...style, borderColor: colors.color_ocupado}
      case 'disponivel':
        return {...style, borderColor: colors.color_disponivel}
      default:
        return {...style, borderColor: 'transparent'}
    }
  }

  const handleAction = (e) => {
    action(e)
  }

  return (
    <>
    {dataInfo.numeroSemanas.map(s => {
      const semanaDias = () => 
        dataInfo.numeroDiasSemana.map((d) => {
          const diaAtual = data.dataAtual.getDate()
          const mesAtual = data.dataAtual.getMonth() + 1
          const anoAtual = data.dataAtual.getFullYear()
          data.dataAtual.setDate(diaAtual + 1)
          const diaAgenda = schedule? schedule[diaAtual]?schedule[diaAtual]:{}: {}
          
          const styleActual = () => {
            let stlA = ''
            if(diaAgenda?.disponivel > 0 && diaAgenda?.events > (diaAgenda.ocupados?diaAgenda.ocupados:0 + diaAgenda.indisponiveis?diaAgenda.indisponiveis:0)){
              stlA = 'disponivel'
            } else if(diaAgenda?.disponivel > 0 && diaAgenda?.events === (diaAgenda.ocupados?diaAgenda.ocupados:0 + diaAgenda.indisponiveis?diaAgenda.indisponiveis:0)){
              stlA = 'ocupado'
            } else if(diaAgenda?.disponivel > 0 && diaAgenda?.events === diaAgenda?.ocupados?diaAgenda.ocupados:0){
              stlA = 'ocupado'
            } else if(diaAgenda?.disponivel > 0 && diaAgenda?.events === diaAgenda?.indisponiveis?diaAgenda.indisponiveis:0){
              stlA = 'fechado'
            } else if(diaAgenda?.events){
              // stlA = 'disponivel'
            } else if(diaAgenda?.event){
              stlA = 'disponivel'
            }
            return typeDay(stlA)
          } 
          return (
            <TouchableOpacity 
              key={`dia-${diaAtual}`} 
              style={[styles.day]} 
              onPress={() => handleAction({
                name: data.name , 
                value: `${adicionaZero(diaAtual)}/${adicionaZero(mesAtual)}/${data.dataState.ano}`,
                agenda: diaAgenda
              })}
              // disabled={data.dataAtual > data.dataInicio && data.dataAtual < data.dataFim}
            >
              <Text style={mesNow === mesAtual && anoNow === anoAtual ? styleActual() : {}}>
                <Text style={[
                  styles.day_text,
                  data.mesNovo + 1 === mesAtual ? styles.mes_atual : styles.mes_aleatorio,
                  diaNow === diaAtual && mesNow === mesAtual && anoNow === anoAtual ? styles.day_atual : {},
                ]}>
                  {adicionaZero(diaAtual)} 
                </Text>
              </Text>
            </TouchableOpacity>
          )
        }
      )

      return <View key={`semana-${s}`} style={styles.row}>
        {semanaDias()}
      </View>
    })}
    </>
  )
}
export default Calendar;
