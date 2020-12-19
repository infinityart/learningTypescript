/** --- 1. Basic Types ---
 * In dit hoofdstuk worden de basis types van Typescript behandeld.
 */

/** --- 1.1 Boolean ---
 * Dit is een true/false waarde.
 */
const isStarted: boolean = true;
const isDone: boolean = false;


/** --- 1.2 Number ---
 * In javascript zijn alle nummers een "floating point" (number) of een BigIntegers.
 * (BigInt wordt pas sinds ES2020 ondersteund)
 */
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 100n;


/** --- 1.3 String ---
 * Dit is een text waarde. Een variabele met tekst waarde kan op de volgende manieren geïnitialiseerd worden.
 */
const firstName: string = 'Jonty';
const lastName: string = "Sponselee";
// In een string template kan expressies gebruikt worden
const introduction: string = `My name is: ${firstName + lastName}`;


/** --- 1.4 Array ---
 * Dit is een lijst met waardes. In Typescript kan je de type op twee manieren schrijven
 */
const list: number[] = [1, 2, 3];
const secondList: Array<number> = [1, 2, 3]; // Dit wordt ook wel een generic genoemd


/** --- 1.4.1 Tuple ---
 * Dit kan gebruikt worden om een vast aantal types van elementen te definiëren bij een array
 */
let x: [string, number];
x = ["hello", 10]; // Ok
x = [10, "hello"]; // Error
x[3] = "world" // Error


/** --- 1.5 Enum ---
 * Dit is een nieuwe datatype dat aan typescript is toegevoegd.
 * Het lijkt op een array dat het [key => value] elementen heeft, maar deze zijn constant bij de initalisatie.
 * De keys van een enum kunnen benaamd worden in tegenstelling tot een key van een array.
 * Standaard begint de value van het eerste element bij 0 en bij elk extra element gaat het omhoog.
 */
enum Color {
    Red, // 0
    Green, // 1
    Blue,// 2
}
const c: Color = Color.Green;

// Je kan er ook voor zorgen dat de optelling bij een andere waarde begint.
enum AnotherColor {
    Red = 2,
    Green, // 3
    Blue, // 4
}

// Of volledig manueel bepalen
enum ColorMachTwo {
    Red = 1,
    Green = 2,
    Blue = 4,
}

// De key kan opgehaald worden door middel van de value
let colorName: string = ColorMachTwo[2];
console.log(colorName) // "Green"


/** --- 1.6 Unknown ---
 * Dit type gebruik je om een variabele te beschrijven
 * waarvan je de type nog niet weet tijdens het compileren.
 * Deze waardes komen van dynamische inhoud, bijvoorbeeld van de gebruiker.
 */
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

/** --- 1.7 Any ---
 *
 */


/** --- 1.8 Void ---
 *
 */


/** --- 1.9 Null and undefined ---
 *
 */

/** --- 1.10 Never ---
 *
 */


/** --- 1.11 Object ---
 *
 */

/** --- 1.12 Type assertions ---
 *
 */

/** --- 1.6 Boxed types ---
 *
 */
