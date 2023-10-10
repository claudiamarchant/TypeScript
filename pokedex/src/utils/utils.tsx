import { resolve } from "path";

//para api y manejar mejor nombre pokemon con simbolos extraños
export function formatPokemonName(name:string): string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f")
      } else if (name.includes("♂")) {
        return name.replace("♂", "-m")
      } else if (name.includes(". ")) {
        return name.replace(". ", "-")
      } else if (name.includes("farfetch'd")) {
        return name.replace("farfetch'd", "farfetchd")
      } else {
        return name;
      }
}

//funcion para cargar página
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code
export function waitFor(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

