import {config} from '../@models/app-settings';

/**
 * @author cristian stiven puenguenan <styven21121@gmail.com>
 */
export class Helper {

  static route(values: any, params: any): string {
    let url = config.api;

    if (Array.isArray(values)) {
      values.forEach((value, index) => {

        if (params[index]) {
          url += `/${value}/${params[index]}`;

        } else if (params !== null) {

          if (index === 0) {
            url += `/${value}/${params}`;

          } else {
            url += `/${value}`;

          }
        } else {
          url += `/${value}`;

        }
      });
    } else {
      url += `/${values}/${params}`;
    }
    return url;
  }
}
