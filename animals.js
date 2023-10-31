
// Criando a constante array contendo os animais aleatorios
const animals = ['Macaco','Tucano','Elefante','Pavão','Leão','Hipopótamo']
// Iniciando estrutura if-else para verificar se a string 'Leao' esta dentro do array.

if (!animals.includes('Leão')) {
    // Se nao, printar o seguinte:
    console.log('Leão nao existe no array animals.')
} else {
    // Se sim, printar o seguinte:
    console.log('Existe um leão no array animals.')
}
