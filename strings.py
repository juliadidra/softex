#Estruture três códigos, os quais devem conter uma função de manipulação de string que obtenha resultado.

# O len indica quantos caracteres posssui a string
nome = 'julia'
print (nome)
x = len(nome)
print (x)

# O isdigit() indica se a string possui digitos (numeros), retornando um valor verdadeiro ou falso
y = 'julia'.isdigit()
print (y)

# O replace faz a troca/substituição das strings desejadas (no exemplo houve a troca de cachorro por gato)
txt1 = 'o cachorro é muito grande'
txt2 = txt1.replace('cachorro', 'gato')
print (txt2)
