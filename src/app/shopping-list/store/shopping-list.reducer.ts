
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions'


export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

export interface AppState {
    shoppingList: State
}

// a state should be a javascript object
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1

};

// if the state param not be set value, the initialState is the default value
// by NgRx, once it has been initialized, state will always be previous state only for the first time
// so when NgRx is initializing the application state, the initialState will be our initial state
export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                // the rule of thumb, always copy the old state and then overwrite what you want to change
                // ... is the spread operator
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                // ...action.payload means pull all elements of payload[] array to ingredients[] array
                // if not do like this, the payload[] array will be a array element in ingredients[] array  
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex]
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }

            const updateIngredients = [...state.ingredients]
            updateIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updateIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        case ShoppingListActions.DELETE_INREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }),
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        case ShoppingListActions.START_EDIT:
            return { 
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
            }
        case ShoppingListActions.STOP_EDIT:
            return { 
                ...state,
                editIngredient: null,
                editIngredientIndex: -1
            }
        default:
            return state;
    }
}