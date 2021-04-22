const delete_from_localStorage = (index: number) => {
  console.log("delete_from_localStorage", index);

  /**
   * @data
   * will be filled with the stored appointments from local storage
   */
  let data = JSON.parse(localStorage["data"]);
  /**
   * @updated_date
   * filter the data and remove the given index from storage
   */
  let updated_date = data.filter((_: any, i: number) => {
    return i !== index;
  });
  /**
   * save the data on storage after thw change
   */
  localStorage["data"] = JSON.stringify(updated_date);
  return;
};

export default delete_from_localStorage;
