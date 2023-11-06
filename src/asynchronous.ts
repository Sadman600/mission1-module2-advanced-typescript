{
  // a Asynchronous in Typescript

  const myPromise = (): Promise<string> => {
    return new Promise<string>((resolved, reject) => {
      const data: string = "Something data";
      if (data) {
        resolved(data);
      } else {
        reject("No data found!");
      }
    });
  };
  type UserData = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getData = async (): Promise<UserData> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    const data = await response.json();
    return data;
  };
  getData();
}
