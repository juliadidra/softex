'''Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. 
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.'''

try:
    nome = input('digite seu nome: ')
    ano = int(input('digite o ano do seu nascimento: '))
    if (ano < 1922) or (ano > 2022):
        print ('digite um ano compativel')
        
    else:
        idade = 2022 - ano 
        print ('voce completara {} anos em 2022'.format(idade))
except:
    
    print ('nao foi possivel calcular sua idade, voce inseriu dados incorretos')
