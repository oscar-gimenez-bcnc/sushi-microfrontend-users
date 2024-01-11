import { User } from '../types/domain';

interface FetchDataProps {
  url: string;
}

const fetchData = async ({ url }: FetchDataProps): Promise<User[] | undefined> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error ${res.status} obtained from ${url}.`);
  }

  const data = await res.json();
  return data;
};

export default fetchData;
