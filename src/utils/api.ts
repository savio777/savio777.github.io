import { IHomeData } from "@/types/Home";

const getData = async (): Promise<IHomeData> => {
  const res = await fetch(
    "https://gist.githubusercontent.com/savio777/84e05621c6e592d76845dfd57cbe1327/raw/c7a2af9531e7e18ae5c941efecd7b044030ac50a/portfolio-contact-data.json"
  );

  const resJson = await res.json();

  return resJson;
};

export default getData;
