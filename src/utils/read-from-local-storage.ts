const read_from_localStorage = () => {
  /**
   * if the data object is existed on local storage
   * get the data and pars them to json
   */
  if (localStorage["data"]) {
    /**
     * @data
     * will be filled with the stored appointments from local storage
     */
    let data = JSON.parse(localStorage["data"]);
    return data;
  } else {
    /**
     * if there is not any 'data' value in the local storage just return an empty array
     * to stymie unwanted errors
     */
    return [];
  }
};

export default read_from_localStorage;
