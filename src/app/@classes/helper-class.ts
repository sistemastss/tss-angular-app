import {config} from '../@models/app-settings';

/**
 * @author cristian stiven p <styven21121@gmail.com>
 */
export class Helper {

  static route(values: any, params: any = null): string {
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
      if (!params) {
        url += `/${values}`;
      } else {
        url += `/${values}/${params}`;
      }
    }
    return url;
  }

  static readFile(file) {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    });
  }
}
