import { BartCategory } from "../interfaces";
import { BartModel, PeriodicElement } from "../models";

export const BART_CONSTANTS: BartModel[] = [
    {
        id: 1, name: 'BART001_Fuel_Purchase', isExpand: false, children: [
            { id: 11, name: 'BART001.a_Fuel_Purchase', isExpand: false, children: [] },
            { id: 12, name: 'BART001.b_Fuel_Purchase', isExpand: false, children: [] },
            { id: 13, name: 'BART001.c_Fuel_Purchase', isExpand: false, children: [] }
        ]
    },
    {
        id: 2, name: 'BART002_Fuel_Consumption', isExpand: false, children: [
            {
                id: 21, name: 'BART002.a_Fuel_Consumption', isExpand: false, children: [
                    {
                        id: 211, name: 'BART002.a.Natural Gas_Consumption', isExpand: false, children: [
                            { id: 2111, name: 'BART002.a.1.a_Natural Gas_Consumption', isExpand: false, children: [] },
                        ]
                    },
                    { id: 212, name: 'BART002.a.2_Biogas_Consumption', isExpand: false, children: [] },
                    { id: 213, name: 'BART002.a.3_Liquid Biomass_Consumption', isExpand: false, children: [] },
                    { id: 214, name: 'BART002.a.4_Solid Biomass_Consumption', isExpand: false, children: [] }
                ]
            },
            { id: 22, name: 'BART002.b_Fuel_Consumption', isExpand: false, children: [] },
            { id: 23, name: 'BART002.c_Fuel_Consumption', isExpand: false, children: [] }
        ]
    },
    {
        id: 3, name: 'BART003_Fuel_Inventory', isExpand: false, children: [
            { id: 31, name: 'BART003.a_Fuel_Inventory', isExpand: false, children: [] },
            { id: 32, name: 'BART003.a.1_Liquid Biomass_Inventory', isExpand: false, children: [] },
        ]
    }
]

export const ELEMENT_DATA_CONSTANTS: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

export const BART_CATEGORY_CONSTANTS: BartCategory[] = [
    { id: 1, name: 'BART001_Fuel_Purchase' },
    { id: 2, name: 'BART002_Fuel_Consumption' },
    { id: 3, name: 'BART003_Fuel_Inventory' },
];