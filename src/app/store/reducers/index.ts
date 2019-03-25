import {
  centroCostoReducer,
  investigacionReducer,
  poligrafiaReducer,
  servicioEspReducer,
  serviciosReducer
} from './reducers';

export const reducers = {
  centroCosto: centroCostoReducer,
  servicioEsp: servicioEspReducer,
  investigacion: investigacionReducer,
  poligrafia: poligrafiaReducer,
  servicio: serviciosReducer
};
