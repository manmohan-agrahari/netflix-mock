
import {createFeatureSelector, createSelector} from '@ngrx/store'
import { State } from '../models/netflix.models'


const getNetflixState = createFeatureSelector<State>('netflix')
export const getUserState = createSelector(getNetflixState,(state)=>state.user)
export const getErrorMsg= createSelector(getNetflixState,(state)=>state.errorMsg)
export const getSpinner = createSelector(getNetflixState, (state ) => state.spinner)
