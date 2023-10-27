
// Criando a constante array contendo os animais aleatorios
const animals = ['Macaco','Rato','Gato','Cao','Leao','Onca']
// Iniciando estrutura if-else para verificar se a string 'Leao' esta dentro do array.

if (!animals.includes('Leao')) {
    // Se nao, printar o seguinte:
    console.log('Leao nao existe no array animals.')
} else {
    // Se sim, printar o seguinte:
    console.log('Existe um leao no array animals.')
}