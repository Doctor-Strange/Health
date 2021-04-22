const validation = ({ require }: any) => {
  /**
   * if the require object is exist on the prop check the 'requirement' validation
   */
  if (require)
    require.forEach((element: IElement) => {
      // if the value is falsy throw an error
      if (element.value === "" || element.value === null || !element.value) {
        /**
         * @error
         * to control the HTML visibility on DOM
         * @message
         * to show the related message to the user
         */
        throw { error: true, message: `the ${element.name} is required.` };
      }
    });
};

interface IElement {
  name: string;
  value: string;
}

export default validation;
