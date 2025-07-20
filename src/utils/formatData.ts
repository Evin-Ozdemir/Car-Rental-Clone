import { Car } from "../types";

type ReturnType = [string, string | number | null][];

export default function formatData(car: Car): ReturnType {
  // Ekrana basıcağımız değerler
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // Nesneyi diziye çevirelim
  const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));
  // Değeri döndür
  return arr;
}
