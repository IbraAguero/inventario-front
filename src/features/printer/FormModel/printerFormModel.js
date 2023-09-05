const URL = 'https://inventario-ministerio-api.onrender.com';

export default {
  formId: 'printerForm',
  formField: {
    nroInventario: {
      name: 'nroinventario',
      label: 'Nro Inventario*',
      requiredErrorMsg: 'Nro inventario es requerido',
    },
    nroSerie: {
      name: 'nroserie',
      label: 'Nro Serie*',
      requiredErrorMsg: 'Nro serie es requerido',
    },
    maker: {
      name: 'maker',
      label: 'Fabricante*',
      url: `${URL}/impresoras/fabricantes'`,
      requiredErrorMsg: 'Fabricante es requerido',
    },
    model: {
      name: 'model',
      label: 'Modelo*',
      url: `${URL}/impresoras/modelos/`,
      requiredErrorMsg: 'Modelo es requerido',
    },
    place: {
      name: 'place',
      label: 'Lugar*',
      url: `${URL}/lugares`,
      requiredErrorMsg: 'Lugar es requerido',
    },
    state: {
      name: 'state',
      label: 'Estado*',
      url: `${URL}/estados`,
      requiredErrorMsg: 'Lugar es requerido',
    },
  },
};
