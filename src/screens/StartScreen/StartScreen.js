import React from 'react'
import { Background } from '../../components/Background/Background'
import { Logo } from '../../components/Logo/Logo'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { Paragraph } from '../../components/Paragraph/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
