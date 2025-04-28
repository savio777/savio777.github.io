import { IHomeData } from "@/types/Home";

const getData = async (): Promise<IHomeData> => {
  const res = await fetch(
    "https://gist.githubusercontent.com/savio777/84e05621c6e592d76845dfd57cbe1327/raw/cf08106e7627bd0be95f879e9424dc506c775aae/portfolio-contact-data.json"
  );

  const resJson = await res.json();

  return resJson;
};

export default getData;
