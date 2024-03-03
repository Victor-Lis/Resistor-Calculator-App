type Params = {
    valor1: string;
    valor2: string;
    multiplicador: number;
}

export const calcularOhmns = ({valor1, valor2, multiplicador}: Params) => {
    let valor = (parseInt(valor1+valor2)*multiplicador)
    if(valor >= 1000000){
        return `${valor/1000000}MΩ`
    }else if(valor >= 1000){
        return `${valor/1000}KΩ`
    }else{
        return `${valor}Ω`
    }
}