namespace screenMagic {
    export function plotAT(index: number): void{
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x,y) 

        }     
}