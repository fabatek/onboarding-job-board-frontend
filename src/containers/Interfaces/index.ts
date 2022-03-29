//Custom Interface
//Using for : Header, Footer

export interface CustomItem {
  id: number;
  title: string;
  className?: string;
}
export interface CustomList {
  list: CustomItem[];
}
