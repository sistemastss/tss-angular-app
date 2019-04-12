import {
  centroCostoReducer, espMasivoReducer,
  investigacionReducer,
  poligrafiaReducer,
  servicioEspReducer,
  serviciosReducer
} from './reducers';

export const reducers = {
  centroCosto: centroCostoReducer,
  servicioEsp: servicioEspReducer,
  espMasivo: espMasivoReducer,
  investigacion: investigacionReducer,
  poligrafia: poligrafiaReducer,
  servicio: serviciosReducer
};
