const save_to_localStorage = ({ title, date, time }: ISave_to_localStorage) => {
  /**
   * if the data object is existed on local storage
   * get the data and pars them to json
   */
  if (localStorage["data"]) {
    /**
     * @data
     * this step is implemented for accessing to old appointments on local storage
     * also,
     */
    let data = JSON.parse(localStorage["data"]);
    /**
     * add the the new appointment to the data
     */
    data.push({ title, date, time });
    /**
     * saved the new updated data on storage again
     */
    localStorage["data"] = JSON.stringify(data);
  } else {
    /**
     * if there is not the data object on local storage, create a default structure
     * and save the appointment on it
     */
    localStorage["data"] = JSON.stringify([{ title, date, time }]);
  }
};

interface ISave_to_localStorage {
  title: string;
  date: {
    year: number;
    month: number;
    day: number;
  } | null;
  time: {
    hour: number;
    minutes: number;
  };
}

export default save_to_localStorage;
