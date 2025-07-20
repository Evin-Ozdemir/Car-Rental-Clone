import { Car } from "../types";

type ReturnType = {
  results: Car[];
  total_count: number;
};

export const fetchCars = async (
  make?: string,
  model?: string,
  year?: string,
  page: string = "1"
): Promise<ReturnType> => {
  // Start with the base URL
  let url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?";

  // Eğer marka filtresi varsa, url'e marka filtresini ekleyin
  if (make) {
    url += `&refine=make:${encodeURIComponent(make)}`;
  }

  // Eğer model filtresi varsa, url'e model filtresini ekleyin
  if (model) {
    url += `&refine=model:${encodeURIComponent(model)}`;
  }

  // Eğer yıl filtresi varsa, url'e yıl filtresini ekleyin
  if (year) {
    url += `&refine=year:${encodeURIComponent(year)}`;
  }

  const offset = (parseInt(page) - 1) * 10;

  url += `&limit=10`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
