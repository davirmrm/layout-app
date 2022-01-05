import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, IconSee, IconSeeNot, Input } from '../../components';
import { Header } from '../../components/Header';
import { styles } from './loginStyle'

export default () => {
    const [passwordType, setPasswordType] = useState(true);
    const ref = useRef({passwordRef: null, emailRef: null});
        
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Header left={true}>TOPO</Header>
        <Text>LOGIN</Text>
        <Input label='E-mail' name='email'
            ref={ref.emailRef}
            refInput={ref.emailRef}
            keyboardType="email-address"
            onSubmitEditing={()=> ref.passwordRef.current.focus()}
        />
        <Input label='Senha' name='senha' 
            ref={ref.passwordRef}
            refInput={ref.passwordRef}
            secureTextEntry={passwordType}
            actions={[
                {
                    action: ()=> setPasswordType(!passwordType),
                    content: passwordType? <IconSee /> : <IconSeeNot />
                }
            ]} 
        />
        <Button color='primary' onPress={()=> null}>
            login
        </Button>
    </View>
)};




{/* <Input 
name='password'
ref={passwordRef}
refInput={passwordRef}
label={textDefault.password} 
value={formValue.password}
handleOnChange={handleChange} 
handleFocus={handleFocus} 
handleBlur={handleBlur}
onSubmitEditing={()=> handleSubmit()}
returnKeyType="send"
secureTextEntry={passwordType}
required={true}
maxLength={50}
error={validateErro({name: 'password', erroForm: erroForm, message: textDefault.menssagem.passwordErro})}
actions={[
  {
    action: changeType,
    content: passwordType? <IcoVisivel color={colors.color_primary} /> : <IcoInvisivel color={colors.color_primary} />
  }
]}
/> */}