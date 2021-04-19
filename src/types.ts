export interface Earthquake {
  place: string;
  id: string;
  longitutde: number;
  latitutde: number;
  mag: number;
  time: string;
  depth: number;
  magType: string;
  gap: number;
  dmin: number;
  rms: number;
  net: string;
  updated: string;
  type: string;
  depthError: number;
  magError: number;
  magNst: number;
  status: string;
  locationSource: string;
  magSource: string;
}

export interface DataProps {
  id: string;
  title: string;
  inDetails?: boolean;
}
