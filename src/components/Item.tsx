import React from "react";
import { productItem } from "../assets/dummy";

interface IItemProps {
  item: productItem;
}

function Item(props: IItemProps) {
  return (
    <div className="masonry-item">
      {/* <img src={props.item.coverImage}></img> */}
      <p>{props.item.title}</p>
    </div>
  );
}

export default Item;
