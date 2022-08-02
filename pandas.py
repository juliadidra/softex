'''Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”. O arquivo deve ter a seguinte estrutura:

aluno: Nome do aluno;
nota_1: Primeira nota;
nota_2: Segunda nota;
faltas: Número de faltas;

O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”,
 que terá a média das duas notas do aluno. A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado. 
O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

Por fim, o programa deverá mostrar na tela:
- o maior número de faltas;
- a média geral das notas dos alunos;
- e a maior média.

Veja em anexo um exemplo do arquivo “notas_alunos.csv”.'''

import pandas as pd

df = pd.read_csv("notas.csv")
df['media'] = (df['nota1'] + df['nota2']) /2

df.loc[df['media'] < 7, 'situaçao'] = 'REPROVADO'
df.loc[df['media'] >= 7, 'situaçao'] = 'APROVADO'
df.loc[df['faltas'] > 5, 'situaçao'] = 'REPROVADO'
print(df)
df.to_csv('situacao_alunos.csv')
maiorfaltas = df['faltas'].max()
mediageral = df['media'].median()
maiormedia = df['media'].max()
print ('o maior numero de faltas foi: {}'.format(maiorfaltas))
print ('a media geral dos alunos foi: {}'.format(mediageral))
print ('a maior media foi: {}'.format(maiormedia))
