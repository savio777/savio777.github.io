import { IHomeData } from "@/types/Home";

const getData = async (): Promise<IHomeData> => {
  const res = await fetch(
    "https://gist.githubusercontent.com/savio777/84e05621c6e592d76845dfd57cbe1327/raw/4e86e0fa8a33e0f56b68cd81bfe9daeb4569588a/portfolio-contact-data.json"
  );

  const resJson = await res.json();

  return resJson;
};

export default getData;
