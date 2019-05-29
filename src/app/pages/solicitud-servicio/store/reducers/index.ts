import { centroCostoReducer } from './centro-costo.reducer';
import { espReducer } from './esp.reducer';
import { investigacionReducer } from './investigacion.reducer';
import { poligrafiaReducer } from './poligrafia.reducer';

export const reducers = {
  centroCosto: centroCostoReducer,
  esp: espReducer,
  investigacion: investigacionReducer,
  poligrafia: poligrafiaReducer,
};
