import React from "react";

interface ListProps<T> {
  items: T[]; //создали дженерик потому что в массив могут попасть данные любого типа
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
